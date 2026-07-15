import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);

test("uses the Vue 3 runtime and Vue Router", () => {
  assert.match(packageJson.dependencies.vue, /^3\./);
  assert.match(packageJson.dependencies["vue-router"], /^4\./);
  assert.ok(packageJson.devDependencies["@vitejs/plugin-vue"]);
});

test("does not ship React, Next, or Vinext runtimes", () => {
  const packages = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  for (const dependency of ["react", "react-dom", "next", "vinext"]) {
    assert.equal(packages[dependency], undefined, `${dependency} must be removed`);
  }
});
