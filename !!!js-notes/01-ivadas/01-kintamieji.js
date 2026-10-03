// 01 · Kintamieji: let, const, var
// Paleisti: node 01-ivadas/01-kintamieji.js

"use strict"; // 1-a failo eilutė: nutylėtos klaidos tampa tikromis klaidomis

// --- Kurį rinktis ---
const MAX = 10;   // pagal nutylėjimą. Reikšmės keisti NEGALIMA
let count = 0;    // kai reikšmė tikrai keisis
var senas = 1;    // ❌ nenaudoti, liko iš senojo JS

count = count + 1;
count += 5;
console.log(count); // 6

// --- const negalima priskirti iš naujo ---
try {
  MAX = 20;
} catch (e) {
  console.log(e.message); // Assignment to constant variable.
}

// ⚠️ BET const objektą/masyvą keisti VIDUJE galima:
const sarasas = [1, 2];
sarasas.push(3);
console.log(sarasas); // [ 1, 2, 3 ] ← const saugo NUORODĄ, ne turinį

// --- Scope: kur kintamasis matomas ---
if (true) {
  let a = 1;   // matomas tik šiame {} bloke
  var b = 2;   // "išlenda" iš bloko (function scope)
}

try {
  console.log(a);
} catch (e) {
  console.log(e.message); // a is not defined
}
console.log(b); // 2 ← var neturi block scope

// --- Hoisting: naudojimas prieš deklaraciją ---
console.log(typeof senasHoisted); // undefined ← var pakeliamas, bet be reikšmės
var senasHoisted = 5;

try {
  console.log(naujas);
  let naujas = 5;
} catch (e) {
  console.log(e.message); // Cannot access 'naujas' before initialization
}

// --- Vardai ---
// ✅ raidės, skaičiai, $ ir _  ·  camelCase  ·  konstantos UPPER_CASE
// ❌ negali prasidėti skaičiumi, negali turėti brūkšnelio
let vartotojoVardas = "Ana";
let $elementas = "x";
let _privatus = "y";
console.log(vartotojoVardas, $elementas, _privatus);

// ⚠️ case sensitive: a ir A yra SKIRTINGI kintamieji
let vardas = "mažoji";
let Vardas = "didžioji";
console.log(vardas, Vardas); // mažoji didžioji
