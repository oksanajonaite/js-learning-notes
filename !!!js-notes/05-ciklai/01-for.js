// 05 · for ciklas
// Paleisti: node 05-ciklai/01-for.js
//
// Naudojamas, kai ŽINAI, kiek kartų reikia suktis.

//  pradžia     sąlyga   žingsnis
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050

// Tvarka: pradžia → tikrinama SĄLYGA → kūnas → žingsnis → vėl sąlyga → ...

// --- Matome, kas vyksta ---
for (let i = 1; i <= 3; i++) {
  console.log(`i = ${i}`);
}
// i = 1
// i = 2
// i = 3

// --- Ėjimas per masyvą ---
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {   // < length, NE <= ⚠️
  console.log(i, arr[i]);
}
// 0 a
// 1 b
// 2 c

// ⚠️ Su <= peržengtume masyvo ribas:
for (let i = 0; i <= arr.length; i++) {
  if (i === arr.length) console.log(i, arr[i]); // 3 undefined
}

// --- Atgal ---
for (let i = 3; i >= 1; i--) {
  console.log(i);   // 3 2 1
}

// --- Žingsnis kas 2 ---
for (let i = 0; i <= 10; i += 2) {
  process.stdout.write(i + " ");   // 0 2 4 6 8 10
}
console.log("");

// ⚠️ Naudok let, ne var — su var i "išlenda" iš ciklo:
for (var j = 0; j < 3; j++) {}
console.log(j); // 3 ⚠️ vis dar egzistuoja
