// SPDX-FileCopyrightText: 2026 Marcus Baw
// SPDX-License-Identifier: MIT

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { load, dump } from "js-yaml";

test("local draft defers only missing review facts, never production gates (H1, H2, H3, H7)", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "draft-test-"));
  const practiceDir = path.join(tmp, "practice");
  fs.cpSync("tests/fixtures/demo-practice", practiceDir, { recursive: true });
  const file = path.join(practiceDir, "practice.yaml");
  const data = load(fs.readFileSync(file, "utf8"));
  data.demo = false;
  data.site.custom_domain = "fictional.example.com";
  delete data.site.content_last_reviewed;
  delete data.gp_earnings.financial_year;
  const save = () => fs.writeFileSync(file, dump(data));
  const run = (config, name) =>
    spawnSync(
      process.execPath,
      [
        "node_modules/@11ty/eleventy/cmd.cjs",
        `--config=${config}`,
        `--output=${path.join(tmp, name)}`,
      ],
      { env: { ...process.env, PRACTICE_DIR: practiceDir }, encoding: "utf8" },
    );
  try {
    save();
    const preview = run("eleventy.preview.config.js", "draft");
    assert.equal(preview.status, 0, preview.stdout + preview.stderr);
    const files = fs.readdirSync(path.join(tmp, "draft"), { recursive: true });
    assert.ok(files.filter((f) => f.endsWith(".html")).length > 10);
    for (const name of files.filter((f) => f.endsWith(".html"))) {
      const html = fs.readFileSync(path.join(tmp, "draft", name), "utf8");
      assert.match(html, /Draft preview only/);
      assert.match(html, /Unreviewed content/);
      assert.match(html, /Unreviewed draft preview/);
      assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
      assert.match(html, /href="tel:999"/);
      assert.match(html, /href="tel:111"/);
      assert.doesNotMatch(html, /Website content last reviewed/);
    }
    const about = fs.readFileSync(path.join(tmp, "draft/about/index.html"), "utf8");
    assert.match(about, /financial year has not been confirmed/);
    assert.doesNotMatch(about, /£82,000|last financial year \(/);
    assert.ok(!files.includes("CNAME"));

    data.gp_earnings.financial_year = "   ";
    save();
    assert.equal(run("eleventy.preview.config.js", "blank-year").status, 0);
    assert.doesNotMatch(
      fs.readFileSync(path.join(tmp, "blank-year/about/index.html"), "utf8"),
      /£82,000|last financial year \(/,
    );
    delete data.gp_earnings.financial_year;
    save();

    const production = run("eleventy.config.js", "production");
    assert.notEqual(production.status, 0);
    assert.match(production.stderr, /gp_earnings.financial_year/);
    assert.match(production.stderr, /site.content_last_reviewed/);

    data.contact.phone = "invalid";
    save();
    assert.notEqual(run("eleventy.preview.config.js", "bad-phone").status, 0);
    data.contact.phone = "01632 960000";
    data.site.content_last_reviewed = "not-a-date";
    save();
    assert.notEqual(run("eleventy.preview.config.js", "bad-date").status, 0);
    delete data.site.content_last_reviewed;
    data.gp_earnings.financial_year = "TODO";
    save();
    assert.notEqual(run("eleventy.preview.config.js", "placeholder").status, 0);
    delete data.gp_earnings.financial_year;
    data.online_services.online_consultation.embed_html =
      '<script src="https://untrusted.example.com/widget.js"></script>';
    save();
    assert.notEqual(run("eleventy.preview.config.js", "bad-embed").status, 0);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});
