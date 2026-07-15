/** Cloudflare Worker entry point for the Vue 3 website and lead API. */

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const MAX_BODY_BYTES = 32_768;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_RETENTION_MS = 2 * 24 * 60 * 60 * 1000;

let leadSchemaReady: Promise<void> | undefined;

type LeadInput = {
  name: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  contactType: string;
  message: string;
  locale: "zh" | "en";
  mode: "contact" | "download";
  source: string;
  consent: true;
  marketing: boolean;
};

function jsonResponse(body: unknown, status = 200, extraHeaders?: HeadersInit) {
  const headers = new Headers(extraHeaders);
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("cache-control", "no-store");
  return new Response(JSON.stringify(body), { status, headers });
}

function withSecurityHeaders(response: Response) {
  const headers = new Headers(response.headers);
  headers.set("Content-Security-Policy", "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: blob:; media-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; form-action 'self'");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function makeLeadNumber(date = new Date()) {
  const day = date.toISOString().slice(0, 10).replaceAll("-", "");
  const suffix = crypto.randomUUID().replaceAll("-", "").slice(0, 10).toUpperCase();
  return `SEBO-${day}-${suffix}`;
}

function stringField(
  data: Record<string, unknown>,
  key: string,
  maxLength: number,
  issues: string[],
  required = false,
) {
  const raw = data[key];
  if (raw === undefined || raw === null) {
    if (required) issues.push(`${key} is required`);
    return "";
  }
  if (typeof raw !== "string") {
    issues.push(`${key} must be a string`);
    return "";
  }
  const value = raw.trim();
  if (required && !value) issues.push(`${key} is required`);
  if (value.length > maxLength) issues.push(`${key} is too long`);
  return value;
}

function checked(value: unknown) {
  return value === true || value === "yes" || value === "true" || value === "on" || value === "1";
}

function validateLead(data: Record<string, unknown>): { value?: LeadInput; issues: string[] } {
  const issues: string[] = [];
  const name = stringField(data, "name", 80, issues, true);
  const company = stringField(data, "company", 160, issues, true);
  const phone = stringField(data, "phone", 32, issues, true);
  const email = stringField(data, "email", 254, issues, true).toLowerCase();
  const interest = stringField(data, "interest", 120, issues) || "未指定";
  const contactType = stringField(data, "contactType", 80, issues) || "项目咨询";
  const message = stringField(data, "message", 4_000, issues);
  const sourceValue = stringField(data, "source", 256, issues) || "/";
  const source = sourceValue.startsWith("/") ? sourceValue : "/";
  const localeValue = stringField(data, "locale", 8, issues) || "zh";
  const modeValue = stringField(data, "mode", 16, issues) || "contact";
  const consent = checked(data.consent);

  if (!/^[0-9+()\-\s]{6,32}$/.test(phone)) issues.push("phone is invalid");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) issues.push("email is invalid");
  if (localeValue !== "zh" && localeValue !== "en") issues.push("locale is invalid");
  if (modeValue !== "contact" && modeValue !== "download") issues.push("mode is invalid");
  if (!consent) issues.push("consent is required");

  if (issues.length > 0) return { issues };

  return {
    issues,
    value: {
      name,
      company,
      phone,
      email,
      interest,
      contactType,
      message,
      locale: localeValue as LeadInput["locale"],
      mode: modeValue as LeadInput["mode"],
      source,
      consent: true,
      marketing: checked(data.marketing),
    },
  };
}

async function ensureLeadSchema(db: D1Database) {
  if (!leadSchemaReady) {
    leadSchemaReady = db
      .batch([
        db.prepare(`CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          lead_number TEXT NOT NULL UNIQUE,
          name TEXT NOT NULL,
          company TEXT NOT NULL,
          phone TEXT NOT NULL,
          email TEXT NOT NULL,
          interest TEXT NOT NULL DEFAULT '未指定',
          contact_type TEXT NOT NULL DEFAULT '项目咨询',
          message TEXT NOT NULL DEFAULT '',
          locale TEXT NOT NULL DEFAULT 'zh',
          mode TEXT NOT NULL DEFAULT 'contact',
          source TEXT NOT NULL DEFAULT '/',
          consent INTEGER NOT NULL CHECK (consent = 1),
          marketing INTEGER NOT NULL DEFAULT 0 CHECK (marketing IN (0, 1)),
          user_agent TEXT NOT NULL DEFAULT '',
          status TEXT NOT NULL DEFAULT 'new',
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`),
        db.prepare("CREATE UNIQUE INDEX IF NOT EXISTS leads_lead_number_unique ON leads (lead_number)"),
        db.prepare("CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at)"),
        db.prepare("CREATE INDEX IF NOT EXISTS leads_contact_type_idx ON leads (contact_type)"),
        db.prepare("CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status)"),
        db.prepare(`CREATE TABLE IF NOT EXISTS lead_rate_limits (
          rate_key TEXT PRIMARY KEY,
          window_start INTEGER NOT NULL,
          request_count INTEGER NOT NULL DEFAULT 0,
          updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`),
        db.prepare("CREATE INDEX IF NOT EXISTS lead_rate_limits_window_start_idx ON lead_rate_limits (window_start)"),
      ])
      .then(() => undefined)
      .catch((error: unknown) => {
        leadSchemaReady = undefined;
        throw error;
      });
  }
  return leadSchemaReady;
}

async function hashRateKey(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function applyRateLimit(request: Request, db: D1Database) {
  const now = Date.now();
  const windowStart = Math.floor(now / RATE_LIMIT_WINDOW_MS) * RATE_LIMIT_WINDOW_MS;
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientAddress = request.headers.get("cf-connecting-ip")?.trim() || forwarded || "unknown";
  const userAgent = request.headers.get("user-agent")?.slice(0, 160) || "unknown";
  const identity = clientAddress === "unknown" ? `ua:${userAgent}` : `ip:${clientAddress}`;
  const rateKey = await hashRateKey(`${identity}:${windowStart}`);

  await db
    .prepare(`INSERT INTO lead_rate_limits (rate_key, window_start, request_count, updated_at)
      VALUES (?, ?, 1, CURRENT_TIMESTAMP)
      ON CONFLICT(rate_key) DO UPDATE SET
        request_count = request_count + 1,
        updated_at = CURRENT_TIMESTAMP`)
    .bind(rateKey, windowStart)
    .run();

  const row = await db
    .prepare("SELECT request_count FROM lead_rate_limits WHERE rate_key = ?")
    .bind(rateKey)
    .first<{ request_count: number }>();
  const count = Number(row?.request_count ?? 1);
  const retryAfter = Math.max(1, Math.ceil((windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000));
  return { allowed: count <= RATE_LIMIT_MAX_REQUESTS, retryAfter };
}

async function handleLeadRequest(request: Request, env: Env | undefined, ctx: ExecutionContext) {
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "method_not_allowed" }, 405, { allow: "POST" });
  }
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, error: "json_required" }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "payload_too_large" }, 413);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "payload_too_large" }, 413);
  }

  let data: unknown;
  try {
    data = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, error: "invalid_json" }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return jsonResponse({ ok: false, error: "invalid_payload" }, 400);
  }

  const payload = data as Record<string, unknown>;
  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse({ ok: true, id: makeLeadNumber() }, 201);
  }
  if (!env?.DB) {
    return jsonResponse({ ok: false, error: "storage_unavailable" }, 503);
  }

  try {
    await ensureLeadSchema(env.DB);
    const limit = await applyRateLimit(request, env.DB);
    if (!limit.allowed) {
      return jsonResponse({ ok: false, error: "rate_limited" }, 429, {
        "retry-after": String(limit.retryAfter),
      });
    }

    const validation = validateLead(payload);
    if (!validation.value) {
      return jsonResponse({ ok: false, error: "validation_failed", fields: validation.issues }, 400);
    }

    const leadNumber = makeLeadNumber();
    const createdAt = new Date().toISOString();
    const lead = validation.value;
    const userAgent = request.headers.get("user-agent")?.slice(0, 512) || "";

    await env.DB
      .prepare(`INSERT INTO leads (
        lead_number, name, company, phone, email, interest, contact_type,
        message, locale, mode, source, consent, marketing, user_agent, status, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`)
      .bind(
        leadNumber,
        lead.name,
        lead.company,
        lead.phone,
        lead.email,
        lead.interest,
        lead.contactType,
        lead.message,
        lead.locale,
        lead.mode,
        lead.source,
        lead.consent ? 1 : 0,
        lead.marketing ? 1 : 0,
        userAgent,
        createdAt,
      )
      .run();

    ctx.waitUntil(
      env.DB.prepare("DELETE FROM lead_rate_limits WHERE window_start < ?")
        .bind(Date.now() - RATE_LIMIT_RETENTION_MS)
        .run(),
    );

    return jsonResponse({ ok: true, id: leadNumber, createdAt }, 201);
  } catch (error) {
    console.error("Lead submission failed", error);
    return jsonResponse({ ok: false, error: "submission_failed" }, 500);
  }
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/leads") {
      return withSecurityHeaders(await handleLeadRequest(request, env, ctx));
    }

    return withSecurityHeaders(await env.ASSETS.fetch(request));
  },
};

export default worker;
