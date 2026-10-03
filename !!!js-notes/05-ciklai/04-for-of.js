// 05 · for...of — per masyvo REIKŠMES
// Paleisti: node 05-ciklai/04-for-of.js

const vaisiai = ["Obuolys", "Bananas", "Kriaušė"];

for (const vaisius of vaisiai) {
  console.log(vaisius);   // Obuolys, Bananas, Kriaušė
}

// --- Palyginimas su klasikiniu for ---
for (let i = 0; i < vaisiai.length; i++) {
  console.log(vaisiai[i]);   // tas pats, tik ilgiau ir su indeksu
}

// 💡 for...of naudok, kai indeksas NEREIKALINGAS — kodas švaresnis.

// --- Jei vis dėlto reikia indekso ---
for (const [i, vaisius] of vaisiai.entries()) {
  console.log(i, vaisius);   // 0 Obuolys / 1 Bananas / 2 Kriaušė
}

// --- Veikia ir su tekstu ---
for (const raide of "JS") {
  console.log(raide);   // J / S
}

// --- ⚠️ Su objektu NEVEIKIA ---
const auto = { marke: "Audi", metai: 2022 };
try {
  for (const x of auto) console.log(x);
} catch (e) {
  console.log("❌ " + e.message); // auto is not iterable
}
// Objektams naudok for...in (žr. 05-for-in.js)

// --- const cikle veikia, nes kiekvienam kartui kuriamas NAUJAS kintamasis ---
for (const v of vaisiai) {
  // v čia kaskart naujas, todėl const klaidos nedaro
}
