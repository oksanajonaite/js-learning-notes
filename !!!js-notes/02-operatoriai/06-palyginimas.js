// 02 · Palyginimo operatoriai ir ternary
// Paleisti: node 02-operatoriai/06-palyginimas.js

// --- == keičia tipą, === netikrina tik reikšmės, bet ir TIPO ---
console.log("30" == 30);    // true  ⚠️ tipas pakeičiamas
console.log("30" === 30);   // false ✅
console.log("30" != 30);    // false
console.log("30" !== 30);   // true  ✅

// 💡 Visada naudok === ir !==

// --- Kiti palyginimai ---
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 4);    // false

// --- ⚠️ == spąstai, kurių === neturi ---
console.log(0 == "");          // true  ⚠️
console.log(0 == false);       // true  ⚠️
console.log(null == undefined); // true  ⚠️
console.log(0 === "");         // false ✅
console.log(null === undefined); // false ✅

// --- Tekstai lyginami pagal simbolių kodus ---
console.log("a" < "b");        // true
console.log("Z" < "a");        // true ⚠️ didžiosios raidės "mažesnės"
console.log("2" > "10");       // true ⚠️ kaip TEKSTAS, ne skaičius

// --- Ternary: trumpas if/else ---
// sąlyga ? jei_true : jei_false
const age = 16;
const voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable); // Too young

// Tas pats su if:
let voteable2;
if (age < 18) voteable2 = "Too young";
else voteable2 = "Old enough";
console.log(voteable2); // Too young
