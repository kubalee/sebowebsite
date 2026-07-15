import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { allPublicPaths } from "../src/data/routes.ts";

const SITE_ORIGIN = "https://www.sebo.org.cn";

export function routeOutputPath(route) {
  return route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;
}

export function renderSitemap(routes) {
  const entries = routes
    .map((route) => {
      const url = `${SITE_ORIGIN}${route === "/" ? "/" : route}`;
      return `  <url><loc>${url}</loc><lastmod>2026-07-15</lastmod></url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

export async function generateStaticRoutes(outputRoot = "dist/client") {
  const shell = join(outputRoot, "index.html");
  await readFile(shell, "utf8");

  for (const route of allPublicPaths) {
    if (route === "/") continue;
    const target = join(outputRoot, routeOutputPath(route));
    await mkdir(dirname(target), { recursive: true });
    await copyFile(shell, target);
  }

  await writeFile(join(outputRoot, "sitemap.xml"), renderSitemap(allPublicPaths));
  await writeFile(
    join(outputRoot, "robots.txt"),
    `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`,
  );
}

const invokedPath = process.argv[1] ? pathToFileURL(process.argv[1]).href : "";
if (import.meta.url === invokedPath) {
  await generateStaticRoutes();
  console.log(`Generated ${allPublicPaths.length} static route entries.`);
}
