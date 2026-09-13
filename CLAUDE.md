# Zeilen in Griekenland (Prive-Zeilen-Griekenland)

Privé-app on the OTAP platform. CI/CD and the build step come from `HansdeRooijPrive/OTAP-CI@v2`;
this repo was generated from `Prive-App-Template`. See README.md for URLs.

## Working method (OTAP)
- Always work on `development` (T). Never commit directly to `acceptatie` or `main`.
- Change `src/`, then `python build.py` (rebuilds the checked-in `index.html`),
  `python build.py --check` and `python -m pytest -q`; commit only when green.
- Push to `development` → CI + deploy to `/test/`. Only promote to `acceptatie`
  (fast-forward: `git push origin development:acceptatie`) once CI on `development` is green.
- The user tests on https://hansderooijprive.github.io/Prive-Zeilen-Griekenland/acceptatie/.
- **Deploy pitfall (fixed):** GitHub Pages does not activate a second deployment for a
  commit sha that is already live, so fast-forward promotions used to leave `/acceptatie/`
  or `/` stale. Fixed since OTAP-CI v2 (`f7f0002`): the deploy publishes each run under a
  loose commit with the same tree as its build version. This needs `contents: write` in
  `.github/workflows/deploy.yml` — keep it; without it the deploy logs a warning and the
  pitfall returns. Still verify the live page after promoting. Never use empty or merge
  commits on `acceptatie`/`main` to force a deploy.
- **Release gate:** `main` (production) only after an explicit "go ahead" from the
  user in the chat. Then fast-forward `acceptatie` → `main`; no merge commits.

## Conventions
- `build.py` is the thin v2 wrapper from OTAP-CI (`bouw/build.py`): don't edit it. It runs the
  central build (fetched once into `.otap/`, git-ignored; in CI via `OTAP_CI_DIR`), pinned by
  `"platform": "v2"` in `app.json`.
- App code in `src/app/NN-*.js` as IIFE fragments; placeholders like `{{STORAGE_KEY}}`
  are filled in by the central build from `app.json`.
- Storage key per environment: `prive-zeilen-griekenland` (P), `.acc` (A), `.test` (T).
- App icon: one shape, one colour scheme per environment (`src/icons/icon.<env>.png`,
  blue/yellow/green; the platform requires three differing icons). The build embeds it as a data-URI; regenerate with
  `python tools/maak_iconen.py` (needs Pillow, dev-only — not used by CI).
- Tests: Playwright + pytest via Python, no Node.
- Shared build/deploy logic changes belong in `OTAP-CI`, not here.

## Origin of the app content
The Griekenland part comes from `Prive-Reizen-Schotland` (formerly Interactieve-kaarten),
where it was removed in commit 6eacc0b ("v2.0: app gesplitst naar Schotland-only").
Newest Griekenland state is that commit's parent, 7c82336, inside `index.html`.
