import { resolveLocale } from "../lib/locale";

const ORIGIN = "https://www.sebo.org.cn";
const sectionNames: Record<string, { zh: string; en: string }> = {
  solutions: { zh: "综合解决方案", en: "Solutions" },
  technology: { zh: "技术与产品", en: "Technology & Products" },
  laidianla: { zh: "来电啦 4S²", en: "Laidianla 4S²" },
  applications: { zh: "典型应用", en: "Reference Applications" },
  cases: { zh: "客户案例", en: "Customer Cases" },
  news: { zh: "新闻与洞察", en: "News & Insights" },
  insights: { zh: "工程洞察", en: "Engineering Insights" },
  media: { zh: "媒体中心", en: "Media Centre" },
  downloads: { zh: "资料中心", en: "Resources" },
  about: { zh: "关于 SEBO", en: "About SEBO" },
  careers: { zh: "加入 SEBO", en: "Careers" },
  contact: { zh: "联系 SEBO", en: "Contact SEBO" },
};

export function pageMetaFor(path: string) {
  const locale = resolveLocale(path);
  const bare = path.replace(/^\/en(?=\/|$)/, "").replace(/^\//, "");
  const section = bare.split("/")[0];
  const name = sectionNames[section]?.[locale] ??
    (locale === "zh" ? "高功率时代的能源基础设施公司" : "High-Power Energy Infrastructure");
  return {
    lang: locale === "zh" ? "zh-CN" : "en",
    title: `${name} | SEBO`,
    description:
      locale === "zh"
        ? "SEBO 为 AI 算力、重载运力与关键任务提供高功率能源基础设施。"
        : "SEBO provides high-power energy infrastructure for AI compute, heavy-duty mobility and mission-critical operations.",
    canonical: `${ORIGIN}${path === "/" ? "/" : path}`,
  };
}

function setMeta(name: string, content: string, property = false) {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }
  element.content = content;
}

export function applyPageMeta(path: string) {
  const meta = pageMetaFor(path);
  document.documentElement.lang = meta.lang;
  document.title = meta.title;
  setMeta("description", meta.description);
  setMeta("og:title", meta.title, true);
  setMeta("og:description", meta.description, true);
  setMeta("og:type", "website", true);
  setMeta("og:url", meta.canonical, true);
  setMeta("og:image", `${ORIGIN}/og.png`, true);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }
  canonical.href = meta.canonical;
}
