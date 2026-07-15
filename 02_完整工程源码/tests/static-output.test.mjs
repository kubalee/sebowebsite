import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
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

test("balances spacing around the solution card grid", () => {
  const css = fs.readFileSync("src/styles/main.css", "utf8");
  assert.match(css, /\.card-section\{padding:clamp\(48px,6vw,88px\) var\(--side\) clamp\(64px,7vw,96px\)/);
  assert.match(css, /@media\(max-width:640px\)[\s\S]*?\.card-section\{padding:36px 20px 58px\}/);
});

test("uses compact neutral information panels", () => {
  const css = fs.readFileSync("src/styles/main.css", "utf8");
  assert.match(css, /\.cases-empty-state\{padding:clamp\(32px,4vw,52px\) var\(--side\)\}/);
  assert.match(css, /\.notice\{[^}]*border-left-color:var\(--blue\)[^}]*background:#eef5ff/);
});
