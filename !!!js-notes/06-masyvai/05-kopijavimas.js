// 06 · Masyvų dubliavimas / kopijavimas
// Paleisti: node 06-masyvai/05-kopijavimas.js

const sheeps = ["🐑", "🐏", "🐑"];

// --- Senas būdas ---
const cloneSheeps = sheeps.slice();

// --- ES6 būdas ---
const cloneSheepsES6 = [...sheeps];

console.log(cloneSheepsES6);          // [ '🐑', '🐏', '🐑' ]
console.log(cloneSheepsES6 === sheeps); // false ✅ tai jau KITAS masyvas

cloneSheepsES6.push("🐐");
console.log(sheeps.length);           // 3 ← originalas nepaliestas

// --- Kelių masyvų sujungimas ---
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined); // [ 1, 2, 3, 4, 5, 6 ]
