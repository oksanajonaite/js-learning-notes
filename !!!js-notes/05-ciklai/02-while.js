// 05 · while ciklas
// Paleisti: node 05-ciklai/02-while.js
//
// Naudojamas, kai NEŽINAI, kiek kartų reikės suktis.
// Sąlyga tikrinama PRIEŠ kiekvieną kartą.

let i = 1;
while (i <= 5) {
  console.log(i);   // 1 2 3 4 5
  i++;              // ⚠️ pamiršus bus BEGALINIS ciklas
}

// --- Jei sąlyga iškart false, ciklas neįvyksta nė karto ---
let j = 10;
while (j < 5) {
  console.log("niekada nepasirodys");
}
console.log("ciklas praleistas");

// --- Tipinis naudojimas: kol vartotojas įveda tinkamą reikšmę ---
// Naršyklėje tai būtų prompt(). Čia imituojam su iš anksto paruoštu sąrašu.
const ivestys = [5, 12, 3, -1];   // -1 = vartotojas baigė
let index = 0;
let sum = 0;
let number = ivestys[index++];

while (number >= 0) {             // kol įvedamas neneigiamas skaičius
  sum += number;
  number = ivestys[index++];
}
console.log("Suma:", sum); // Suma: 20

// --- Kai nežinom, kiek žingsnių: kas kiek metų suma padvigubės ---
let pinigai = 1000;
let metai = 0;
while (pinigai < 2000) {
  pinigai *= 1.05;   // 5% per metus
  metai++;
}
console.log(`Padvigubės po ${metai} metų`); // Padvigubės po 15 metų
