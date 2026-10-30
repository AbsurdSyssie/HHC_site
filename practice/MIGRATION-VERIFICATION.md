# Local migration verification

Initial migration performed 29 October 2026; migration and local draft preview rechecked 30 October 2026. This is a technical work record, **not practice confirmation, clinical safety sign-off, accessibility approval or permission to publish**.

## Scope

The initial migration changed only `practice/`. The separately reviewed local draft preview also changes Eleventy configuration, the base/about templates, preview tooling, tests, ignore rules and safety documentation. The urgent-help partial, validator, dependencies and workflows remain unchanged. Production validation still rejects the two deliberately missing facts. The user subsequently authorised saving this work in a new public GitHub copy, `AbsurdSyssie/HHC_site`, but not enabling hosting, Pages or DNS changes. Pushing source code is not patient-site approval.

Read-only source collection fetched all 122 sitemap URLs successfully. An independent comparison of the inventory's S000-S121 paths with the fetched sitemap/page archive matched all 122 exactly and in order. Working evidence is under `/tmp/opencode/handforth-source/` and is not included in public website output. NHS profile/contact hours and CQC location were fetched independently.

## Checks run

| Check | Result |
| --- | --- |
| `npm ci` | Passed, 210 packages installed, audit reported 0 vulnerabilities |
| Baseline `npm test` before changes | Passed: 40 tests |
| `node --test practice/migration.test.js` | Passed: 6 migration-specific checks |
| `node --test tests/practice.test.js` | Passed: 21 validator tests |
| `node --test practice/migration.test.js tests/preview.test.js tests/practice.test.js` | Passed: all 28 tests, including draft controls and strict production rejection |
| `npm run lint` | Passed: ESLint and repository Prettier checks |
| Explicit Prettier check of practice JavaScript, YAML and patient Markdown with ignore rules disabled | Passed; repository formatting normally excludes `practice/` |
| `git diff --check` | Passed |
| `npm run check` | Correctly blocked by missing `gp_earnings.financial_year` and `site.content_last_reviewed` |
| `npm run build` | Correctly blocked by the same two validation errors |
| Final `npm test` / `node --test` | 47 tests, 33 passed, 14 failed: shared build-test setup fails on the intentionally incomplete practice data before generating any sites |
| `npm run lint:html` | No generated `_site/**/*.html` files to validate; not a successful validation of the migrated site |
| Local draft build and `npx html-validate '_preview/**/*.html'` | Passed after telephone-label whitespace formatting fix in 14 practice pages; not a production build |
| `reuse lint` | Command not installed globally; `uv tool run reuse lint` passed, 91/91 files licensed and attributed |
| Phone/tablet/desktop visual review | Draft homepage screenshots inspected at 390×844, 768×1024 and 1440×900: banner/footer and urgent help visible, layout readable. This is not a full patient-journey or accessibility review |

The new migration checks cover administrative records remaining outside patient pages, inventory count/unique paths/continuous evidence IDs, no active embeds or patient forms, safe link protocols and valid internal targets, and preservation of missing-review/missing-year validation errors and inherited urgent-help inclusion. They do not verify the truth of practice facts or external link availability. All test fixtures/examples remain fictional; local checks read the actual practice data rather than hard-coding real facts into framework tests.

One new inventory-test failure was found during development: its table matcher also matched two download-table rows. It was narrowed to sitemap source paths, then the migration checks passed. Draft HTML validation subsequently found 14 telephone labels with ordinary spaces; these now use non-breaking spaces without changing phone numbers or destinations. No production validation rule was changed. A separate attempt to run the full suite with `PRACTICE_DIR` set to the demo fixture still encountered the intentional real-practice build gate, because build tests explicitly select `practice/` first; no tests or configuration were altered to hide that failure.

Both existing GitHub workflows trigger on a push to `main`. The Pages workflow runs `npm run check` before configuring Pages, building or uploading `_site`, so the current missing earnings year and review date must stop it before publishing. No workflow or repository hosting setting was changed. `_preview/`, browser artefacts and `node_modules/` are excluded from the saved source. Source files and the intended diff were inspected for credentials and unintended content; no credentials were found.

## Outstanding acceptance work

Resolve [MIGRATION-QUERIES.md](MIGRATION-QUERIES.md), particularly supplier confirmation, prescription-method conflicts in fixed templates, GP earnings year and whole-site practice approval. Do not guess missing values to make tests green. Once answers are approved, re-run all checks including the full build tests, HTML validation, licensing and visual review at 390×844, 768×1024 and 1440×900. Exercise phone and supplier links, referral services, registration, results and administrative-request routes with the practice without entering patient information during testing.

Privacy documents, PPG archive retention/redaction, policy currency, accessibility, rights/attribution and legacy redirects/old-domain links require owner review before any domain cutover. No claim is made that the source site has been fully archived or that every download/external service has been tested. The source-to-target inventory records intentionally withheld material rather than silently republishing old clinical advice and campaigns.
