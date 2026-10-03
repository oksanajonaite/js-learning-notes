// 06 · push() ir pop() — darbas su masyvo GALU
// Paleisti: node 06-masyvai/07-push-pop.js
//
// ⚠️ Abu keičia TĄ PATĮ masyvą, naujo nekuria.

// --- push() — prideda elementą į galą ---
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]

// push grąžina naują ilgį
console.log(fruits.push("Lemon")); // 4

// Galima pridėti kelis iš karto
fruits.push("Kiwi", "Mango");
console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Lemon', 'Kiwi', 'Mango' ]

// --- pop() — panaikina PASKUTINĮ elementą ---
let berries = ["Apple", "Orange", "Pear"];
console.log(berries.pop()); // Pear ← grąžina PAŠALINTĄ elementą
console.log(berries);       // [ 'Apple', 'Orange' ]

// Tuščiame masyve pop() grąžina undefined
console.log([].pop()); // undefined

// 💡 Įsivaizduok lėkščių krūvelę: dedi ir imi tik nuo viršaus.
