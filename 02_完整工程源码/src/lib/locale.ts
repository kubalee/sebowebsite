export type Locale = "zh" | "en";

export function resolveLocale(path: string): Locale {
  return /^\/en(?:\/|$)/.test(path) ? "en" : "zh";
}

export function localizedPath(path: string, locale: Locale): string {
  const normalized = `/${path}`.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/";
  const bare = normalized.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? (bare === "/" ? "/en" : `/en${bare}`) : bare;
}

export function bilingual(locale: Locale, zh: string, en: string): string {
  return locale === "zh" ? zh : en;
}
