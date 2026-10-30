# `s/`

Small convenience scripts for working on the template. Each one wraps an `npm` script and passes extra arguments through. Run `npm ci` once first.

Practices using the template through a cloud AI assistant do not need these; the assistant runs the same checks.

## `s/check`

Checks the practice's details in `practice/` and explains any problems in plain English.

- `s/check` - check `practice/`
- `PRACTICE_DIR=tests/fixtures/wales-practice s/check` - check another folder

## `s/preview`

Serves the site at <http://localhost:8080> with live reload.

- `s/preview`
- `s/preview --port=8081`

### Unreviewed local draft

`npm run preview:draft` builds current content into a fresh `_preview/` folder, then serves it on **0.0.0.0:8080** (all network interfaces). Set `PREVIEW_PORT=8081` if 8080 is occupied. Requires Python 3 as well as Node. Use only on a trusted LAN, never port-forward or publicly host this output. Stop with Ctrl+C; restart to include edits. This is not live reload.

Every page is labelled unreviewed and has `noindex, nofollow`. An absent earnings financial year or content review date may be deferred only by this separate command. Earnings without a confirmed year are not displayed. All other validation errors still block the preview. No practice data is changed. Normal checks, builds and publishing remain strict and use `_site/`, never `_preview/`. Search directives are not access controls: anyone with network access can view the draft.

## `s/test`

Runs the unit tests and full build tests.

## `s/lint`

Runs ESLint and the Prettier formatting check.

## `s/build`

Builds the site into `_site/`.

- `s/build`
- `PATH_PREFIX=/open-gp-practice-website/ s/build` - build for a sub folder
