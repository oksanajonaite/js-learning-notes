// 01 · Tekstas (string) ir template literals
// Paleisti: node 01-ivadas/03-tekstas.js

const name = "Ana";

// --- Trys būdai užrašyti tekstą ---
const a = "dvigubos kabutės";
const b = 'viengubos kabutės';
const c = `atbulinės kabutės`;   // backticks — template literal

// --- Template literal: ${} įstato reikšmę ---
console.log(`Labas, ${name}! ${2 + 3}`); // Labas, Ana! 5

// Viduje gali būti bet koks JS
console.log(`Kitais metais bus ${2026 + 1}`); // Kitais metais bus 2027

// Kelios eilutės BE \n
console.log(`Pirma eilutė
Antra eilutė`);

// --- Senas būdas: sujungimas su + ---
console.log("Labas, " + name);   // Labas, Ana

// ⚠️ + su skaičiais po teksto yra spąstai:
console.log("Suma: " + 2 + 3);   // Suma: 23  ← 2 priklijuojamas, tada 3
console.log("Suma: " + (2 + 3)); // Suma: 5   ✅ skliaustai

// --- Simbolio pasiekimas ---
console.log(name[0]);            // A ← indeksai nuo 0
console.log(name.length);        // 3
console.log(name[name.length - 1]); // a ← paskutinis

// --- Dažniausi metodai ---
console.log(name.toUpperCase());      // ANA
console.log("  tarpai  ".trim());     // "tarpai"
console.log("a-b-c".split("-"));      // [ 'a', 'b', 'c' ]
console.log("labas".includes("ab"));  // true
