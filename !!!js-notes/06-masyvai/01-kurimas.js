// 06 · Masyvo kūrimas
// Paleisti: node 06-masyvai/01-kurimas.js

// --- 1 būdas: new Array() ---
const a = new Array();          // tuščias masyvas []
const b = new Array(5);         // tuščias masyvas su ilgiu 5
const c = new Array(5).fill(0); // užpildytas nuliais

console.log(a);        // []
console.log(b);        // [ <5 empty items> ]
console.log(b.length); // 5
console.log(c);        // [ 0, 0, 0, 0, 0 ]

// --- 2 būdas: [] ← dažniausiai naudojamas ---
const tuscias = [];
const fruits = ["Apple", "Orange", "Plum"];

console.log(fruits); // [ 'Apple', 'Orange', 'Plum' ]

// Elemento pakeitimas (indeksas jau egzistuoja)
fruits[2] = "Pear";
console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]

// Elemento pridėjimas (indeksas naujas)
fruits[3] = "Lemon";
console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]

// ⚠️ Peršokus indeksą lieka tuščios vietos
fruits[6] = "Kiwi";
console.log(fruits.length); // 7
