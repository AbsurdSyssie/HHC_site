# Personal demonstration hosting

## Authorisation and scope

On 30 October 2026 the account owner explicitly authorised hosting this **unofficial demonstration only** in their own Cloudflare account and connecting their own `hhc.oddtv.uk` hostname. This is not the official practice website, practice sign-off or permission to change any practice domain. The earlier source-only permission recorded in [MIGRATION-VERIFICATION.md](MIGRATION-VERIFICATION.md) was subsequently extended for this personal demonstration only. Do not contact the practice, update NHS listings or direct patients here.

The content is a source-derived, unreviewed migration, not fictional practice data. No practice facts were invented. The missing GP earnings financial year and whole-site review date remain missing. `demo: false` describes the real source practice, not approval. The separate draft renderer supplies the demonstration warnings and noindex. The actual practice address in `site.url` is retained as source metadata, not changed to imply official ownership of this demo.

## Live hosting record

| Item                     | Status on 30 October 2026                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Source                   | <https://github.com/AbsurdSyssie/HHC_site>, `main`, remote `hhc`; upstream `origin` retained                   |
| Cloudflare Pages project | `hhc-site`, newly created after the account's project list was confirmed empty                                 |
| Stable demonstration URL | <https://hhc-site-9ia.pages.dev/> (Cloudflare allocated the suffix)                                            |
| Initial deployment       | `46c0fff7-349f-40ab-a238-cbd1aa0e4f97`, <https://46c0fff7.hhc-site-9ia.pages.dev/>                             |
| Upload                   | Only `_preview/`, 62 static files, including 31 HTML pages                                                     |
| Hosting mode             | Direct upload, no Git integration, Functions, database, contact forms or analytics configured                  |
| Custom hostname          | `hhc.oddtv.uk` registered with the Pages project through the supported Pages domain API                        |
| Custom hostname status   | **Pending**, Pages reports `CNAME record not set`; external HTTPS still returns the previous Cloudflare 502    |
| DNS change               | **Not performed**: OAuth lacks DNS record scope; even the exact-host record read returns HTTP 403 / code 10000 |

The stable Pages URL is working over HTTPS and serves independently of the owner's computer, Python preview process, router or LAN. It remains hosted until the account owner removes it or Cloudflare changes/suspends the service. Source pushes do **not** update this direct-upload project automatically. Cloudflare calls the main-branch deployment environment “production”; that is a hosting slot name, not a production build or clinical approval.

The installed Wrangler's first project-creation command attempted delegation to Workers and failed before deploying anything. Project creation then succeeded through Cloudflare's documented Pages API, and `wrangler pages deploy` successfully uploaded the static draft. No Worker application or runtime was introduced.

## Finish this hostname in the owner's dashboard

The available OAuth login cannot inspect or edit DNS records. Do not supply credentials in chat or infer the old record from public proxied IP addresses.

1. Sign in to the same Cloudflare account. Open **oddtv.uk > DNS > Records** and filter for the exact `hhc.oddtv.uk` hostname.
2. Before changing anything, save the existing record's type, full name, content/target, TTL, proxy status and comment, including any other exact-host A/AAAA records, in a private recovery note. Local recovery evidence is at `/tmp/opencode/hhc-demo-recovery/`; it records the failed read and pre-change 502, **not a complete backup of the inaccessible DNS record**. Back this temporary folder up privately if it must survive machine cleanup.
3. Open **Workers & Pages > hhc-site > Custom domains > hhc.oddtv.uk**. The domain is already associated, so use its activation/check instructions rather than adding it to a different project. The required website record is **CNAME**, name **hhc**, target **hhc-site-9ia.pages.dev**, TTL **Auto**, proxy **Proxied**. Confirm any proposed replacement is restricted to `hhc.oddtv.uk`. If editing under DNS instead, replace only the saved conflicting exact-host website record; do not leave conflicting A/AAAA records alongside the CNAME.
4. Do not change `oddtv.uk`, mail records, nameservers, unrelated subdomains or the practice's official address. If the proposed changes exceed this exact hostname, stop.
5. Use the domain's **Check DNS records** / activation control if shown. Wait for **Active** and certificate validation, then open <https://hhc.oddtv.uk/> using HTTPS. Do not ignore a security warning. Verify the title, yellow unofficial demonstration warning, noindex, another page, styles and scripts. Until this succeeds, use the stable Pages URL and do not describe the custom hostname as working.

To undo a later hostname change, restore only its privately saved previous record configuration and remove the domain association from this Pages project if abandoning it. The old LAN destination already returned 502, so restoring it does not guarantee a working site. There is currently no DNS change to roll back.

## Updating the demonstration

Use the existing authenticated Wrangler login locally. Never commit OAuth credentials, tokens, account configuration or generated output. With the account owner still authorising this personal demo:

```sh
npm run build:demo
npx html-validate '_preview/**/*.html'
node --test practice/migration.test.js tests/preview.test.js tests/practice.test.js
npm run lint
wrangler pages deploy _preview --project-name hhc-site --branch main
```

Select the same personal account if Wrangler asks. `build:demo` removes the previous `_preview/` first, then uses `eleventy.preview.config.js` without starting a server. A failed build must never be followed by an upload. Do not upload the repository, `_site/`, recovery records or a LAN-served directory. Recheck the externally hosted content after each upload. Deployment history in **Workers & Pages > hhc-site > Deployments** can restore a previous labelled demo upload if an update is faulty.

## Safety and verification

- All 31 deployed HTML pages were fetched over HTTPS from the stable Pages address and matched the local files byte for byte. Every page retained the demonstration/not-official warning, no-patient-information instruction, unreviewed footer, `noindex, nofollow` metadata and emergency telephone links. All 31 assets also matched the local build. No forms or iframes were found. No requests were submitted to real patient services, and no practice was contacted. Outbound links can still lead to real services; do not use them for test submissions.
- The stable homepage title is `Handforth Health Centre`. Browser inspection at 390×844, 768×1024 and 1440×900 confirmed the expanded warning remains readable. Desktop browser checks found two loaded stylesheets, loaded images and no horizontal overflow. This is not an accessibility audit. Local ignored screenshots are in `.playwright-mcp/`.
- The immutable initial deployment URL initially encountered a TLS handshake failure while hosting was provisioning. A later check succeeded with HTTPS 200; its homepage and CSS matched the local build. Its response also includes Cloudflare's `X-Robots-Tag: noindex` header.
- Targeted migration, validator and draft tests: **29 passed**. ESLint, repository Prettier, draft HTML validation and `uv tool run reuse lint` passed. The new test proves a static build exits, clears stale draft files, removes the previous draft before a rejected build, and leaves production output untouched.
- `npm run check` and `npm run build` still fail on the missing earnings year and content review date. Full `npm test`: **48 tests, 34 passed, 14 failed**, because production build-test setup rejects the intentionally incomplete practice. `npm run lint:html` has no `_site` files to validate and is not proof of production HTML validity. These expected production failures were not hidden or weakened.
- No validator, urgent-help partial, dependency, GitHub workflow or GitHub Pages setting was changed. No GitHub Pages hosting was enabled. See the [hazard note](../docs/clinical-safety/hazard-log.md#local-draft-preview-controls-h2-h3-h7).

Noindex is a crawler instruction, **not access control**. This is publicly readable unapproved content. Real patient-site publication remains blocked until the practice resolves [MIGRATION-QUERIES.md](MIGRATION-QUERIES.md), confirms the entire content and completes its sign-off and official-domain migration work.
