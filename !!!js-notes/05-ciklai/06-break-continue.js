// 05 · break ir continue
// Paleisti: node 05-ciklai/06-break-continue.js

// --- break: NUTRAUKIA visą ciklą ---
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i);   // 0 1 2
}

console.log("---");

// --- continue: PRALEIDŽIA tik šį kartą, ciklas tęsiasi ---
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);   // 0 1 2 4
}

console.log("---");

// --- Praktika: break paieškoje, kai radom, ko ieškojom ---
const vardai = ["Ana", "Jonas", "Rūta", "Petras"];
for (const vardas of vardai) {
  if (vardas === "Rūta") {
    console.log("Radau! ✅");
    break;        // toliau ieškoti nebereikia
  }
  console.log("tikrinu:", vardas);
}

console.log("---");

// --- Praktika: continue netinkamiems duomenims praleisti ---
const skaiciai = [5, -2, 8, -7, 3];
let suma = 0;
for (const n of skaiciai) {
  if (n < 0) continue;   // neigiamus praleidžiam
  suma += n;
}
console.log("Teigiamų suma:", suma); // 16

console.log("---");

// --- break veikia ir while cikle ---
let i = 0;
while (true) {          // sąlyga visada true...
  if (i >= 3) break;    // ...bet break išveda
  console.log("while:", i);
  i++;
}

// ⚠️ break NEVEIKIA forEach cikle — ten ciklo nutraukti negalima.
//    Jei reikia nutraukti, naudok for / for...of arba metodą find/some.
