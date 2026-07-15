import type { MetadataRoute } from "next";
import { publicRoutes } from "./site-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sebo.org.cn";
  const now = new Date("2026-07-13T00:00:00+08:00");
  const routes = ["", ...publicRoutes].filter(route => !route.endsWith("/action") && !route.endsWith("/assessment") && !route.endsWith("/start") && !route.startsWith("contact/") && route !== "careers/apply");
  return routes.flatMap(route => {
    const path = route ? `/${route}` : "";
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = route.startsWith("news") || route.startsWith("insights") ? "weekly" : "monthly";
    const priority = route === "" ? 1 : route.split("/").length === 1 ? 0.9 : 0.7;
    return [
      { url: `${base}${path || "/"}`, lastModified: now, changeFrequency, priority, alternates: { languages: { "zh-CN": `${base}${path || "/"}`, en: `${base}/en${path}` } } },
      { url: `${base}/en${path}`, lastModified: now, changeFrequency, priority, alternates: { languages: { "zh-CN": `${base}${path || "/"}`, en: `${base}/en${path}` } } },
    ];
  });
}
