// 06 · filter() — atrenka tinkančius elementus
// Paleisti: node 06-masyvai/14-filter.js
//
// Sukuria NAUJĄ masyvą iš tų elementų, su kuriais callback grąžino true.
// Jei nė vienas netinka — grąžina TUŠČIĄ masyvą [].

// --- Bendra forma ---
// let results = arr.filter(function(item, index, array) {
//   // jei true — item patenka į results, iteracija tęsiasi
// });

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers);        // [ { id: 1, ... }, { id: 2, ... } ]
console.log(someUsers.length); // 2

// --- Skaičiai ---
const skaiciai = [1, 8, 3, 12, 7];
console.log(skaiciai.filter((n) => n > 5));      // [ 8, 12, 7 ]
console.log(skaiciai.filter((n) => n % 2 === 0)); // [ 8, 12 ]
console.log(skaiciai.filter((n) => n > 100));     // [] ← nieko nerasta

console.log(skaiciai); // [ 1, 8, 3, 12, 7 ] ← originalas nepakitęs ✅

// 💡 filter — gauni MASYVĄ visų tinkančių.
//    find   — gauni tik PIRMĄ tinkantį elementą (žr. 15-find.js).
