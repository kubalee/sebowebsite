import { describe, expect, it } from "vitest";
import { pageMetaFor } from "../src/composables/usePageMeta";

describe("page metadata", () => {
  it("returns bilingual titles and canonical URLs", () => {
    expect(pageMetaFor("/technology")).toMatchObject({
      lang: "zh-CN",
      canonical: "https://www.sebo.org.cn/technology",
    });
    expect(pageMetaFor("/en/technology")).toMatchObject({
      lang: "en",
      canonical: "https://www.sebo.org.cn/en/technology",
    });
    expect(pageMetaFor("/en/technology").title).toContain("Technology");
  });
});
