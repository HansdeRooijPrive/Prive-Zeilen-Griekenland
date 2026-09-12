/* =================== GEO: stops (lon,lat) =================== */
const GEO = {
  "Sivota":[20.6834,38.6224],"Vassiliki":[20.6063,38.6275],"Nidri":[20.7113,38.7043],
  "Lefkas Stad":[20.7080,38.8320],"Kalamos":[20.9179,38.6481],"Eufemia":[20.6013,38.3017],
  "Fiskardo":[20.5787,38.4608],"Poros":[20.7797,38.1491],"Zakynthos Stad":[20.9050,37.7800],
  "Laganas Beach":[20.8600,37.7200],"Agios Nikolaios":[20.7050,37.9045],"Katakolon":[21.3200,37.6500],
  "Anti-Sami Baai":[20.640,38.255],"Karnayo":[20.7830,38.6630],"Verrassing":[20.8125,38.4790],
  "Parga":[20.4000,39.2850],"Mongonisi":[20.2050,39.1825],"BBQ-bay":[20.3950,39.4200],
  "Corfu Stad":[19.9217,39.6243],"Red Rock":[20.3300,39.5000],"Lakka":[20.1357,39.2346],
  "Preveza":[20.7520,38.9570]
};

/* =================== ISLAND / COAST polygons (lon,lat) ===================
   Vereenvoudigde maar herkenbare contouren van de Ionische eilanden + vasteland. */
const LAND = {
  // Vasteland (Griekenland, oostzijde) — kustlijn van Corfu-kanaal tot Peloponnesos
  mainland:[[21.10,39.95],[21.70,39.95],[21.70,37.20],[21.05,37.20],
    [21.15,37.62],[21.32,37.66],[21.22,37.80],[21.05,37.95],
    [21.02,38.20],[20.86,38.34],[20.93,38.55],[20.78,38.66],
    [20.80,38.78],[20.74,38.95],[20.78,39.02],[20.70,39.02],
    [20.66,38.96],[20.62,39.00],[20.66,39.12],[20.55,39.18],
    [20.48,39.10],[20.42,39.18],[20.40,39.30],[20.43,39.40],
    [20.36,39.36],[20.32,39.46],[20.26,39.55],[20.34,39.62],
    [20.48,39.60],[20.60,39.66],[20.72,39.80],[20.92,39.90],[21.10,39.95]],
  // Lefkada
  lefkada:[[20.66,38.55],[20.71,38.58],[20.71,38.67],[20.745,38.70],
    [20.76,38.78],[20.745,38.85],[20.69,38.90],[20.64,38.86],
    [20.635,38.78],[20.60,38.72],[20.585,38.64],[20.61,38.60],[20.66,38.55]],
  // Kefalonia — grote vorm met Paliki-schiereiland (W), Sami (O) en zuidoost-punt (Poros)
  kefalonia:[[20.36,38.18],[20.44,38.10],[20.52,38.08],[20.52,38.18],
    [20.46,38.24],[20.55,38.27],[20.58,38.20],[20.60,38.12],
    [20.66,38.10],[20.72,38.06],[20.80,38.12],[20.78,38.20],
    [20.70,38.22],[20.66,38.28],[20.62,38.27],[20.60,38.33],
    [20.64,38.40],[20.58,38.47],[20.55,38.43],[20.52,38.36],
    [20.46,38.34],[20.42,38.27],[20.37,38.25],[20.36,38.18]],
  // Ithaka — langgerekt, met zuidpunt tot Pera Pigadi
  ithaka:[[20.66,38.31],[20.71,38.31],[20.74,38.37],[20.735,38.42],
    [20.755,38.47],[20.72,38.50],[20.69,38.46],[20.70,38.40],
    [20.665,38.37],[20.66,38.31]],
  // Zakynthos — driehoekig, met Laganas-baai (zuid) en stad/haven (oost)
  zakynthos:[[20.58,37.72],[20.62,37.70],[20.70,37.69],[20.80,37.70],
    [20.86,37.71],[20.92,37.77],[20.96,37.86],[20.93,37.93],
    [20.85,37.93],[20.74,37.89],[20.66,37.85],[20.61,37.80],
    [20.585,37.76],[20.58,37.72]],
  meganissi:[[20.74,38.62],[20.81,38.625],[20.835,38.66],[20.80,38.69],[20.755,38.68],[20.735,38.655],[20.74,38.62]],
  kalamos:[[20.88,38.58],[20.95,38.60],[20.965,38.66],[20.91,38.68],[20.865,38.64],[20.88,38.58]],
  kastos:[[20.895,38.54],[20.925,38.55],[20.93,38.60],[20.905,38.61],[20.89,38.57],[20.895,38.54]],
  paxos:[[20.165,39.16],[20.215,39.165],[20.235,39.20],[20.225,39.26],[20.195,39.30],[20.155,39.27],[20.155,39.20],[20.165,39.16]],
  antipaxos:[[20.22,39.13],[20.25,39.135],[20.255,39.165],[20.23,39.175],[20.215,39.155],[20.22,39.13]],
  // Corfu — zuidelijke helft, oostkust (Corfu-stad) en westkust-baai bij Palaiokastritsa
  corfu:[[19.90,39.36],[19.95,39.40],[19.96,39.50],[19.93,39.58],
    [19.95,39.62],[19.93,39.66],[19.85,39.62],[19.72,39.67],
    [19.78,39.72],[19.90,39.70],[19.96,39.64],[20.00,39.62],
    [20.10,39.78],[20.04,39.86],[19.93,39.82],[19.88,39.70],
    [19.86,39.55],[19.87,39.44],[19.90,39.36]]
};
const SEA_LABELS=[{t:"IONISCHE ZEE",lon:20.30,lat:38.55}];

/* =================== ROUTE DATA =================== */
const ROUTES=[
 {id:"zak",title:"Zakynthos route",sub:"2 weken",stops:[
  {n:1,name:"Sivota",day:"Zaterdag",label:"Aankomst Sivota, Lefkas",desc:"Sivota is een mooie baai en biedt een veilige schuilplaats voor onze vloot. Langs de kleine haven liggen leuke vistavernes en restaurants. Onze aanlegsteiger wordt beheerd door Theo, eigenaar van restaurant 12 Gods — tevens uitvalsbasis voor onze briefings en gezamenlijke diners."},
  {n:2,name:"Vassiliki",day:"Zondag",label:"Vassiliki, Lefkas",desc:"Vassiliki is het surfparadijs van Lefkas. Er staat geregeld wat meer wind in deze grote baai, wat het zeilen hier populair maakt. De haven is omringd door het dorp en talrijke (traditionele) restaurantjes."},
  {n:3,name:"Eufemia",day:"Maandag",label:"Eufemia, Kefalonia",desc:"Eufemia is een klein vakantieplaatsje met een gezellige haven en boulevard. Hier vind je allerlei cafés, bars, vistavernes en restaurants. Het dorpje is gebouwd tegen de hellingen van de groene heuvels eromheen."},
  {n:4,name:"Poros",day:"Dinsdag",label:"Poros, Kefalonia",desc:"Poros ligt in het zuidwesten van Kefalonia. Omdat de ferry hier aankomt is er altijd veel leven in de haven. De wandeling naar het dorp is leuk dankzij de brede boulevard: aan de ene kant het strand, aan de andere kant restaurants, winkels en barretjes."},
  {n:5,name:"Zakynthos Stad",day:"Woensdag",label:"Zakynthos Stad",desc:"De hoofdstad van Zakynthos werd in 1953 door een zware aardbeving bijna verwoest. De stad telt ~12.000 inwoners en is modern, met veel gebouwen in klassieke stijl: straten met booggewelven, kerken met imposante klokkentorens, mooie pleinen en monumenten. Hier ligt ook de haven."},
  {n:6,name:"Katakolon",day:"Donderdag / Vrijdag",label:"Katakolon, Peleponissos",desc:"Katakolon bestaat uit drie straten met (vis)restaurantjes en gezellige terrasjes aan het water. Het is de toegangspoort naar het befaamde Olympia. Op vrijdag organiseren we een uitje naar Olympia; wie blijft kan naar het uitgestrekte strand of zeilen."},
  {n:7,name:"Laganas Beach",day:"Zaterdag / Zondag",label:"Laganas Beach, Zakynthos",desc:"Laganas ligt aan één van de langste baaien van Griekenland (bijna 9 km). Een groot deel is beschermd Marine Park. De baai behoort wereldwijd tot de gebieden met de meeste broedplaatsen van de mediterrane Caretta Caretta zeeschildpadden. Zondag is rustdag: relaxen, duiken, snorkelen of schildpadden spotten."},
  {n:8,name:"Agios Nikolaios",day:"Maandag",label:"Agios Nikolaios, Zakynthos",desc:"Het dorp ligt verspreid in een komvormige baai. Aan de noordzijde ligt het rustige vissershaventje; vanaf het taverneterras direct aan zee heb je een schitterend uitzicht op de haven en in de verte de drukte van dagexcursies."},
  {n:9,name:"Anti-Sami Baai",day:"Dinsdag",label:"Blue Caves & Anti-Sami Baai",desc:"In de ochtend een excursie naar de Blue Caves, daarna varen we naar de Anti-Sami Baai op Kefalonia. Deze baai wordt omgeven door groene bergen; aan het strand van kleine witte kiezels liggen diverse beach bars en kun je watersporten."},
  {n:10,name:"Fiskardo",day:"Woensdag",label:"Fiskardo, Kefalonia",desc:"Fiskardo is een gezellig vissersdorp in het noorden van Kefalonia met een pittoreske, kleurrijke haven vol zeiljachten, winkeltjes, terrasjes en restaurants. Eén van de weinige dorpen dat niet werd verwoest bij de aardbeving van 1953 — de traditionele en Venetiaanse gebouwen zijn intact."},
  {n:11,name:"Karnayo",day:"Donderdag",label:"Karnayo, Meganissi",desc:"Meganissi is een klein eilandje (20 km²) ten zuidoosten van Lefkas. Direct stuurboord uit ligt de baai Karnayo: een kleine familietaverne met privéstrand en aanlegsteiger waar we op mooringline liggen."},
  {n:12,name:"Sivota",day:"Vrijdag",label:"Terug naar Sivota, Lefkas",desc:"Terug naar de thuisbasis, waar aan de aanlegsteiger kan worden afgetankt voordat (helaas) de koffers gepakt moeten worden. 's Avonds kan er bij restaurant 12 Gods heerlijk worden gedineerd."}
 ]},
 {id:"lef",title:"Lefkas route",sub:"week 2",stops:[
  {n:1,name:"Sivota",day:"Zaterdag",label:"Aankomst Sivota, Lefkas",desc:"Sivota is een mooie baai en biedt een veilige schuilplaats voor onze vloot. Langs de kleine haven liggen leuke vistavernes en restaurants. Onze aanlegsteiger wordt beheerd door Theo, eigenaar van restaurant 12 Gods — tevens uitvalsbasis voor onze briefings en gezamenlijke diners."},
  {n:2,name:"Kalamos",day:"Zondag",label:"Kalamos, Kalamos",desc:"Kalamos is een zeer groen eiland met veel dennenbossen, kleine verlaten zand- en kiezelstranden en turquoise, kristalhelder water. Het is een bergachtig eiland, geliefd onder zeilers — hoewel klein is de hoogste top 745 meter!"},
  {n:3,name:"Verrassing",day:"Maandag",label:"Verrassing",desc:"Dit pareltje houden we nog even voor onszelf. Op deze plek bouwen we een raft met lange lijnen naar de rotsen en organiseert iedereen z'n eigen Captain's Diner."},
  {n:4,name:"Eufemia",day:"Dinsdag",label:"Eufemia, Kefalonia",desc:"De haven van Eufemia heeft een gezellige, levendige boulevard versierd met kleine palmbomen. Hier werd een scène uit de film 'Captain Corelli's Mandoline' opgenomen. Aan de boulevard liggen diverse restaurantjes, barretjes en kleine shopjes."},
  {n:5,name:"Vassiliki",day:"Woensdag",label:"Vassiliki, Lefkas",desc:"Vassiliki is het surfparadijs van Lefkas. Er staat geregeld wat meer wind in deze grote baai, wat het zeilen hier populair maakt. De haven is omringd door het dorp en talrijke (traditionele) restaurantjes."},
  {n:6,name:"Nidri",day:"Donderdag",label:"Nidri, Lefkas",desc:"Nidri is een gezellig badplaatsje op Lefkas. We meren aan bij de steiger van Hotel Iris en liggen op mooringline. 's Avonds kan een heerlijk BBQ-buffet worden georganiseerd."},
  {n:7,name:"Sivota",day:"Vrijdag",label:"Terug naar Sivota, Lefkas",desc:"Terug naar de thuisbasis, waar aan de aanlegsteiger kan worden afgetankt voordat (helaas) de koffers gepakt moeten worden. 's Avonds kan er bij restaurant 12 Gods heerlijk worden gedineerd."}
 ]},
 {id:"cul",title:"Culinaire route",sub:"2 weken",stops:[
  {n:1,name:"Sivota",day:"Zaterdag",label:"Aankomst Sivota, Lefkas",desc:"Sivota is een mooie baai en biedt een veilige schuilplaats voor onze vloot. Langs de kleine haven liggen leuke vistavernes en restaurants. Onze aanlegsteiger wordt beheerd door Theo, eigenaar van restaurant 12 Gods — uitvalsbasis voor onze briefings en gezamenlijke diners."},
  {n:2,name:"Fiskardo",day:"Zondag",label:"Fiskardo, Kefalonia",desc:"Fiskardo blijft je bij door de kleurigheid van de huizen — het enige dorp dat de aardbeving van 1953 overleefde, ook wel het Monaco van de Ionische Zee. Hier dineren we bij Apagio, waar onze culinaire zeilreis van smaken en sensaties begint."},
  {n:3,name:"Lefkas Stad",day:"Maandag",label:"Lefkas Stad (Lefkada town)",desc:"Een gezellige stad met volop terrasjes van restaurants en vistavernes en zeer goede lokale gerechten. Aan de westkant bars met terrasjes aan het water, aan de oostkant de meeste restaurants en cafés. We dineren bij Ey Zhn, een kleine taverne gerund door chef-kok Alex."},
  {n:4,name:"Parga",day:"Dinsdag / Woensdag",label:"Parga, vasteland",desc:"Parga is herkenbaar aan het fort 'Kastelli' in de heuvels en het lange zandstrand. Heerlijk zwemmen of suppen; 's avonds brengt een taxi-bootje ons naar het knusse centrum. We dineren bij W&F Wine & Food met zeezicht. Woensdag blijven we in Parga, met ontbijtbuffet bij Cape North West."},
  {n:5,name:"Mongonisi",day:"Donderdag",label:"Mongonisi, Paxos",desc:"Mongonissi ligt ten zuiden van Paxos, op 4 km van hoofdstad Gaios. Uniek door de complexiteit van het landschap, de diepblauwe zee, het zandstrand en indrukwekkende grotten. We dineren bij Mongonissi Beach Bar — motto: wij dienen u zoals we onze vrienden zouden dienen."},
  {n:6,name:"BBQ-bay",day:"Vrijdag",label:"BBQ-bay, vasteland",desc:"Een prachtig zandstrand op het vasteland waar 's avonds speciaal voor het flottielje een BBQ wordt georganiseerd. Daarvoor kan worden gezwommen of gewatersport. Een bijzondere BBQ, speciaal aangepast aan onze route."},
  {n:7,name:"Corfu Stad",day:"Zaterdag",label:"Corfu Stad, Corfu",desc:"Aan de voet van het fort ligt Mandraki, een kleine verenigingshaven. We liggen op mooringline; van hieruit is het een kleine wandeling naar Corfu Stad met fraaie forten, Venetiaanse huizen, indrukwekkende pleinen en smalle steegjes. We dineren aan het water, aan de voet van het fort."},
  {n:8,name:"Red Rock",day:"Zondag",label:"Red Rock, vasteland",desc:"Een culinaire verrassing, en zeker ook een verrassing qua plek. Deze unieke baai leent zich perfect voor een gezellig 'walking diner'."},
  {n:9,name:"Lakka",day:"Maandag / Dinsdag",label:"Lakka, Paxos",desc:"De komvormige baai van Lakka heeft de mooiste tinten blauw; door olijfbomen en cipressen tot aan de kustlijn oogt het als een meer. We dineren bij Akis Fish Bar & Restaurant aan het water. Dinsdag ronden we Paxos — prachtige kliffen aan de westkust en privé-strandjes."},
  {n:10,name:"Preveza",day:"Woensdag",label:"Preveza, vasteland",desc:"Preveza ligt in het westen van Griekenland. Slenter door de smalle straatjes met de Seitan Bazaar, de Venetiaanse klokkentoren uit 1752 en het fort Agios Andreas. We dineren bij Kaixis Mermaid Restaurant, waar de 'Amvrakia Shrimps' naar grootmoeders recept worden aanbevolen."},
  {n:11,name:"Karnayo",day:"Donderdag",label:"Karnayo, Meganissi",desc:"Meganissi is een klein eilandje (20 km²) ten zuidoosten van Lefkas. Direct stuurboord uit ligt de baai Karnayo: een kleine familietaverne met privéstrand en aanlegsteiger waar we op mooringline liggen."},
  {n:12,name:"Sivota",day:"Vrijdag",label:"Afsluiting in Sivota, Lefkas",desc:"Hier sluiten we onze culinaire reis af — niet qua plaats en restaurant, maar de reis zit er op. We sluiten deze bijzondere reis op gepaste wijze met zijn allen af!"}
 ]}
];

/* =================== STATE =================== */
let curRoute=null, curStopIdx=0;

/* =================== ALLE LOCATIES =================== */
/* (ALL_STOPS wordt verderop opgebouwd, na de ankerplek-data) */

/* =================== ANKERPLEKKEN (mooie baaien & ankerages) =================== */
// Coördinaten (lon,lat) toegevoegd aan GEO; beschrijvingen in eigen woorden o.b.v. zeilgidsen.
Object.assign(GEO,{
  "Lakka (Paxos)":[20.1357,39.2346],
  "Gaios (Paxos)":[20.1900,39.1970],
  "Mongonissi (Paxos)":[20.2050,39.1825],
  "Voutoumi (Antipaxos)":[20.2350,39.1450],
  "Vrika (Antipaxos)":[20.2320,39.1550],
  "Sivota (vasteland)":[20.2900,39.4000],
  "Parga":[20.4000,39.2850],
  "Palaiokastritsa (Corfu)":[19.7000,39.6750],
  "Spilia / Spartochori (Meganissi)":[20.7614,38.6609],
  "Papanikolis-grot (Meganissi)":[20.7626,38.6141],
  "Nr. 7 Bay (Meganissi)":[20.8000,38.6200],
  "One Tree Bay (vasteland)":[20.8060,38.6910],
  "Desimi Bay (Lefkas)":[20.7150,38.6900],
  "Kalamos (Episkopi)":[20.9179,38.6481],
  "Kastos":[20.9234,38.5661],
  "Fiskardo":[20.5787,38.4608],
  "Assos (Kefalonia)":[20.5394,38.3800],
  "Polis Bay (Ithaka)":[20.6400,38.4300],
  "Pera Pigadi (Ithaka)":[20.7457,38.3375],
  "Kioni (Ithaka)":[20.6930,38.4478],
  "Frikes (Ithaka)":[20.6640,38.4582],
  "Porto Katsiki (Lefkas)":[20.5501,38.6027],
  "Navagio / Shipwreck (Zakynthos)":[20.6258,37.8590],
  "Klein Vathi (Meganissi)":[20.7735,38.6720],
  "Abaliki Baai (Meganissi)":[20.7992,38.6671],
  "Atheni Baai (Meganissi)":[20.8060,38.6590],
  "Lygia (Lefkas)":[20.7130,38.7700],
  "Nikiana (Lefkas)":[20.7200,38.7550],
  "Nydri / Vlycho (Lefkas)":[20.7060,38.6950],
  "Sivota (Lefkas)":[20.6834,38.6224],
  "Vassiliki (Lefkas)":[20.6063,38.6275],
  "Paleros (vasteland)":[20.8827,38.7834],
  "Vathi (Ithaka)":[20.7188,38.3665],
  "Eufemia (Kefalonia)":[20.6013,38.3017],
  "Sami (Kefalonia)":[20.6459,38.2523],
  "Anti-Sami Baai (Kefalonia)":[20.6400,38.2550],
  "Poros (Kefalonia)":[20.7797,38.1491]
});
const ANCHOR_STOPS=[
  {name:"Lakka (Paxos)",label:"Lakka — Paxos",day:"Natuur & dorp",desc:"Komvormige baai in het noorden van Paxos met turquoise, glashelder water en dennenbegroeide heuvels tot aan de kustlijn. Goede beschutting; een geliefde ankerplek met een sfeervol dorpje en tavernes. In het hoogseizoen druk — vroeg arriveren loont. Pas op bij sterke NW–NE wind bij de invaart."},
  {name:"Gaios (Paxos)",label:"Gaios — Paxos",day:"Havenstadje",desc:"De hoofdhaven van Paxos, beschut achter een natuurlijk eilandje dat als golfbreker werkt. Pastelkleurige Venetiaanse huizen rond een kanaalachtige inham; je kunt midden in het levendige stadje afmeren. Venetiaans fort en oud klooster op de eilandjes voor de haven."},
  {name:"Mongonissi (Paxos)",label:"Mongonissi — Paxos",day:"Rustige baai",desc:"Aan de zuidpunt van Paxos, rustiger dan Gaios. Grotten en bijzonder landschap; goede holding zodra je door het zeewier heen bent. Stern-to aan de kade; niet geschikt bij stevige NE-wind. Zwemmen in de grot aan de zuidzijde."},
  {name:"Voutoumi (Antipaxos)",label:"Voutoumi — Antipaxos",day:"Caribisch water",desc:"Eén van de mooiste ankerplekken van de Ionische Zee: wit zandbodem, water van lichtaquamarijn tot diep kobaltblauw, en zo helder dat je je ankerketting op de bodem ziet liggen. Ankeren op 5–10 m in zand, goede holding. Een dagtrip-favoriet — kom vroeg of laat."},
  {name:"Vrika (Antipaxos)",label:"Vrika — Antipaxos",day:"Zandstrand",desc:"Naast Voutoumi: zacht zand en lichtgevend water in Caribische tinten. Beschutte ankerplek aan de oostkust van het kleine, vrijwel onbewoonde Antipaxos. Open naar het noorden; in kalm weer een droomplek voor zwemmen en snorkelen."},
  {name:"Sivota (vasteland)",label:"Sivota — vasteland",day:"Beschutte fjord",desc:"Diep ingesneden, goed beschutte baai op het vasteland (niet te verwarren met Sivota op Lefkas). Rustig water, omringd door groen, met enkele tavernes aan het water. Populaire en veilige overnachtingsplek in het noorden van het gebied."},
  {name:"Parga",label:"Parga — vasteland",day:"Havenstadje",desc:"Schilderachtig stadje onder het Venetiaanse fort Kastelli, met een lang zandstrand. Sfeervolle straatjes, tavernes en een levendige boulevard. Aankomst per boot geeft een mooi zicht op het fort en de baai."},
  {name:"Palaiokastritsa (Corfu)",label:"Palaiokastritsa — Corfu",day:"Natuur",desc:"Spectaculaire, afgelegen baaien aan de westkust van Corfu met steile, groene kapen en helder water — perfect om te ontspannen na een zeildag. Een van de mooiste natuurplekken van het noordelijke gebied."},
  {name:"Spilia / Spartochori (Meganissi)",label:"Spilia & Spartochori — Meganissi",day:"Dorp & baai",desc:"SPARTAGHORI: (Porto Spillia) één van onze favoriete plekjes. Je legt daar gewoonlijk met de punt naar voren aan (ja,ja) en krijgt van een heel oud mannetje een mooringline aangereikt die je dan belegt op een achterkikker. Je krijgt dan een trapje van hem. (Hij helpt met aanleggen en zijn: trekke,trekke… is hilarisch).Dit kun je(het beste)van te voren reserveren. Je eet dan in hun echte Griekse taverne aan de waterkant. Er zit een strandje bij met een leuke strandtent en zelfs ligbedden. Aan te raden, maar wel heftig is een wandeling naar boven naar het mooie plaatsje Spartaghori, met een geweldig uitzicht over een heel groot deel van het gebied, waaronder het eiland Skorpios, wat tot voor kort eigendom was van de familie Onassis (en Jacky Kennedy). Kosten:niets! Alleen eten bij de mannetjes. Tel. Nr: 0030-2645051616 Je kunt er ook voor kiezen om los voor anker te gaan of zelfs kun je in de haven liggen: Meganissi Port (wel kosten: ca 25,-)\\n\\n— — —\\n\\nSpilia-baai onder het pittoreske dorp Spartochori op Meganissi. De bodem loopt steil op, dus goede holding stern-to aan de kade. Overheersende wind NW–N (soms NE 's nachts). Rustige sfeer, traditionele tavernes."},
  {name:"Papanikolis-grot (Meganissi)",label:"Papanikolis-grot — Meganissi",day:"Zeegrot",desc:"Grote zeegrot aan de zuidwestkust van Meganissi, waar de gelijknamige onderzeeër zich in WO II verschool. Een indrukwekkende dagstop per dinghy of zwemmend; combineer met de baaien langs de zuidelijke kust."},
  {name:"Nr. 7 Bay (Meganissi)",label:"Nr. 7 Bay (Papageorges) — Meganissi",day:"Verborgen kreek",desc:"Kleine kreek aan de zuidpunt van Meganissi, tegenover Kithros, beschut tegen de overheersende wind met indrukwekkende rotsformaties erboven. Ankeren op 8–10 m in zand met landlijn; er passen maar enkele boten — kom vroeg of laat."},
  {name:"One Tree Bay (vasteland)",label:"One Tree Bay — vasteland",day:"Flottielje-favoriet",desc:"Populaire turquoise ondiepe baai op de vastelandkust ten noorden van Meganissi, samen met Goat Bay. Mooi en gezellig, maar bekend en in de zomer druk. Heerlijk helder water om te zwemmen."},
  {name:"Desimi Bay (Lefkas)",label:"Desimi Bay — Lefkas",day:"Beschut & groen",desc:"Verscholen, vredige baai bij het Geni-schiereiland op Lefkas, omringd door dennenbossen en uitstekend om te zwemmen. Goede beschutting en holding; rustige nachten met weinig deining, goed beschut tegen NW-wind. Anker op zandplekken, mijd dik wier."},
  {name:"Kalamos (Episkopi)",label:"Kalamos — Episkopi",day:"Groen eiland",desc:"KALAMOS: met ook een gelijknamig plaatsje. Alles, maar dan ook alles wordt bijna geregeld door GEORGE; haven, restaurant…Vaak in de haven op eigen anker en anders buiten op mooringlines. Tel. Nr.: 0030-2646091358\\n\\n— — —\\n\\nZeer groen, bergachtig eiland met dennenbossen en kristalhelder water. Bij Episkopi/Port Kalamos lig je vaak voor de taverne; rustig en afgelegen — een verademing van de drukte, geliefd onder zeilers."},
  {name:"Kastos",label:"Kastos",day:"Stil eilandje",desc:"KASTOS: met gelijknamig plaatsje: heel erg kneuterig. Weinig plek aan de kade (gratis) maar je kunt aan de overkant vaak op anker en lange lijnen voor een strandje liggen (haven invaren) of buitengaats. Meerdere, maar het leukste restaurantje met een fantastisch uitzicht is: De WINDMILL\\n\\n— — —\\n\\nKlein, nauwelijks bewoond eiland met een eenvoudige, ontspannen havensfeer. Stille ankerplekken en helder water; het soort plek waar de tijd vertraagt — goed eten, goed slapen, even helemaal weg."},
  {name:"Fiskardo",label:"Fiskardo — Kefalonia",day:"Havenstadje",desc:"FISKARDO; het Saint Tropez van Griekenland genoemd. De prijs is er in ieder gevallen wel naar, Qua eten en drinken. Goede restaurants en cocktailbars. Erg mooi gelegen op de kop van het eiland in een kommetje. Liggen aan de stadskade is leuk, maar wel veel kans op spaghetti met de ankers vanwege de kom. Anders op anker en lange lijnen aan de overkant. (Kost niets)\\n\\n— — —\\n\\nKleurrijk, pittoresk vissersdorp in het noorden van Kefalonia — als enige niet verwoest door de aardbeving van 1953, met intacte Venetiaanse gebouwen. Drukke maar charmante haven vol zeiljachten, winkeltjes en goede tavernes."},
  {name:"Assos (Kefalonia)",label:"Assos — Kefalonia",day:"Schiereiland & kasteel",desc:"Idyllisch dorpje op een smal schiereiland aan de westkust van Kefalonia, met een Venetiaans fort op de heuvel erboven. Mooie, beschutte ankerplek met postkaart-uitzicht; rustiger dan Fiskardo."},
  {name:"Polis Bay (Ithaka)",label:"Polis Bay — Ithaka",day:"Natuur & dorp",desc:"Goede overnachtingsankerplek aan de westkust van Ithaka, tegenover het drukke Fiskardo. Boven de baai ligt het traditionele dorp Stavros op de heuvel. Rustig alternatief met authentieke sfeer."},
  {name:"Pera Pigadi (Ithaka)",label:"Pera Pigadi — Ithaka",day:"Verborgen parel",desc:"Vaak spiegelglad in de namiddag, ten zuiden van Vathi waar de winderige vlagen van Frikes en Kioni wegvallen. Een 4 m diep kanaal binnen een eilandje, met ankerplekjes bij kleine strandjes. Glashelder water; in de heuvels de bron van Arethusa uit Homerus' verhalen."},
  {name:"Kioni (Ithaka)",label:"Kioni — Ithaka",day:"Pittoresk dorp",desc:"KIONI: schilderachtig mooi plaatsje. Aan de stadskade op anker of aan de overzijde op anker en lange lijn.(Kost niets).\\n\\n— — —\\n\\nEen van de mooiste dorpjes van Ithaka, rond een hoefijzervormige baai met kleurige huizen langs het water. Sfeervolle tavernes en helder water; geliefd maar charmant. Kan winderig zijn — vandaar de aantrekkingskracht van het zuiden in de zomer."},
  {name:"Frikes (Ithaka)",label:"Frikes — Ithaka",day:"Vissersdorp",desc:"Klein, gezellig vissersdorp in een baai aan de noordoostkust van Ithaka, populair als lunch- en overnachtingsstop. Goede tavernes; kan stevige namiddagwind krijgen, die 's avonds wegvalt."},
  {name:"Porto Katsiki (Lefkas)",label:"Porto Katsiki — Lefkas",day:"Beroemd strand",desc:"Het iconische, door kliffen omlijste strand aan de westkust van Lefkas dat op elke 'droom-Griekenland'-foto staat. Onwerkelijk turquoise water; per boot een heel andere beleving dan vanaf de weg. Dagstop bij kalm weer — open en zonder beschutting."},
  {name:"Navagio / Shipwreck (Zakynthos)",label:"Navagio (Shipwreck Bay) — Zakynthos",day:"Wereldberoemde baai",desc:"De wereldberoemde Shipwreck Beach aan de noordwestkust van Zakynthos, met een gestrand vrachtschip op wit zand tussen hoge kliffen. Een goede ankerplek met zandbodem; alleen per boot bereikbaar en het indrukwekkendst vroeg op de dag."},
  {name:"Klein Vathi (Meganissi)",label:"(Klein) Vathi — Meganissi",day:"Stadskade & baai",desc:"(KLEIN VATHI): Het mooist is het daar liggen aan de stadskade met de achterkant naar de wal op eigen anker. Kost niks, maar vaak weinig plek. Er zijn meerdere hele kleine supermarkten en een aantal restaurantjes en barretjes(erg gezellig). Er is daar ook de mogelijkheid om in de haven te liggen: Plous Odysseus Marina (nog nooit gelegen). Je kunt er ook voor kiezen om bij binnenkomst in de baai direct naar rechts te gaan : Karnagio; een restaurantje met steiger en een klein strandje. Tel.nr: 0030-2645051071 (reserveren dus). Ze heet Alex."},
  {name:"Abaliki Baai (Meganissi)",label:"Abaliki Baai — Meganissi",day:"Ankerbaai",desc:"ABALIKI BAAI: de tweede en diepe baai na de baai van (klein)Vathi. Achterin 2 kleine restaurantjes met een houten steigertje. Wij liggen daar meestal op anker met een lange lijn naar de kant."},
  {name:"Atheni Baai (Meganissi)",label:"Atheni Baai — Meganissi",day:"Diepe baai",desc:"ATHENI BAAI: Een hele diepe baai met ook weer achterin links een leuke taverne; Niagas. Je kunt helemaal achterin op een betonnen kade, aan een echte houtje touwtjes steiger bij het restaurant of los voor anker(evt. Met lange lijnen): let op er zit een lange zandbank met rotsen in het midden."},
  {name:"Lygia (Lefkas)",label:"Lygia — Lefkas",day:"Steigers / anker",desc:"LYGIA: tegenwoordig ook steigers of los voor anker (VHF): wij gaan meestal los voor anker"},
  {name:"Nikiana (Lefkas)",label:"Nikiana — Lefkas",day:"Steigers / anker",desc:"NIKIANA: ook steigers en los voor anker (VHF)"},
  {name:"Nydri / Vlycho (Lefkas)",label:"Nydri / Vlycho — Lefkas",day:"Levendig & ankerbaai",desc:"NYDRI:erg levendig en toeristisch. Je kunt aan de stadskade (gratis en als er plek is) of doorvaren richting een soort binnen-baai: VLYCHOin de baai achterin kun je super goed ankeren en er zitten een aantal schattige restaurants links achterin(favoriet: HYPOCAMPUS). Op weg daar naar toe vind je talloze steigers waarde kunt reserveren (rechtsachterin (VHF) of bij te Iris Hotel Tel. Nr: 0030-2645092546 (wel tegen betaling, ca 45,-). De mooie grote haven, betaald met Europees geld, is nog (steeds) niet in gebruik;-)."},
  {name:"Sivota (Lefkas)",label:"Sivota — Lefkas (thuishaven)",day:"Thuishaven",desc:"SIVOTA: onze “thuishaven”: het mooiste plekje van het gebied met een mooi beschermde baai, met aan de kade meerdere restaurantjes, barretjes en supermarktjes. De laatste jaren (helaas wel veel gebouwd op de bergen rondom en de kade is niet meer sla’s stadskade aan te leggen. Je vindt er nu steigers). Je kunt het beste aan onze steiger liggen: is van een Italiaan. Bij de Yaght Bar, bij een klein strandje achterin bij binnenkomst de eerste steiger aan stuurboord. Tel. Nr. MARTINO: 0039-3711508073/ PINOT: 0039-3479350414 (kosten ca. 40,-)"},
  {name:"Vassiliki (Lefkas)",label:"Vassiliki — Lefkas",day:"Surfersparadijs",desc:"VASSILIKI: op de zuidkust van Lefkas; een paradijs voor surfers, met vaak veel wind. Het mooist lig je in de oude binnenhaven voor de Yaght Bar aan de stadskade of anders aan de kade. (pas op met invaren: ligt een zandbank). Ook hier een mega haven die nog steeds niet gebruikt wordt. Is vergunning voor een vissershaven, maar daar lijkt het totaal niet op."},
  {name:"Paleros (vasteland)",label:"Paleros — vasteland",day:"Anker / haven",desc:"PALEROS:(op het vaste land) Hier kun je los voor anker voor een strandje of in de haven (tegen betaling: nooit gedaan;-))"},
  {name:"Vathi (Ithaka)",label:"(Groot) Vathi — Ithaka",day:"Grotere plaats",desc:"(GROOT) VATHI: het woord zegt het al; een echt grotere plaats. Met veelal ruimte aan de stadskade (wel melden bij de port-police als je wil;-)) of ze komen langs. Kosten ca. 2,50 of ergens in de baai los voor anker. Veel restaurantjes, supermarktjes en barretjes. Hier kun je ook tanken."},
  {name:"Eufemia (Kefalonia)",label:"Eufemia — Kefalonia",day:"Stadskade",desc:"EUFEMIA: halverwege het eiland met veel plek aan de stadskade (veelal)"},
  {name:"Sami (Kefalonia)",label:"Sami — Kefalonia",day:"Filmlocatie",desc:"SAMI: een wat grotere plaats met plekken in de haven.Hier werd de film Captain Corelli’s Mandolin opgenomen."},
  {name:"Anti-Sami Baai (Kefalonia)",label:"Anti-Sami — Kefalonia",day:"Grote ankerbaai",desc:"ANTI-SAMI: een hele grote baai met strand en een beachbar achterin. (Volgens mij alleen voor de flottieljes ‘s avonds geopend). Allen los voor anker mogelijk."},
  {name:"Poros (Kefalonia)",label:"Poros — Kefalonia",day:"Barretje in de rots",desc:"POROS: je logt hier niet in een plaatsje, maar aan een buitenlander bij een barretje (erg mooi in een rots). Lopen naar het dorpje is ca 10 minuten."}
];
// Namen die uit de eigen notitie komen (krijgen een eigen kleur)
const NOTE_NAMES = new Set([
  "Spilia / Spartochori (Meganissi)","Kalamos (Episkopi)","Kastos","Fiskardo","Kioni (Ithaka)",
  "Klein Vathi (Meganissi)","Abaliki Baai (Meganissi)","Atheni Baai (Meganissi)","Lygia (Lefkas)",
  "Nikiana (Lefkas)","Nydri / Vlycho (Lefkas)","Sivota (Lefkas)","Vassiliki (Lefkas)","Paleros (vasteland)",
  "Vathi (Ithaka)","Eufemia (Kefalonia)","Sami (Kefalonia)","Anti-Sami Baai (Kefalonia)","Poros (Kefalonia)"
]);
ANCHOR_STOPS.forEach(s=>{ s.kind = NOTE_NAMES.has(s.name) ? "note" : "anchor"; });

/* =================== ALLE LOCATIES (overzicht: routes + ankerplekken + notitie) =================== */
const ALL_STOPS=(function(){
  const list=[]; const seenKey={};
  const keyOf=(name)=>GEO[name][0].toFixed(3)+","+GEO[name][1].toFixed(3);
  function add(st,kind){
    const k=keyOf(st.name);
    if(seenKey[k]) return;            // zelfde plek al opgenomen (eerste = hoogste prioriteit)
    seenKey[k]=true;
    list.push({name:st.name,label:st.label,day:st.day,desc:st.desc,kind:kind});
  }
  // 1) notitie-plekken eerst → die winnen bij dubbele plek (kleur + tekst)
  ANCHOR_STOPS.forEach(st=>{ if(st.kind==="note") add(st,"note"); });
  // 2) routebestemmingen (amber)
  ROUTES.forEach(r=>r.stops.forEach(st=>add(st,"route")));
  // 3) overige ankerplekken (groen)
  ANCHOR_STOPS.forEach(st=>{ if(st.kind!=="note") add(st,"anchor"); });
  list.sort((a,b)=>GEO[b.name][1]-GEO[a.name][1]);
  list.forEach((s,i)=>s.n=i+1);
  return list;
})();
const ALL_ROUTE={id:"all",title:"Alle locaties",sub:"routes, ankerplekken & Froukje's advies",stops:ALL_STOPS};

function getRoute(rid){ return rid==="all"?ALL_ROUTE:ROUTES.find(r=>r.id===rid); }

/* =================== HOME LIST =================== */
const rl=document.getElementById('routeList');
ROUTES.forEach((r,i)=>{
  const b=document.createElement('div');
  b.className='route-btn';
  b.innerHTML=`<div class="idx">${i+1}</div>
    <div class="meta"><b>${r.title}</b><span>${r.sub} · ${r.stops.length} bestemmingen</span></div>
    <div class="arr">›</div>`;
  b.onclick=()=>openMap(r.id);
  rl.appendChild(b);
});
// extra knop: alle locaties
(function(){
  const b=document.createElement('div');
  b.className='route-btn all-btn';
  b.innerHTML=`<div class="idx">★</div>
    <div class="meta"><b>Alle locaties</b><span>routes, ankerplekken & Froukje's advies · ${ALL_STOPS.length} plekken</span></div>
    <div class="arr">›</div>`;
  b.onclick=()=>openMap('all');
  rl.appendChild(b);
})();

/* =================== PROJECTION =================== */
function computeView(route){
  // bounds over stops + relevante eilanden, met marge
  const pts=route.stops.map(s=>GEO[s.name]);
  let lon0=Math.min(...pts.map(p=>p[0])), lon1=Math.max(...pts.map(p=>p[0]));
  let lat0=Math.min(...pts.map(p=>p[1])), lat1=Math.max(...pts.map(p=>p[1]));
  const mLon=(lon1-lon0)*0.18+0.08, mLat=(lat1-lat0)*0.18+0.08;
  lon0-=mLon;lon1+=mLon;lat0-=mLat;lat1+=mLat;
  return {lon0,lon1,lat0,lat1};
}
// viewBox in projected units; we project lon->x, lat->y(flip), with latitude scaling
let VB={lon0:0,lon1:1,lat0:0,lat1:1,W:1000,H:1000};
function setupViewBox(route){
  const v=computeView(route);
  const cosLat=Math.cos((v.lat0+v.lat1)/2*Math.PI/180);
  const w=(v.lon1-v.lon0)*cosLat, h=(v.lat1-v.lat0);
  const H=1000, W=Math.round(H*w/h);
  VB={...v,cosLat,W,H};
  return VB;
}
function X(lon){return (lon-VB.lon0)*VB.cosLat/((VB.lon1-VB.lon0)*VB.cosLat)*VB.W;}
function Y(lat){return VB.H-(lat-VB.lat0)/(VB.lat1-VB.lat0)*VB.H;}
function path(poly){return poly.map((p,i)=>(i?'L':'M')+X(p[0]).toFixed(1)+' '+Y(p[1]).toFixed(1)).join(' ')+' Z';}

/* kleine pixel-nudges (fractie van VB.W) om gestapelde markers leesbaar te maken */
const NUDGE={
  zak:{"Sivota":[-0.05,0.18],"Vassiliki":[-0.40,0.40],"Karnayo":[0.30,-0.10],
       "Anti-Sami Baai":[0.05,0.30],"Eufemia":[-0.10,0.05]},
  lef:{"Sivota":[-0.05,0.20],"Vassiliki":[-0.35,0.35],"Nidri":[0.20,-0.15]},
  cul:{"Sivota":[-0.45,0.05],"Karnayo":[0.45,0.05],"Mongonisi":[0.30,-0.35],"Lakka":[-0.35,0.10]}
};
function stopXY(rid,name){
  const p=GEO[name];let cx=X(p[0]),cy=Y(p[1]);
  const nz=(NUDGE[rid]||{})[name];
  if(nz){cx+=nz[0]*VB.W;cy+=nz[1]*VB.W;}
  return [cx,cy];
}

/* =================== RENDER MAP =================== */
function openMap(rid,fromDetail){
  curRoute=rid;
  const route=getRoute(rid);
  document.getElementById('mapTitle').textContent=route.title;
  document.getElementById('mapSub').textContent=route.sub+' · Ionische Zee';
  document.getElementById('legend').classList.toggle('show', rid==="all");
  useLeaflet = isOnline();
  document.getElementById('leafmap').style.display = useLeaflet ? 'block':'none';
  document.getElementById('chart').style.display = useLeaflet ? 'none':'block';
  document.getElementById('hint').style.display = useLeaflet ? 'none':'block';
  updateNetUI();
  if(useLeaflet){
    renderLeafletRoute(rid);
    swap('map',fromDetail?'back':false);
    return;
  }
  setupViewBox(route);
  const svg=document.getElementById('chart');
  svg.setAttribute('viewBox',`0 0 ${VB.W} ${VB.H}`);
  let s='';
  // landmassa's
  for(const k in LAND){
    s+=`<path class="island-sh" d="${path(LAND[k])}" transform="translate(3,5)"/>`;
  }
  for(const k in LAND){
    s+=`<path class="island" d="${path(LAND[k])}"/>`;
  }
  // zeenamen
  SEA_LABELS.forEach(l=>{
    if(l.lon>VB.lon0&&l.lon<VB.lon1&&l.lat>VB.lat0&&l.lat<VB.lat1)
      s+=`<text class="seaname" x="${X(l.lon)}" y="${Y(l.lat)}">${l.t}</text>`;
  });
  // routelijn (met nudges) — niet tonen in overzicht/ankermodus
  if(rid!=="all"){
    let d=route.stops.map((st,i)=>{const c=stopXY(rid,st.name);return (i?'L':'M')+c[0].toFixed(1)+' '+c[1].toFixed(1);}).join(' ');
    s+=`<path class="leg" d="${d}"/>`;
  }
  // markers — schaal t.o.v. viewbox
  const R=VB.W*0.022, F=VB.W*0.024, LF=VB.W*0.02;
  route.stops.forEach((st,i)=>{
    const c=stopXY(rid,st.name), cx=c[0], cy=c[1];
    const right = cx < VB.W*0.72;
    const lx = right ? cx+R+LF*0.5 : cx-R-LF*0.5;
    const anc = right ? 'start':'end';
    var mkFill='var(--amber)', numCol='var(--ink)';
    if(st.kind==="note"){ mkFill='#e0479e'; numCol='#ffffff'; }
    else if(st.kind==="anchor"){ mkFill='#3fae6e'; numCol='#ffffff'; }
    s+=`<g class="g-stop" onclick="openDetail('${rid}',${i})">
      <circle class="mk-hit" cx="${cx}" cy="${cy}" r="${R*1.9}"/>
      <text class="mk-lbl" x="${lx}" y="${cy}" text-anchor="${anc}" dominant-baseline="central"
        style="font-size:${LF}px">${st.name}</text>
      <circle class="mk" cx="${cx}" cy="${cy}" r="${R}" style="fill:${mkFill}"/>
      <text class="mk-num" x="${cx}" y="${cy}" style="font-size:${F}px;fill:${numCol}">${st.n}</text>
    </g>`;
  });
  svg.innerHTML=s;
  const hint=document.getElementById('hint');
  hint.style.opacity='1';
  clearTimeout(window._ht);window._ht=setTimeout(()=>hint.style.opacity='0',2600);
  swap('map',fromDetail?'back':false);
}

/* =================== DETAIL =================== */
function openDetail(rid,idx){
  curRoute=rid;curStopIdx=idx;
  const st=getRoute(rid).stops[idx];
  document.getElementById('dDay').textContent=st.day;
  document.getElementById('dNum').textContent=st.n;
  document.getElementById('dTitle').textContent=st.label;
  document.getElementById('dDesc').textContent=st.desc;
  const route=getRoute(rid);
  document.getElementById('prevBtn').disabled=idx<=0;
  document.getElementById('nextBtn').disabled=idx>=route.stops.length-1;
  document.getElementById('detail').querySelector('.d-body').scrollTop=0;
  swap('detail');
}
function step(d){
  const route=getRoute(curRoute);
  const ni=curStopIdx+d;
  if(ni>=0&&ni<route.stops.length) openDetail(curRoute,ni);
}

/* =================== NAV =================== */
const screens=['home','map','detail'];
function swap(to,back){
  screens.forEach(id=>{
    const el=document.getElementById(id);
    if(id===to){el.classList.remove('hidden','back');}
    else{el.classList.add('hidden');if(back)el.classList.add('back');else el.classList.remove('back');}
  });
}
function showHome(){swap('home',true);}

/* iOS install-hint: alleen op iPhone/iPad in Safari, niet als al geïnstalleerd */
function dismissTip(){ var t=document.getElementById('iosTip'); if(t) t.classList.remove('show'); try{localStorage.setItem('{{STORAGE_KEY}}-tip','1');}catch(e){} }
(function(){
  var ua=navigator.userAgent||'';
  var iOS=/iPad|iPhone|iPod/.test(ua) || (navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  var standalone=('standalone' in navigator)&&navigator.standalone;
  var seen=false; try{seen=localStorage.getItem('{{STORAGE_KEY}}-tip')==='1';}catch(e){}
  if(iOS && !standalone && !seen){
    setTimeout(function(){var t=document.getElementById('iosTip'); if(t) t.classList.add('show');},900);
  }
})();


/* =================== LEAFLET (online) =================== */
var Lmap=null, Llayers={}, Lmarkers=[], curLayerMode='street', useLeaflet=false;
var savedView={};
function saveView(){ if(Lmap && curRoute){ var c=Lmap.getCenter(); savedView[curRoute]={center:[c.lat,c.lng],zoom:Lmap.getZoom()}; } }

function isOnline(){ return navigator.onLine; }

function updateNetUI(){
  var dot=document.getElementById('netDot'),txt=document.getElementById('netTxt');
  if(useLeaflet){ dot.classList.remove('off'); txt.textContent='Online · echte kaart';
    document.getElementById('mapCtrl').style.display='flex'; }
  else { dot.classList.add('off'); txt.textContent='Offline · getekende kaart';
    document.getElementById('mapCtrl').style.display='none'; }
}

function ensureLeaflet(){
  if(Lmap) return;
  Lmap=L.map('leafmap',{zoomControl:true,attributionControl:true});
  Llayers.street=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:18, attribution:'© OpenStreetMap'});
  Llayers.sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
    maxZoom:18, attribution:'Tiles © Esri'});
  // Zeekaart-onderlaag: Esri Ocean Base (reliëf/land), + plaatsnamen
  Locean=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',{
    maxNativeZoom:13, maxZoom:18, attribution:'Tiles © Esri — GEBCO, NOAA, Nat Geo'});
  Loceanref=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}',{
    maxNativeZoom:13, maxZoom:18, attribution:''});
  // EMODnet Bathymetry: diepte-kleuren (DTM) en dieptelijnen — Europese zeeën
  Lemodnet=L.tileLayer.wms('https://ows.emodnet-bathymetry.eu/wms',{
    layers:'emodnet:mean_multicolour', format:'image/png', transparent:true,
    version:'1.3.0', maxZoom:18, opacity:0.85, attribution:'Bathymetrie © EMODnet'});
  Lcontours=L.tileLayer.wms('https://ows.emodnet-bathymetry.eu/wms',{
    layers:'emodnet:contours', format:'image/png', transparent:true,
    version:'1.3.0', maxZoom:18, opacity:0.9, attribution:''});
  // OpenSeaMap = betonning, lichten, havens
  Lseamark=L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',{
    maxZoom:18, attribution:'© OpenSeaMap', opacity:1});
  applyLayer();
}

var Lseamark=null, Locean=null, Loceanref=null, Lemodnet=null, Lcontours=null;
function applyLayer(){
  // alle lagen eraf
  var all=[Llayers.street,Llayers.sat,Locean,Loceanref,Lemodnet,Lcontours,Lseamark];
  all.forEach(function(L0){ if(L0 && Lmap.hasLayer(L0)) Lmap.removeLayer(L0); });
  if(curLayerMode==='sat'){
    Llayers.sat.addTo(Lmap);
  } else if(curLayerMode==='sea'){
    // echte zeekaart: reliëf-onderlaag + EMODnet dieptekleuren + dieptelijnen + plaatsnamen + nautische symbolen
    Locean.addTo(Lmap);
    Lemodnet.addTo(Lmap);
    Lcontours.addTo(Lmap);
    Loceanref.addTo(Lmap);
    if(Lseamark) Lseamark.addTo(Lmap);
  } else {
    Llayers.street.addTo(Lmap);
  }
}

function setLayer(mode){
  curLayerMode=mode;
  document.getElementById('btnStreet').classList.toggle('on',mode==='street');
  document.getElementById('btnSat').classList.toggle('on',mode==='sat');
  document.getElementById('btnSea').classList.toggle('on',mode==='sea');
  var dl=document.getElementById('depthLeg'); if(dl) dl.classList.toggle('show',mode==='sea');
  if(!Lmap) return;
  applyLayer();
}

var Lme=null, Lacc=null;
function locateMe(){
  if(!useLeaflet || !Lmap){
    alert('Mijn locatie werkt alleen op de online kaart (met internet).');
    return;
  }
  if(!navigator.geolocation){
    alert('Je toestel of browser ondersteunt locatiebepaling niet.');
    return;
  }
  var btn=document.getElementById('btnLoc');
  btn.style.opacity='0.5'; btn.disabled=true;
  navigator.geolocation.getCurrentPosition(function(pos){
    btn.style.opacity=''; btn.disabled=false;
    var lat=pos.coords.latitude, lng=pos.coords.longitude, acc=pos.coords.accuracy||50;
    if(Lme){ Lmap.removeLayer(Lme); } if(Lacc){ Lmap.removeLayer(Lacc); }
    Lacc=L.circle([lat,lng],{radius:acc,color:'#2b8aef',weight:1,fillColor:'#2b8aef',fillOpacity:0.15});
    Lacc.addTo(Lmap); Lmarkers.push(Lacc);
    var dot=L.divIcon({className:'',html:'<div class="me-pin"></div>',iconSize:[22,22],iconAnchor:[11,11]});
    Lme=L.marker([lat,lng],{icon:dot}); Lme.bindTooltip('Hier ben jij',{direction:'top',offset:[0,-8]});
    Lme.addTo(Lmap); Lmarkers.push(Lme);
    Lmap.flyTo([lat,lng], 14, {duration:1.2});
  }, function(err){
    btn.style.opacity=''; btn.disabled=false;
    var msg='Kon je locatie niet bepalen.';
    if(err.code===1) msg='Locatietoegang is geweigerd. Sta locatie toe in je browserinstellingen om deze knop te gebruiken.';
    else if(err.code===3) msg='Het duurde te lang om je locatie te bepalen. Probeer het buiten of met beter signaal opnieuw.';
    alert(msg);
  }, {enableHighAccuracy:true, timeout:10000, maximumAge:30000});
}

function renderLeafletRoute(rid){
  var route=getRoute(rid);
  ensureLeaflet();
  // clear old markers/lines
  Lmarkers.forEach(function(m){Lmap.removeLayer(m);}); Lmarkers=[];
  var latlngs=route.stops.map(function(s){var p=GEO[s.name];return [p[1],p[0]];});
  var bounds;
  var noLine = (rid==="all");
  if(!noLine){
    var line=L.polyline(latlngs,{color:'#f2a104',weight:3,dashArray:'2 8',opacity:.9});
    line.addTo(Lmap); Lmarkers.push(line);
    bounds=line.getBounds();
  } else {
    bounds=L.latLngBounds(latlngs);
  }
  // markers
  route.stops.forEach(function(st,i){
    var p=GEO[st.name];
    var pinClass='num-pin';
    if(st.kind==="note") pinClass='num-pin note-pin';
    else if(st.kind==="anchor") pinClass='num-pin anchor-pin';
    var icon=L.divIcon({className:'',html:'<div class="'+pinClass+'">'+st.n+'</div>',
      iconSize:[30,30],iconAnchor:[15,15]});
    var mk=L.marker([p[1],p[0]],{icon:icon});
    mk.on('click',function(){ saveView(); openDetail(rid,i); });
    mk.bindTooltip(st.name,{direction:'right',offset:[16,0],className:'lbl-tip'});
    mk.addTo(Lmap); Lmarkers.push(mk);
  });
  var saved = savedView[rid];
  setTimeout(function(){
    Lmap.invalidateSize();
    if(saved){ Lmap.setView(saved.center, saved.zoom, {animate:false}); }
    else { Lmap.fitBounds(bounds.pad(0.25)); }
  },60);
}

window.addEventListener('online', function(){ if(document.getElementById('map') && !document.getElementById('map').classList.contains('hidden')) openMap(curRoute,true); });
window.addEventListener('offline', function(){ if(document.getElementById('map') && !document.getElementById('map').classList.contains('hidden')) openMap(curRoute,true); });
/* prevent double-tap zoom */
document.addEventListener('dblclick',e=>e.preventDefault(),{passive:false});
