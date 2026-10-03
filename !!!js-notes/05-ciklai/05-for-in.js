// 05 · for...in — per objekto RAKTUS
// Paleisti: node 05-ciklai/05-for-in.js

const auto = { marke: "Audi", spalva: "Juoda", metai: 2022 };

for (const key in auto) {
  console.log(key + ": " + auto[key]);
}
// marke: Audi
// spalva: Juoda
// metai: 2022

// ⚠️ auto[key], o NE auto.key —
//    auto.key ieškotų savybės, kurios pavadinimas tiesiog "key":
console.log(auto.key);    // undefined ⚠️
console.log(auto["key"]); // undefined
console.log(auto["marke"]); // Audi ✅

// --- for...in duoda tik RAKTUS ---
for (const key in auto) {
  console.log(key);   // marke, spalva, metai
}

// --- Šiuolaikinės alternatyvos ---
console.log(Object.keys(auto));    // [ 'marke', 'spalva', 'metai' ]
console.log(Object.values(auto));  // [ 'Audi', 'Juoda', 2022 ]
console.log(Object.entries(auto)); // [ ['marke','Audi'], ... ]

for (const [key, value] of Object.entries(auto)) {
  console.log(`${key} = ${value}`);   // aiškiau nei for...in
}

// --- ⚠️ Su masyvu for...in duoda INDEKSUS, ir dar kaip TEKSTĄ ---
const arr = ["a", "b"];
for (const i in arr) {
  console.log(i, typeof i);   // 0 string / 1 string ⚠️
}
// Masyvams naudok for...of

// 💡 OF yra REIKŠMĖS (masyvai), IN yra RAKTAI (objektai).
