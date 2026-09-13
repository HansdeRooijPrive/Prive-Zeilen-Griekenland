# Zeilen in Griekenland (Prive-Zeilen-Griekenland)

Privé-app on the OTAP platform. CI/CD comes from `HansdeRooijPrive/OTAP-CI@v1`;
this repo was generated from `Prive-App-Template`. See README.md for URLs.

## Working method (OTAP)
- Always work on `development` (T). Never commit directly to `acceptatie` or `main`.
- Change `src/`, then `python build.py` (rebuilds the checked-in `index.html`),
  `python build.py --check` and `python -m pytest -q`; commit only when green.
- Push to `development` → CI + deploy to `/test/`. Only promote to `acceptatie`
  (fast-forward: `git push origin development:acceptatie`) once CI on `development` is green.
- The user tests on https://hansderooijprive.github.io/Prive-Zeilen-Griekenland/acceptatie/.
- **Known deploy caveat:** GitHub Pages does not activate a second deployment for a
  commit sha that is already live. Fast-forwarding `acceptatie` to a sha that
  `development` already deployed leaves `/acceptatie/` stale (the development run
  built it from the old acceptatie). Verify the live acceptatie page after promoting;
  if stale, the next deploy with a new sha (e.g. the next development push) fixes it.
  Reported to the OTAP platform session on 2026-09-13.
- **Release gate:** `main` (production) only after an explicit "go ahead" from the
  user in the chat. Then fast-forward `acceptatie` → `main`; no merge commits.

## Conventions
- App code in `src/app/NN-*.js` as IIFE fragments; placeholders like `{{STORAGE_KEY}}`
  are filled in by `build.py` from `app.json`.
- Storage key per environment: `prive-zeilen-griekenland` (P), `.acc` (A), `.test` (T).
- App icon: one shape, one colour scheme per environment (`src/icons/icon.<env>.png`,
  blue/yellow/green). `build.py` embeds it as a data-URI; regenerate with
  `python tools/maak_iconen.py` (needs Pillow, dev-only — not used by CI).
- Tests: Playwright + pytest via Python, no Node.
- Shared build/deploy logic changes belong in `OTAP-CI`, not here.

## Origin of the app content
The Griekenland part comes from `Prive-Reizen-Schotland` (formerly Interactieve-kaarten),
where it was removed in commit 6eacc0b ("v2.0: app gesplitst naar Schotland-only").
Newest Griekenland state is that commit's parent, 7c82336, inside `index.html`.
