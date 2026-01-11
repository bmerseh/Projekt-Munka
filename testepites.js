var kerdesSzam = 0;
var pont = 0;
var kivalasztott = 0;
var ellenorizve = false;

var kerdesek = [
  "Hány kép található összesen a weboldalon?",
  "Ki nyerte a legtöbb Mr. Olympia címet?",
  "Hol történt Kathi Béla balesete és halála?",
  "Melyik magyar testépítő film készült Bódi László rendezésében?",
  "Melyik tápanyag szükséges a test megfelelő működéséhez?",
  "Melyik a legjobb fehérjeforrás?",
  "Mi a testépítés egyik alapelve?",
  "Miért fontos az ideg–izom kapcsolat?",
  "Melyik NEM ajánlott edzés közben?",
  "Mi segíti leginkább az izom regenerációját?",
  "Hol végzik leggyakrabban a testépítő edzéseket?",
  "Melyik NEM tekinthető egészséges fehérjeforrásnak?"
];

var valaszok = [
  ["10 db", "15 db", "20 db"],
  ["Arnold Schwarzenegger", "Lee Haney és Ronnie Coleman", "Dorian Yates"],
  ["Magyarországon", "Olaszországban", "Cipruson"],
  ["Acélizom", "Maradj éhen", "Testépítés – feketén-fehéren"],
  ["Zsír", "Szénhidrát", "Só"],
  ["Csirkehús", "Tojás", "Bogarok"],
  ["Minél nagyobb súly", "Tudatos izommunka", "Rohanás"],
  ["Mert növeli az erőt", "Segíti az izom kontrollját", "Csökkenti az izomtömeget"],
  ["Megfelelő zene", "Telefonozás", "Fókusz"],
  ["Alvás és fehérjebevitel", "Kihagyott étkezés", "Túl sok edzés"],
  ["Otthon", "Konditeremben", "Utcán"],
  ["Tojás", "Hal", "Cukorka"]
];

var helyes = [
  3,
  2, 
  3, 
  3, 
  2, 
  1, 
  2, 
  2,  
  2,  
  1, 
  2,  
  3  
];

function startQuiz() {
  document.getElementById("quiz").style.display = "block";
  kiir();
}

function kiir() {
  document.getElementById("kerdes").innerHTML = kerdesek[kerdesSzam];
  document.getElementById("v1").innerHTML = valaszok[kerdesSzam][0];
  document.getElementById("v2").innerHTML = valaszok[kerdesSzam][1];
  document.getElementById("v3").innerHTML = valaszok[kerdesSzam][2];

  document.getElementById("visszajelzes").innerHTML = "";
  document.getElementById("pontszam").innerHTML = "Pontszám: " + pont;

  kivalasztott = 0;
  ellenorizve = false;
}

function valaszt(szam) {
  kivalasztott = szam;
}

function ellenoriz() {
  if (ellenorizve) return;

  if (kivalasztott == 0) {
    document.getElementById("visszajelzes").innerHTML =
      "Előbb válassz egy lehetőséget!";
    return;
  }

  if (kivalasztott == helyes[kerdesSzam]) {
    pont++;
    document.getElementById("visszajelzes").innerHTML = "Helyes válasz!";
  } else {
    document.getElementById("visszajelzes").innerHTML = "Helytelen válasz!";
  }

  ellenorizve = true;
}

function kovetkezo() {
  if (!ellenorizve) {
    document.getElementById("visszajelzes").innerHTML =
      "Előbb ellenőrizd a választ!";
    return;
  }

  kerdesSzam++;

  if (kerdesSzam < kerdesek.length) {
    kiir();
  } else {
    document.getElementById("kerdes").innerHTML = "Vége a kvíznek!";
    document.getElementById("visszajelzes").innerHTML =
      "Végső pontszám: " + pont + " / " + kerdesek.length;
  }
}