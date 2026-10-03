// 06 · splice() — įterpia, ištrina, pakeičia
// Paleisti: node 06-masyvai/09-splice.js
//
// Sintaksė: arr.splice(index[, deleteCount, elem1, ..., elemN])
//   index       — nuo kurio elemento pradėti
//   deleteCount — kiek elementų trinti
//   elem1...N   — ką įterpti vietoje ištrintų
// Grąžina: IŠTRINTŲ elementų masyvą.
// ⚠️ Keičia SENĄJĮ masyvą, naujo nekuria.

// --- 1. Ištrinti elementą ---
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1);            // nuo indekso 1 ištrinti 1 elementą
console.log(arr);            // [ 'I', 'JavaScript' ]

// --- 2. Ištrinti kelis ir pakeisti naujais ---
arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance"); // ištrinti 3, vietoje jų įdėti 2
console.log(arr);            // [ "Let's", 'dance', 'right', 'now' ]

// --- 3. Įterpti nieko netrinant (deleteCount = 0) ---
arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
console.log(arr);            // [ 'I', 'study', 'complex', 'language', 'JavaScript' ]

// --- 4. Gauti ištrintų elementų masyvą ---
arr = ["I", "study", "JavaScript", "right", "now"];
let removed = arr.splice(0, 2);
console.log(removed);        // [ 'I', 'study' ] ← ištrintieji
console.log(arr);            // [ 'JavaScript', 'right', 'now' ]

// --- 5. Neigiamas indeksas — skaičiuojama nuo galo ---
arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);     // prieš paskutinį elementą įterpti 3 ir 4
console.log(arr);            // [ 1, 2, 3, 4, 5 ]

// 💡 splice ↔ slice: splice KEIČIA originalą, slice tik KOPIJUOJA.
