import type { Locale } from "../lib/locale";

export interface LeadPayload {
  name: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  contactType: string;
  message: string;
  locale: Locale;
  mode: "contact";
  source: string;
  consent: boolean;
  marketing: boolean;
  website: string;
}

interface LeadContext {
  contactType: string;
  locale: Locale;
  source: string;
}

const value = (data: FormData, name: string) => String(data.get(name) ?? "");

export function buildLeadPayload(
  data: FormData,
  context: LeadContext,
): LeadPayload {
  return {
    name: value(data, "name"),
    company: value(data, "company"),
    phone: value(data, "phone"),
    email: value(data, "email"),
    interest: value(data, "interest"),
    contactType: context.contactType,
    message: value(data, "message"),
    locale: context.locale,
    mode: "contact",
    source: context.source,
    consent: data.get("consent") === "on",
    marketing: data.get("marketing") === "on",
    website: value(data, "website"),
  };
}

type Fetcher = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

export async function submitLead(
  payload: LeadPayload,
  fetcher: Fetcher = fetch,
): Promise<string> {
  const response = await fetcher("/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = (await response.json()) as { id?: string; error?: string };
  if (!response.ok || !result.id) {
    throw new Error(result.error || "submission_failed");
  }
  return result.id;
}
