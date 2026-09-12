#!/usr/bin/env python3
"""
Genereert de app-iconen in src/icons/ — één vormgeving, per omgeving een eigen
kleurenschema. Dit is een ontwikkelhulpje: het draait niet in CI en niet in
build.py, maar alleen handmatig als de vormgeving of de kleuren wijzigen.

    pip install pillow
    python tools/maak_iconen.py

De gegenereerde PNG's staan ingecheckt; build.py zet ze als data-URI in
index.html. De kompasroos is een exacte reconstructie van het originele icoon
(prod-schema is pixelgelijk aan de handgemaakte versie).
"""
import os

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UIT = os.path.join(ROOT, "src", "icons")
MAAT = 512          # uiteindelijke pixelmaat
SS = 4              # supersampling voor gladde randen

# Vormgeving (in eindpixels, middelpunt = MAAT/2). Zelfde voor elke omgeving.
RING_BUITEN = 192.0     # buitenrand van de cirkel
RING_BREED = 14.0       # dikte van de cirkel
ARM_HOR = 184.0         # punt van de oost/west-arm
ARM_HOR_HALF = 42.0     # halve hoogte van de oost/west-arm bij het midden
ARM_VERT = 184.0        # punt van de noord/zuid-arm
ARM_VERT_HALF = 46.0    # halve breedte van de noord/zuid-arm bij het midden
NAAF = (30.0, 22.0, 9.0)  # stralen van de drie cirkels in het midden

# Kleurrollen: achtergrondverloop, ring, west/oost-arm, noord-arm (accent),
# zuid-arm, en de drie naafcirkels (zuid-kleur, midden, accent).
PALET = {
    "prod": dict(  # blauw — gelijk aan het oorspronkelijke icoon
        boven="#134E72", onder="#072D44", ring="#CFE2EE",
        west="#9DB9C9", oost="#7FA8BF", noord="#F2A104", zuid="#F6F1E7",
        naaf="#072D44", stip="#F2A104"),
    "acc": dict(   # geel
        boven="#F7C948", onder="#D99A05", ring="#0B3A5B",
        west="#7FA8BF", oost="#4E7F9E", noord="#0B3A5B", zuid="#FFFDF6",
        naaf="#0B3A5B", stip="#F7C948"),
    "test": dict(  # groen
        boven="#158F52", onder="#0B5C34", ring="#D2EEDD",
        west="#9DC9AF", oost="#7FB795", noord="#F2A104", zuid="#F6F1E7",
        naaf="#0B5C34", stip="#F2A104"),
}


def _rgb(hexkleur):
    h = hexkleur.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def teken(pal):
    w = MAAT * SS
    img = Image.new("RGB", (w, w))
    d = ImageDraw.Draw(img)
    boven, onder = _rgb(pal["boven"]), _rgb(pal["onder"])
    for y in range(w):                                   # verticaal verloop
        f = y / (w - 1)
        d.line([(0, y), (w, y)],
               fill=tuple(round(boven[i] + (onder[i] - boven[i]) * f) for i in range(3)))
    c = w / 2
    r = RING_BUITEN * SS
    d.ellipse([c - r, c - r, c + r, c + r], outline=_rgb(pal["ring"]),
              width=round(RING_BREED * SS))
    ah, ahh = ARM_HOR * SS, ARM_HOR_HALF * SS
    av, avh = ARM_VERT * SS, ARM_VERT_HALF * SS
    d.polygon([(c - ah, c), (c, c - ahh), (c, c + ahh)], fill=_rgb(pal["west"]))
    d.polygon([(c + ah, c), (c, c - ahh), (c, c + ahh)], fill=_rgb(pal["oost"]))
    d.polygon([(c, c - av), (c + avh, c), (c - avh, c)], fill=_rgb(pal["noord"]))
    d.polygon([(c, c + av), (c + avh, c), (c - avh, c)], fill=_rgb(pal["zuid"]))
    for straal, kleur in zip(NAAF, (pal["zuid"], pal["naaf"], pal["stip"])):
        s = straal * SS
        d.ellipse([c - s, c - s, c + s, c + s], fill=_rgb(kleur))
    return img.resize((MAAT, MAAT), Image.LANCZOS)


def main():
    os.makedirs(UIT, exist_ok=True)
    for env, pal in PALET.items():
        pad = os.path.join(UIT, "icon.%s.png" % env)
        teken(pal).save(pad, optimize=True)
        print("geschreven: %s (%d bytes)" % (os.path.relpath(pad, ROOT), os.path.getsize(pad)))


if __name__ == "__main__":
    main()
