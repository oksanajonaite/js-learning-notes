// 08 · String yra nekeičiami (immutable)
// Paleisti: node 08-strings/04-immutable.js
//
// Tiesiogiai keisti teksto NEGALIME. Reikia kurti NAUJĄ tekstą.

let str = "Hi";

// --- ❌ Taip neveikia ---
str[0] = "h";          // "use strict" režime tai net sukeltų klaidą
console.log(str[0]);   // H ⚠️ nepasikeitė, bet ir klaidos nebuvo

// --- ✅ Reikia kurti naują tekstą, naudoti sujungimą ---
str = "h" + str[1];    // sukuriamas NAUJAS tekstas
console.log(str);      // hi

// --- Todėl VISI string metodai grąžina NAUJĄ tekstą ---
const zodis = "labas";
console.log(zodis.toUpperCase()); // LABAS ← naujas tekstas
console.log(zodis);               // labas ← originalas nepakitęs

// ⚠️ Pamiršus priskyrimą rezultatas dingsta:
zodis.toUpperCase();
console.log(zodis);               // labas ⚠️ vis dar mažosiomis

const didziosiomis = zodis.toUpperCase();   // ✅ išsaugom
console.log(didziosiomis);                  // LABAS

// --- Palyginimas su masyvais ---
const masyvas = ["a", "b"];
masyvas[0] = "z";        // ✅ masyvą keisti VIDUJE galima
console.log(masyvas);    // [ 'z', 'b' ]

const tekstas = "ab";
// tekstas[0] = "z";     // ❌ teksto — ne

// 💡 String elgiasi kaip number: gauni naują reikšmę, o ne pakeistą seną.
let x = 5;
x + 1;            // 6, bet x nepasikeitė
console.log(x);   // 5

// --- Kaip vis dėlto "pakeisti" simbolį ---
const t = "kavos";
console.log("s" + t.slice(1));                    // savos
console.log(t.slice(0, 2) + "r" + t.slice(3));    // karos ← pakeitėm 3-ią simbolį (v → r)
console.log(t.replace("k", "s"));                 // savos ← paprasčiausia
