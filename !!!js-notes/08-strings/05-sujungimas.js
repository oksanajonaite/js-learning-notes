// 08 · Tekstų sujungimas: concat, +, template literal
// Paleisti: node 08-strings/05-sujungimas.js

// --- concat() sujungia du ar daugiau tekstų ---
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);
console.log(result);          // Hello world!

console.log("a".concat("b", "c", "d")); // abcd
console.log(text1);           // Hello ← originalas nepakitęs ✅

// --- + daro tą patį ir naudojamas daug dažniau ---
console.log(text1 + " " + text2);   // Hello world!

// --- Template literal — patogiausia, kai yra kintamųjų ---
const vardas = "Ana";
const amzius = 25;
console.log(`${vardas} yra ${amzius} metų`);       // Ana yra 25 metų
console.log(vardas + " yra " + amzius + " metų");  // tas pats, bet sunkiau skaitosi

// --- += kai tekstas renkamas ciklu ---
let sakinys = "";
for (const zodis of ["Šiandien", "gera", "diena"]) {
  sakinys += zodis + " ";
}
console.log(sakinys.trim());   // Šiandien gera diena

// --- ⚠️ + su skaičiais ---
console.log("Suma: " + 2 + 3);     // Suma: 23 ⚠️
console.log("Suma: " + (2 + 3));   // Suma: 5 ✅

// --- Masyvą sujungti patogiau su join() ---
console.log(["Šiandien", "gera", "diena"].join(" ")); // Šiandien gera diena

// --- repeat() — pakartoti tekstą ---
console.log("-".repeat(20));    // --------------------
console.log("ab".repeat(3));    // ababab
