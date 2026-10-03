// 06 · find() — grąžina PIRMĄ tinkantį elementą
// Paleisti: node 06-masyvai/15-find.js
//
// Grąžina PATĮ ELEMENTĄ (ne masyvą). Jei nerado — undefined.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found); // 12 ← pirmas didesnis už 10, 130 ir 44 jau netikrinami

// --- Callback gali turėti ir daugiau parametrų ---
// (currentValue, index, arr) => {...}
console.log(array1.find((value, index) => index === 2)); // 8

// --- Su įvardinta funkcija ---
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries)); // { name: 'cherries', quantity: 5 }

// --- Jei nerado ---
console.log(array1.find((n) => n > 1000)); // undefined ⚠️ ne null, ne []

// --- Giminingi metodai ---
console.log(array1.findIndex((n) => n > 10)); // 1     ← indeksas, arba -1
console.log(array1.includes(8));              // true  ← ar yra tokia reikšmė
console.log(array1.indexOf(8));               // 2     ← indeksas, arba -1
