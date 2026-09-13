# Prive-Zeilen-Griekenland — Zeilen in Griekenland

Interactieve routekaarten voor zeilen in de Ionische Zee. Privé-app op het
OTAP-platform, gegenereerd uit
[`Prive-App-Template`](https://github.com/HansdeRooijPrive/Prive-App-Template).
De CI/CD én de bouwstap komen centraal uit [`OTAP-CI`](https://github.com/HansdeRooijPrive/OTAP-CI) (versie `v2`).

De inhoud komt uit [`Prive-Reizen-Schotland`](https://github.com/HansdeRooijPrive/Prive-Reizen-Schotland),
waar Griekenland en Schotland eerst één app waren. Commit 6eacc0b splitste die
app naar Schotland-only; het Griekenland-deel verhuist hierheen.

## OTAP
| Branch | Omgeving | URL |
|--------|----------|-----|
| `development` | Test | https://hansderooijprive.github.io/Prive-Zeilen-Griekenland/test/ |
| `acceptatie` | Acceptatie | https://hansderooijprive.github.io/Prive-Zeilen-Griekenland/acceptatie/ |
| `main` | Productie | https://hansderooijprive.github.io/Prive-Zeilen-Griekenland/ |

Werkwijze: wijzig op `development` → CI groen → door naar `acceptatie` →
testen op de acceptatie-URL → pas na expliciet akkoord naar `main` (productie).

## Lokaal (O)
```bash
python build.py            # bouwt index.html (productie); haalt eenmalig OTAP-CI op in .otap/
python build.py --env=test # testvariant (andere naam, icoon en opslagsleutel)
python build.py --check    # platformafspraken + index.html controleren
python tools/maak_iconen.py  # iconen opnieuw genereren (vereist Pillow)
pip install -r requirements-test.txt && python -m playwright install chromium && pytest
```

`index.html` (productie-build) staat ingecheckt; `CI` bewaakt dat die overeenkomt
met `src/`.
