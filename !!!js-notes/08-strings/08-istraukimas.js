// 08 · Teksto dalies ištraukimas: substring, slice, substr
// Paleisti: node 08-strings/08-istraukimas.js
//
// Visi trys grąžina NAUJĄ tekstą, senojo nekeičia.

// --- substring(indexStart, indexEnd) ---
const message = "JavaScript is fun.";
let result = message.substring(0, 10);   // nuo 0 iki 10 (10-as NEĮEINA)
console.log(result);   // JavaScript

// --- slice(beginIndex, endIndex) ---
const str = "JavaScript is a very absurd programming language.";
console.log(str.slice(28));      // programming language.  ← nuo 28 iki galo
console.log(str.slice(4, 15));   // Script is a            ← nuo 4 iki 15

// --- ⚠️ SKIRTUMAS: slice supranta NEIGIAMUS indeksus, substring — ne ---
const t = "JavaScript";
console.log(t.slice(-6));        // Script ← 6 paskutiniai simboliai
console.log(t.substring(-6));    // JavaScript ⚠️ neigiamas virsta nuliu

// --- ⚠️ SKIRTUMAS: kai start > end ---
console.log(t.slice(5, 2));      // "" ← tuščias tekstas
console.log(t.substring(5, 2));  // vaS ⚠️ substring SUKEIČIA argumentus vietomis

// 💡 Praktikoje beveik visada rinkis slice() — jis elgiasi taip pat,
//    kaip masyvo slice(), ir moka neigiamus indeksus.

// --- substr(start, length) — antras argumentas yra ILGIS, ne indeksas ---
console.log(t.substr(4, 6));     // Script ← nuo 4 imk 6 simbolius
// ⚠️ substr yra pasenęs (deprecated). Naujame kode nenaudok.

// --- Praktika: failo plėtinys ---
const failas = "dokumentas.pdf";
console.log(failas.slice(failas.lastIndexOf(".") + 1));   // pdf
console.log(failas.slice(0, failas.lastIndexOf(".")));    // dokumentas

// --- Praktika: sutrumpinti ilgą tekstą ---
function sutrumpinti(tekstas, ilgis) {
  return tekstas.length > ilgis ? tekstas.slice(0, ilgis) + "..." : tekstas;
}
console.log(sutrumpinti("Labai ilgas aprašymas apie viską", 10)); // Labai ilga...
console.log(sutrumpinti("Trumpas", 10));                          // Trumpas

// Skirtumai išsamiai:
// https://thispointer.com/difference-between-slice-and-substring-in-javascript/
