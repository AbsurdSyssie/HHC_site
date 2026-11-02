// SPDX-FileCopyrightText: 2026 Marcus Baw
// SPDX-License-Identifier: MIT

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parse } from "parse5";
import nunjucks from "nunjucks";

const descendants = (node, tag) =>
  (node.childNodes ?? []).flatMap((child) => [
    ...(child.tagName === tag ? [child] : []),
    ...descendants(child, tag),
  ]);
const attr = (node, name) => node.attrs.find((a) => a.name === name)?.value;
const text = (node) =>
  node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(text).join("");
const svgNamespace = "http://www.w3.org/2000/svg";

for (const config of ["eleventy.config.js", "eleventy.preview.config.js"]) {
  test(`registration view replaces exactly one route with intact NHS action SVG: ${config}`, () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "registration-view-"));
    try {
      const practice = path.join(tmp, "practice");
      const output = path.join(tmp, "output");
      fs.cpSync("tests/fixtures/demo-practice", practice, { recursive: true });
      const build = () =>
        spawnSync(
          process.execPath,
          ["node_modules/@11ty/eleventy/cmd.cjs", `--config=${config}`, `--output=${output}`],
          { env: { ...process.env, PRACTICE_DIR: practice }, encoding: "utf8" },
        );
      const read = () => fs.readFileSync(path.join(output, "register/index.html"), "utf8");
      const baseline = build();
      assert.equal(baseline.status, 0, baseline.stderr);
      const defaultHtml = read();
      assert.match(defaultHtml, /register with a GP surgery online on the NHS website/);
      const after = (html) => {
        const doc = parse(html);
        return descendants(doc, "p").find((p) => text(p).startsWith("Once you are registered"));
      };

      fs.mkdirSync(path.join(practice, "views"));
      fs.copyFileSync(
        "tests/fixtures/registration/register.njk",
        path.join(practice, "views/register.njk"),
      );
      fs.rmSync(output, { recursive: true });
      const built = build();
      assert.equal(built.status, 0, built.stdout + built.stderr);
      assert.deepEqual(
        fs.readdirSync(output, { recursive: true }).filter((f) => /register.*\.html$/.test(f)),
        ["register/index.html"],
      );
      assert.equal((built.stdout.match(/Writing .*\/register\/index\.html/g) ?? []).length, 1);
      const html = read();
      const doc = parse(html);
      const main = descendants(doc, "main")[0];
      assert.deepEqual(descendants(main, "h1").map(text), ["Register with us"]);
      assert.deepEqual(descendants(main, "h2").slice(0, 3).map(text), [
        "How to register",
        "Our practice area",
        "After you register",
      ]);
      assert.equal(text(after(html)), text(after(defaultHtml)));
      assert.equal(
        attr(descendants(after(html), "a")[0], "href"),
        attr(descendants(after(defaultHtml), "a")[0], "href"),
      );
      const links = descendants(main, "a").filter((a) =>
        attr(a, "class")?.split(/\s+/).includes("nhsuk-action-link"),
      );
      assert.equal(links.length, 1);
      assert.equal(text(links[0]).trim(), "Register with Fernmoor Online");
      assert.equal(attr(links[0], "href"), "https://example.com/register");
      const icon = descendants(links[0], "svg");
      assert.equal(icon.length, 1);
      assert.equal(icon[0].namespaceURI, svgNamespace);
      assert.equal(attr(icon[0], "viewBox"), "0 0 24 24");
      const paths = descendants(icon[0], "path");
      assert.equal(paths.length, 1);
      assert.equal(paths[0].namespaceURI, svgNamespace);
      assert.equal(paths[0].parentNode, icon[0]);
      const env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader("node_modules/nhsuk-frontend/dist"),
      );
      const official = parse(
        env.renderString(
          '{% from "nhsuk/components/action-link/macro.njk" import actionLink %}{{ actionLink({text: "Example", href: "https://example.com"}) }}',
        ),
      );
      assert.equal(attr(paths[0], "d"), attr(descendants(official, "path")[0], "d"));
      assert.doesNotMatch(html, /\{%|\{\{|<form\b/);
      assert.match(html, /href="tel:999"/);
      assert.match(html, /href="tel:111"/);

      fs.writeFileSync(
        path.join(practice, "pages/register.md"),
        "---\ntitle: Duplicate\n---\nDuplicate route.",
      );
      const duplicate = build();
      assert.notEqual(duplicate.status, 0);
      assert.match(duplicate.stderr, /Use either practice\/views\/register.njk/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });
}
