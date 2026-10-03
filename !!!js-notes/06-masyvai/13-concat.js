// 06 · concat() — sujungia masyvus
// Paleisti: node 06-masyvai/13-concat.js
//
// Sukuria NAUJĄ masyvą, senojo NEKEIČIA.

let arr = [1, 2];

// --- Sujungti su kitu masyvu ---
console.log(arr.concat([3, 4]));          // [ 1, 2, 3, 4 ]

// --- Sujungti su keliais masyvais ---
console.log(arr.concat([3, 4], [5, 6]));  // [ 1, 2, 3, 4, 5, 6 ]

// --- Prijungti atskirus elementus ---
console.log(arr.concat([3, 4], 5, 6));    // [ 1, 2, 3, 4, 5, 6 ]

console.log(arr);                         // [ 1, 2 ] ← originalas nepakitęs ✅

// --- ES6 alternatyva: spread ---
console.log([...arr, ...[3, 4], 5]);      // [ 1, 2, 3, 4, 5 ]

// ⚠️ Nepainiok su push: push KEIČIA originalą ir nieko nesujungia
const a = [1, 2];
a.push([3, 4]);
console.log(a);                           // [ 1, 2, [ 3, 4 ] ] ← masyvas masyve!
