// 06 · Masyvo pagrindai: length, pasiekimas, tipai
// Paleisti: node 06-masyvai/02-pagrindai.js

const fruits = ["Apple", "Orange", "Plum"];

// --- Ilgis ---
console.log(fruits.length);       // 3

// --- Elemento pasiekimas (nuo 0!) ---
console.log(fruits[0]);           // Apple
console.log(fruits[fruits.length - 1]); // Plum ← paskutinis
console.log(fruits[99]);          // undefined ⚠️ klaidos NEBUS

// --- Visas masyvas ---
console.log(fruits);              // [ 'Apple', 'Orange', 'Plum' ]
console.log(String(fruits));      // Apple,Orange,Plum ← kaip tekstas

// --- Masyvas gali saugoti įvairių tipų duomenis ---
const arr = ["Apple", { name: "John" }, true, function () { console.log("hello"); }];

console.log(arr[1].name); // John  ← objektas 1-ame indekse
arr[3]();                 // hello ← funkcija 3-iame indekse, iškviečiam su ()

// --- Ar tai masyvas? ---
console.log(typeof arr);          // "object" ⚠️ NE "array"
console.log(Array.isArray(arr));  // true ✅ teisingas būdas
