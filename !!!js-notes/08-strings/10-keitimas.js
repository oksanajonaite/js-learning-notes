// 08 · Teksto keitimas: toUpperCase, toLowerCase, trim ir kt.
// Paleisti: node 08-strings/10-keitimas.js
//
// Visi grąžina NAUJĄ tekstą — originalas nekinta.

const t = "Labas Rytas";

// --- Raidžių dydis ---
console.log(t.toUpperCase());   // LABAS RYTAS
console.log(t.toLowerCase());   // labas rytas
console.log(t);                 // Labas Rytas ← nepakitęs ✅

// Dažniausias panaudojimas — palyginimas, kai dydis nesvarbu:
const ivestis = "ANA";
console.log(ivestis.toLowerCase() === "ana");   // true ✅

// --- trim() nukerpa tarpus iš KRAŠTŲ ---
console.log("   labas   ".trim() + "|");        // labas|
console.log("   labas   ".trimStart() + "|");   // labas   |
console.log("   labas   ".trimEnd() + "|");     // "   labas|"

// ⚠️ trim() NEPAŠALINA tarpų viduryje:
console.log("a   b".trim());   // a   b

// Dažniausias panaudojimas — vartotojo įvestis:
const vardas = "  Ana  ";
console.log(`|${vardas.trim()}|`);   // |Ana|

// --- padStart() / padEnd() — papildo iki nurodyto ilgio ---
console.log("5".padStart(2, "0"));      // 05 ← patogu datoms/laikui
console.log("7".padStart(3, "0"));      // 007
console.log("Ana".padEnd(10, ".") + "|"); // Ana.......|

// Praktika: lentelė
const prekes = [["Duona", 1.2], ["Pienas", 0.9]];
for (const [pav, kaina] of prekes) {
  console.log(pav.padEnd(10, " ") + String(kaina).padStart(6, " ") + " €");
}

// --- repeat() ---
console.log("=".repeat(30));

// --- at() — simbolis pagal indeksą, moka ir neigiamus ---
console.log(t.at(0));    // L
console.log(t.at(-1));   // s ← paskutinis

// --- Grandinėlė (chaining): metodai rašomi vienas po kito ---
const netvarkinga = "   LABAS, ANA!   ";
console.log(netvarkinga.trim().toLowerCase().replace("ana", "Ana"));
// labas, Ana!
