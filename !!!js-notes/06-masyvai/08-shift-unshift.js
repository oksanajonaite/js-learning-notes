// 06 · shift() ir unshift() — darbas su masyvo PRADŽIA
// Paleisti: node 06-masyvai/08-shift-unshift.js
//
// ⚠️ Abu keičia TĄ PATĮ masyvą, naujo nekuria.

// --- shift() — panaikina PIRMĄ elementą ---
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.shift()); // Apple ← grąžina PAŠALINTĄ elementą
console.log(fruits);         // [ 'Orange', 'Pear' ]

// Kas vyksta viduje:
// ["Apple", "Orange", "Pear", "Lemon"]   length = 4
//    0         1        2        3
// ištrinam 0 → visi elementai PASTUMIAMI į kairę → indeksai persiskaičiuoja
// ["Orange", "Pear", "Lemon"]            length = 3
//     0        1        2
// Todėl shift/unshift yra LĖTESNI už push/pop.

// --- unshift() — prideda elementą į PRADŽIĄ ---
let berries = ["Orange", "Pear"];
berries.unshift("Apple");
console.log(berries); // [ 'Apple', 'Orange', 'Pear' ]

// Grąžina naują ilgį, galima kelis iš karto
console.log(berries.unshift("Kiwi", "Mango")); // 5
console.log(berries); // [ 'Kiwi', 'Mango', 'Apple', 'Orange', 'Pear' ]
