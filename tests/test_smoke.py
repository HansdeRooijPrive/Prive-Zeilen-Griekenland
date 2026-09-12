"""Smoke-test in de browser: app laadt, routes werken, opslag is per omgeving."""


def test_app_laadt(page):
    assert "Griekenland" in page.locator("h1").inner_text()
    assert page.locator("#env-badge").inner_text().strip() == ""   # prod: geen aanduiding


def test_routes_zichtbaar(page):
    knoppen = page.locator("#routeList .route-btn")
    assert knoppen.count() >= 3          # drie routes plus een overzichtsknop


def test_route_opent_kaart(page):
    page.locator("#routeList .route-btn").first.click()
    page.wait_for_selector("#map:not(.hidden)")
    assert page.locator("#map svg").count() >= 1     # offline kaart is getekend


def test_locatie_opent_detail(page):
    """Detailscherm via de app zelf: los van kaarttegels, dus ook zonder netwerk."""
    page.locator("#routeList .route-btn").first.click()
    page.wait_for_selector("#map:not(.hidden)")
    page.evaluate("() => openDetail(curRoute, 0)")
    page.wait_for_selector("#detail:not(.hidden)")
    assert page.locator("#detail").inner_text().strip() != ""


def test_prod_opslagsleutel(page):
    page.evaluate("() => dismissTip()")
    sleutels = page.evaluate("() => Object.keys(localStorage)")
    assert any(k.endswith("-tip") for k in sleutels)
    assert not any(".test" in k or ".acc" in k for k in sleutels)


def test_versie_overlay(page):
    page.evaluate("() => toonVersie()")
    page.wait_for_selector("#versieOverlay.open")
    assert page.locator("#vsHuidig").inner_text().startswith("v")
