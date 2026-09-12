/* =================== VERSIE / CHANGELOG (zelfde logica als km-declaratie) =================== */
const APP_VERSIE = {
  versie: "1.1",
  datum: "2026-09-12",
  historie: [
    { versie: "1.1", datum: "2026-09-12", soort: "middel",
      tekst: "Eigen app op het OTAP-platform: test-, acceptatie- en productieomgeving met gescheiden opslag." },
    { versie: "1.0", datum: "2026-08-09", soort: "groot",
      tekst: "Eerste versie: routekaarten voor de Ionische Zee met offline kaarten, locatie-omschrijvingen en 'zet op beginscherm'." }
  ]
};
function vsFmtDatum(iso){ try{ var d=iso.split('-'); return d[2]+'-'+d[1]+'-'+d[0]; }catch(e){ return iso; } }
function toonVersie(){ var ov=document.getElementById('versieOverlay'); if(ov) ov.classList.add('open'); }
function sluitVersie(){ var ov=document.getElementById('versieOverlay'); if(ov) ov.classList.remove('open'); }
document.addEventListener('keydown', function(e){ if(e.key==='Escape') sluitVersie(); });
(function initVersie(){
  var soortLabel={klein:'Kleine wijziging',middel:'Verbetering',groot:'Grote wijziging'};
  var v='v'+APP_VERSIE.versie;
  var chip=document.getElementById('versieChip'); if(chip) chip.textContent=v;
  var h=document.getElementById('vsHuidig'); if(h) h.textContent=v;
  var dd=document.getElementById('vsDatum'); if(dd) dd.textContent=vsFmtDatum(APP_VERSIE.datum);
  var log=document.getElementById('vsLog');
  if(log){
    log.innerHTML = APP_VERSIE.historie.map(function(w){
      var soort = soortLabel[w.soort] || 'Wijziging';
      var item=document.createElement('div'); item.className='vs-item';
      var vEl=document.createElement('div'); vEl.className='vs-item-v'; vEl.textContent='v'+w.versie;
      var tEl=document.createElement('div'); tEl.className='vs-item-t'; tEl.textContent=w.tekst;
      var mEl=document.createElement('div'); mEl.className='vs-item-meta'; mEl.textContent=soort+' · '+vsFmtDatum(w.datum);
      tEl.appendChild(mEl); item.appendChild(vEl); item.appendChild(tEl);
      return item.outerHTML;
    }).join('');
  }
})();
