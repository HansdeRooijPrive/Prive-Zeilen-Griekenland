"""Build- en omgevingsisolatie-tests (pure Python, geen browser)."""
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT)
import build  # noqa: E402


def test_build_check_slaagt():
    assert subprocess.run([sys.executable, "build.py", "--check"], cwd=ROOT).returncode == 0


def test_opslag_isolatie_per_omgeving():
    key = build._config()["storage_key"]
    prod, acc, test = build.build("prod"), build.build("acc"), build.build("test")
    assert ("'%s-tip'" % key) in prod          # prod: kale sleutel
    assert ("'%s.acc-tip'" % key) in acc       # acceptatie: eigen sleutel
    assert ("'%s.test-tip'" % key) in test     # test: eigen sleutel
    assert (key + ".test") not in prod         # prod deelt geen testsleutel
    assert (key + ".acc") not in prod


def test_thema_verschilt_per_omgeving():
    assert build.build("prod") != build.build("test")   # andere kleur + omgevingsaanduiding


def test_omgevingsaanduiding_alleen_buiten_productie():
    assert "ACCEPTATIE" in build.build("acc")
    assert "TEST" in build.build("test")
    assert 'id="env-badge"></span>' in build.build("prod")   # prod: badge leeg


def test_app_is_self_contained():
    """Geen externe scripts of stylesheets: alles zit in het ene bestand."""
    html = build.build("prod")
    assert "<script src=" not in html
    assert '<link rel="stylesheet"' not in html
    assert "L.map" in html or "leaflet" in html.lower()      # Leaflet is meegebouwd
