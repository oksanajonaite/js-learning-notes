// 05 · do...while ciklas
// Paleisti: node 05-ciklai/03-do-while.js
//
// Kūnas vykdomas PIRMA, sąlyga tikrinama PO TO,
// todėl ciklas įvyksta BENT 1 KARTĄ.

let i = 1;
do {
  console.log(i);   // 1 2 3
  i++;
} while (i <= 3);

// --- Skirtumas nuo while: sąlyga iškart false ---
let j = 10;

while (j < 5) {
  console.log("while: nepasirodys");
}

do {
  console.log("do...while: pasirodė VIENĄ kartą ✅");
} while (j < 5);

// --- Tipinis naudojimas: pirma paklausti, tada tikrinti ---
// Naršyklėje: do { number = parseInt(prompt("Skaičius:")); } while (number >= 0);
const ivestys = [5, 12, -1];
let index = 0;
let sum = 0;
let number;

do {
  number = ivestys[index++];
  if (number >= 0) sum += number;
} while (number >= 0);

console.log("Suma:", sum); // Suma: 17

// 💡 Kaip atsiminti: do...while = "pirma padaryk, paskui klausk".
