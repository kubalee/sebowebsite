import { describe, expect, it } from "vitest";
import { allPublicPaths, publicRoutes } from "../src/data/routes";
import { localizedPath, resolveLocale } from "../src/lib/locale";
import { router } from "../src/router";

describe("public routes", () => {
  it("exposes exactly 208 unique Chinese and English paths", () => {
    expect(allPublicPaths).toHaveLength(208);
    expect(new Set(allPublicPaths).size).toBe(208);
  });

  it("contains representative routes from every content family", () => {
    expect(allPublicPaths).toEqual(
      expect.arrayContaining([
        "/",
        "/en",
        "/solutions/grid-to-gpu",
        "/en/technology/thunderbird/tb-007-13ah",
        "/applications/v2x-emergency",
        "/en/laidianla/smart-servicing/start",
        "/contact/project",
        "/en/about/company",
      ]),
    );
    expect(publicRoutes).not.toContain("");
  });

  it("resolves every public path before the catch-all route", () => {
    for (const path of allPublicPaths) {
      expect(router.resolve(path).name).toBe(`page:${path}`);
    }
    expect(router.resolve("/unknown-route").name).toBe("not-found");
  });
});

describe("locale paths", () => {
  it("detects locale from the URL", () => {
    expect(resolveLocale("/en/news")).toBe("en");
    expect(resolveLocale("/news")).toBe("zh");
  });

  it("switches locale without changing the content path", () => {
    expect(localizedPath("/technology", "en")).toBe("/en/technology");
    expect(localizedPath("/en/technology", "zh")).toBe("/technology");
    expect(localizedPath("/", "en")).toBe("/en");
    expect(localizedPath("/en", "zh")).toBe("/");
  });
});
