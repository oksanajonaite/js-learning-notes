// 02 · Masyvai ir objektai (pirmas susipažinimas)
// Paleisti: node 02-operatoriai/01-masyvai-objektai.js
//
// Plačiau apie masyvus: ../06-masyvai/

// --- Masyvas: reikšmės pagal INDEKSĄ ---
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);       // Saab ← indeksai nuo 0
console.log(cars.length);   // 3

// Tipai gali būti skirtingi
const mixed = ["John", "Doe", 46];
console.log(mixed);         // [ 'John', 'Doe', 46 ]

// --- Objektas: reikšmės pagal RAKTĄ (key: value) ---
const person = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person.firstName);    // John ← per tašką
console.log(person["lastName"]);  // Doe  ← per laužtinius skliaustus

// Pridėti / pakeisti savybę
person.city = "Vilnius";
person.age = 47;
console.log(person); // { firstName: 'John', lastName: 'Doe', age: 47, city: 'Vilnius' }

// --- Masyvas iš objektų (labai dažna struktūra) ---
const list = [{ type: "Fiat" }, { type: "BMW" }];
console.log(list[1].type);  // BMW ← pirma indeksas, tada savybė

// --- Objektas su masyvu viduje ---
const studentas = { vardas: "Ana", pazymiai: [9, 10, 8] };
console.log(studentas.pazymiai[1]); // 10
