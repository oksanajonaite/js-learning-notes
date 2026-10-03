// 03 · Ternary operatorius ? :
// Paleisti: node 03-if-switch/05-ternary.js
//
// Sintaksė:  sąlyga ? jei_true : jei_false

const age = 20;

// --- Trumpas if/else vienoje eilutėje ---
const status = age >= 18 ? "Suaugęs" : "Nepilnametis";
console.log(status); // Suaugęs

// Tas pats su if:
let status2;
if (age >= 18) status2 = "Suaugęs";
else status2 = "Nepilnametis";
console.log(status2); // Suaugęs

// --- Patogu template literal viduje ---
const kiekis = 1;
console.log(`Rasta ${kiekis} ${kiekis === 1 ? "elementas" : "elementai"}`);
// Rasta 1 elementas

// --- Patogu funkcijos return'e ---
const didesnis = (a, b) => (a > b ? a : b);
console.log(didesnis(5, 9)); // 9

// --- Galima grandinėti, BET skaitosi sunkiai ⚠️ ---
const pazymys = 8;
const ivertinimas = pazymys >= 9 ? "puiku" : pazymys >= 6 ? "gerai" : "silpnai";
console.log(ivertinimas); // gerai

// 💡 Jei ternary nebetelpa į eilutę arba turi daugiau nei vieną ?,
//    rašyk įprastą if/else — bus aiškiau.
