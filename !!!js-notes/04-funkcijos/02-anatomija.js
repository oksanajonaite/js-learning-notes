// 04 · Funkcijos anatomija: parametrai, argumentai, return
// Paleisti: node 04-funkcijos/02-anatomija.js

//  raktažodis  vardas      parametrai   numatytoji reikšmė
function calculateBill(meal, taxRate = 0.05) {
  const total = meal * (1 + taxRate);   // kūnas
  return total;                         // grąžinama reikšmė
}

const myTotal = calculateBill(100, 0.13);  // iškvietimas su argumentais
console.log(myTotal);                      // 112.99999999999999 ⚠️ trupmenų netikslumas
console.log(myTotal.toFixed(2));           // "113.00" ← taip rodome vartotojui

console.log(calculateBill(100));           // 105 ← taxRate = 0.05 (numatytoji)

// | Sąvoka      | Kas tai                                                    |
// | Parametrai  | kintamieji APRAŠYME: (meal, taxRate) — ingredientų sąrašas |
// | Argumentai  | tikros reikšmės IŠKVIETIME: (100, 0.13) — tikri ingredientai|

// --- return NUTRAUKIA funkciją ---
function testas(x) {
  if (x < 0) return "neigiamas";   // toliau nebevykdoma
  console.log("šitas pasiekiamas tik kai x >= 0");
  return "teigiamas";
}
console.log(testas(-5)); // neigiamas
console.log(testas(5));  // (žinutė) + teigiamas

// --- Be return funkcija grąžina undefined ---
function beReturn(a, b) {
  const suma = a + b;   // apskaičiavom, bet negrąžinom
}
console.log(beReturn(2, 3)); // undefined ⚠️

// --- Trūkstami argumentai tampa undefined ---
function trys(a, b, c) {
  console.log(a, b, c);
}
trys(1);        // 1 undefined undefined
trys(1, 2, 3, 4); // 1 2 3 ← perteklinis 4 tiesiog ignoruojamas

// --- Kintamieji funkcijos viduje iš lauko NEMATOMI ---
function vidus() {
  const slaptas = "tik viduje";
  return slaptas;
}
console.log(vidus());
try {
  console.log(slaptas);
} catch (e) {
  console.log("❌ " + e.message); // slaptas is not defined
}
