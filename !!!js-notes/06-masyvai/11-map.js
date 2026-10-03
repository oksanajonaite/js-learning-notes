// 06 · map() — transformuoja kiekvieną elementą
// Paleisti: node 06-masyvai/11-map.js
//
// Sukuria NAUJĄ masyvą, kurio elementai — funkcijos grąžinti rezultatai.
// Naujo masyvo ilgis VISADA toks pat kaip originalo.

// --- Su įprasta funkcija (kaip skaidrėje) ---
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2); // [ 90, 8, 18, 32, 50 ]
console.log(numbers1); // [ 45, 4, 9, 16, 25 ] ← originalas nepakitęs ✅

// myFunction čia yra callback funkcija — ji vykdoma sinchroniškai,
// t.y. map palaukia, kol ji baigsis su kiekvienu elementu.

// --- Callback parametrai (index ir array nebūtini) ---
const raides = ["a", "b", "c"];
console.log(raides.map((value, index, array) => `${index}: ${value}`));
// [ '0: a', '1: b', '2: c' ]

// --- Su arrow funkcija — trumpiau ---
console.log(numbers1.map((n) => n * 2)); // [ 90, 8, 18, 32, 50 ]

// --- Praktika: iš objektų masyvo išrinkti vieną lauką ---
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
];
console.log(users.map((u) => u.name)); // [ 'John', 'Pete' ]

// ⚠️ Pamiršus return gausi undefined masyvą:
console.log(numbers1.map((n) => { n * 2; })); // [ undefined, undefined, ... ]
