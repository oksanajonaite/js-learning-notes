// 07 · Timestamp — milisekundės nuo 1970-01-01
// Paleisti: node 07-datos/02-timestamp.js
//
// TIMESTAMP = sveikasis skaičius, nurodantis, kiek MILISEKUNDŽIŲ praėjo
// nuo 1970-01-01, 00:00:00 UTC. (1 sekundė = 1000 ms)
// Datos PRIEŠ 1970-01-01 turi NEIGIAMĄ timestamp.

// --- 0 reiškia 01.01.1970 UTC+0 ---
let Jan01_1970 = new Date(0);
console.log(Jan01_1970.toISOString()); // 1970-01-01T00:00:00.000Z

// --- Pridedam 24 valandas → gaunam 02.01.1970 ---
let Jan02_1970 = new Date(24 * 3600 * 1000);   // 24 val × 3600 sek × 1000 ms
console.log(Jan02_1970.toISOString()); // 1970-01-02T00:00:00.000Z

// --- Neigiamas timestamp = data prieš 1970 ---
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969.toISOString()); // 1969-12-31T00:00:00.000Z

// --- Datą paversti į timestamp: getTime() ---
let today = new Date();
let timeSt = today.getTime();
console.log(timeSt);          // pvz. 1790000000000 (kas kartą kitoks)

let date = new Date("2018-03-15");
console.log(date.getTime());  // 1521072000000

// --- Dabarties timestamp be Date objekto: Date.now() ---
console.log(Date.now());      // tas pats, kas new Date().getTime(), tik greičiau

// --- Kam timestamp naudingas? ---

// 1. Skaičiavimams — datų atimti tiesiogiai negalima, o skaičius galima
const pradzia = new Date("2026-01-01");
const pabaiga = new Date("2026-12-31");
const skirtumasMs = pabaiga.getTime() - pradzia.getTime();
console.log(skirtumasMs / (1000 * 60 * 60 * 24), "dienų"); // 364 dienų

// 2. Kodo greičiui matuoti
const start = Date.now();
let s = 0;
for (let i = 0; i < 1_000_000; i++) s += i;
console.log(`Ciklas užtruko ${Date.now() - start} ms`);

// --- Naudingi perskaičiavimai ---
// 1 sekundė =           1 000 ms
// 1 minutė  =          60 000 ms
// 1 valanda =       3 600 000 ms
// 1 diena   =      86 400 000 ms
console.log(1000 * 60 * 60 * 24); // 86400000
