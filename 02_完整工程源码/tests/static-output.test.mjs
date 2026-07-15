import assert from "node:assert/strict";
import test from "node:test";
import {
  renderSitemap,
  routeOutputPath,
} from "../scripts/generate-static-routes.mjs";

test("maps public URLs to directory index files", () => {
  assert.equal(routeOutputPath("/"), "index.html");
  assert.equal(routeOutputPath("/en"), "en/index.html");
  assert.equal(
    routeOutputPath("/technology/thunderbird"),
    "technology/thunderbird/index.html",
  );
});

test("renders all canonical public URLs in the sitemap", () => {
  const sitemap = renderSitemap(["/", "/en", "/contact"]);
  assert.match(sitemap, /https:\/\/www\.sebo\.org\.cn\//);
  assert.match(sitemap, /https:\/\/www\.sebo\.org\.cn\/en/);
  assert.match(sitemap, /https:\/\/www\.sebo\.org\.cn\/contact/);
});
