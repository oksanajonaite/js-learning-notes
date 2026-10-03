// 08 · Teksto ilgis ir simbolių pasiekimas
// Paleisti: node 08-strings/03-ilgis-indeksai.js

"use strict";

// --- Ilgis simboliais ---
let str = "My name";
console.log(str.length);   // 7 ← tarpas irgi skaičiuojamas!

// --- Kiekvienas simbolis IR TARPAS turi indeksą ---
//   J  a  v  a  s  c  r  i  p  t
//   0  1  2  3  4  5  6  7  8  9   ← index (nuo 0)
//   1  2  3  4  5  6  7  8  9 10   ← position (nuo 1)
//
// 5-a pozicija = 4-as indeksas!

const js = "Javascript";
console.log(js[4]);          // s ← 5-as simbolis
console.log(js.charAt(4));   // s ← tas pats

// --- Pirmas ir paskutinis simbolis ---
let hello = `Hello`;
console.log(hello[0]);                  // H
console.log(hello.charAt(0));           // H
console.log(hello[hello.length - 1]);   // o ← paskutinis
console.log(hello.at(-1));              // o ← naujesnis būdas

let text = "HELLO WORLD";
let letter = text.charAt(1);            // E
let last = text.charAt(text.length - 1); // D
console.log(letter, last);

// --- ⚠️ [] vs charAt(): kai indekso NĖRA ---
console.log(hello[99]);          // undefined
console.log(hello.charAt(99));   // "" ← tuščias tekstas, ne undefined!
console.log(typeof hello.charAt(99)); // string

// --- Perėjimas per visus simbolius ---
for (const simbolis of "JS") {
  console.log(simbolis);   // J / S
}

for (let i = 0; i < hello.length; i++) {
  process.stdout.write(hello[i] + ".");   // H.e.l.l.o.
}
console.log("");
