// 06 · Masyvas yra nuoroda (reference)
// Paleisti: node 06-masyvai/03-reference.js

// Kintamojo vardas NĖRA pats masyvas — tai tik nuoroda į vietą atmintyje.
// Priskyrus vieną kintamąjį kitam, gauname DU vardus tam PAČIAM masyvui.

let fruits = ["Banana"];
let arr = fruits;            // copy by reference

console.log(arr === fruits); // true ← ta pati vieta atmintyje

arr.push("Pear");            // keičiam per arr...
console.log(fruits);         // [ 'Banana', 'Pear' ] ← pasikeitė ir fruits!

// --- Palyginimui: paprasti tipai (number, string) kopijuojami pagal reikšmę ---
let x = 5;
let y = x;
y = 10;
console.log(x); // 5 ← nepasikeitė

// --- ⚠️ Todėl masyvų negalima lyginti su === ---
console.log([1, 2] == [1, 2]); // false ← du SKIRTINGI masyvai atmintyje

// Kad turėtume nepriklausomą kopiją → žr. 05-kopijavimas.js
