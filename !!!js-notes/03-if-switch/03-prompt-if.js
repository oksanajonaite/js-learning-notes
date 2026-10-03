// 03 · prompt + if: dažniausi spąstai
// Paleisti: node 03-if-switch/03-prompt-if.js
//
// ⚠️ prompt veikia tik naršyklėje. Čia reikšmė įrašyta ranka,
// bet ji tokia pat, kokią grąžintų prompt — STRING.

// Naršyklėje būtų: let year = prompt("Kada išleistas ES2015?");
let year = "2015";   // ← STRING, net jei įvedei skaičių

console.log(typeof year);          // string

console.log(year == 2015);         // true  ← == pakeičia tipą
console.log(year === 2015);        // false ⚠️ skirtingi tipai
console.log(Number(year) === 2015); // true  ✅ taip teisingai

// --- Todėl if su prompt reikšme rašomas taip: ---
if (Number(year) === 2015) {
  console.log("Teisingai! ✅");
} else {
  console.log("Neteisingai");
}

// --- Dar vieni spąstai: Cancel grąžina null ---
let atsakymas = null;   // <- tiek pat, kiek prompt() po Cancel

if (atsakymas === null) {
  console.log("Vartotojas atšaukė");
} else if (atsakymas === "") {
  console.log("Vartotojas nieko neįvedė");   // Cancel ≠ tuščias laukas!
}

// --- Ir tuščias tekstas yra falsy ---
let ivestis = "";
if (ivestis) console.log("kažkas įvesta");
else console.log("tuščia ⚠️ nors vartotojas gal spaudė OK");
