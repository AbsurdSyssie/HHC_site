// SPDX-FileCopyrightText: 2026 Open GP Practice Website contributors
// SPDX-License-Identifier: MIT

// Practice-local migration checks. Run with:
// node --test practice/migration.test.js
// These test content safety/structure, not the truth of practice facts.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { loadPractice } from "../lib/practice.js";

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(dir);
const { data, pages, errors } = loadPractice(dir);
const inventory = fs.readFileSync(path.join(dir, "CONTENT-INVENTORY.md"), "utf8");

test("migration records stay outside patient pages", () => {
  const slugs = new Set(pages.map((page) => page.slug));
  assert.ok(!slugs.has("MIGRATION-QUERIES"));
  assert.ok(!slugs.has("CONTENT-INVENTORY"));
  assert.ok(fs.existsSync(path.join(dir, "MIGRATION-QUERIES.md")));
});

test("migration blockers include core conflicts and cutover safety gates", () => {
  const queries = fs.readFileSync(path.join(dir, "MIGRATION-QUERIES.md"), "utf8");
  const contact = pages.find((page) => page.slug === "how-we-contact-you");
  assert.match(queries, /NHS App booking wording conflicts with source/);
  assert.match(
    queries,
    /Filling those two validation fields alone does \*\*not\*\* make publication safe/,
  );
  assert.match(
    queries,
    /all applicable sign-off checklist items, and old-domain\/link\/redirect cutover work/,
  );
  assert.match(queries, /does the practice still use email as its main contact method/);
  assert.doesNotMatch(contact.content, /handforthhealthcentre\.nhs\.uk\/how-we-contact-you/);
  assert.match(
    contact.content,
    /check their inbox after sending a routine or administrative request/,
  );
  assert.match(contact.content, /may phone if it needs to contact someone urgently/);
});

test("migration inventory has unique sources and continuous evidence IDs", () => {
  const rows = [...inventory.matchAll(/^\| S(\d{3})\s*\| `(\/[^`]*)`/gm)];
  const declared = inventory.match(/All \*\*(\d+) listed URLs/);
  assert.ok(declared, "Inventory declares its source-page count");
  assert.equal(rows.length, Number(declared[1]));
  assert.equal(new Set(rows.map((row) => row[2])).size, rows.length);
  rows.forEach((row, i) => assert.equal(Number(row[1]), i));
});

test("practice pages do not collect data or import active source content (H4, H10)", () => {
  assert.equal(data.online_services.online_consultation.embed_html, "");
  assert.equal(data.cqc.embed_html, "");
  assert.deepEqual(data.trusted_embed_domains, []);
  for (const page of pages) {
    assert.match(page.content, /^---\n[\s\S]*?title: .+\n[\s\S]*?---\n/);
    assert.doesNotMatch(
      page.content,
      /<(?:script|iframe|form|input|textarea|select|object|embed)\b|\bon\w+\s*=/i,
      page.slug,
    );
    assert.doesNotMatch(page.content, /file:\/\/|javascript:|data:text\/html/i, page.slug);
  }
});

test("every practice Markdown link uses HTTPS, telephone or a real local target", () => {
  const targets = new Set([
    "/",
    ...pages.map((page) => `/${page.slug}/`),
    ...fs
      .readdirSync(path.join(root, "src"))
      .filter((name) => name.endsWith(".njk"))
      .map((name) => `/${name.replace(/\.njk$/, "")}/`),
  ]);
  for (const page of pages) {
    for (const match of page.content.matchAll(/\]\(([^\s)]+)\)/g)) {
      const url = match[1];
      if (url.startsWith("/")) {
        assert.ok(targets.has(url), `${page.slug}: unknown local target ${url}`);
      } else {
        assert.match(url, /^(https:\/\/|tel:\+)/, `${page.slug}: unsafe link ${url}`);
      }
    }
  }
});

test("missing practice approval remains a validation error, not a guessed review date (H2, H3)", () => {
  if (!data.site.content_last_reviewed) {
    assert.ok(errors.some((error) => error.field === "site.content_last_reviewed"));
  }
  if (!data.gp_earnings.financial_year) {
    assert.ok(errors.some((error) => error.field === "gp_earnings.financial_year"));
  }
  // Existing urgent help remains an inherited safety control, never replaced
  // by bespoke per-page advice or source HTML.
  const base = fs.readFileSync(path.join(root, "src/_includes/base.njk"), "utf8");
  assert.match(base, /include "partials\/urgent-help\.njk"/);
});
