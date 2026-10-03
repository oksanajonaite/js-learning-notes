// 06 · sort() — rikiavimas
// Paleisti: node 06-masyvai/16-sort.js
//
// ⚠️ KEIČIA originalų masyvą, naujo nekuria.
// ⚠️ Be callback rikiuoja kaip TEKSTĄ (pagal simbolių kodus).

// --- 1. String tipo duomenys ---
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();     // pagal abėcėlę A–Z
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

fruits.reverse();  // atvirkščia tvarka Z–A
console.log(fruits); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// --- 2. Skaičiai: be callback rikiuojama NETEISINGAI ---
console.log([40, 100, 1, 5, 25, 10].sort());
// [ 1, 10, 100, 25, 40, 5 ] ⚠️ nes "100" < "25" kaip tekstas

// --- 3. Skaičiai su callback ---
var points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) { return a - b; });   // didėjimo tvarka (ascending)
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

points.sort((a, b) => b - a);                     // mažėjimo tvarka (descending)
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Kaip veikia callback: jei grąžina
//   neigiamą  → a eina PRIEŠ b
//   teigiamą  → a eina PO b
//   0         → tvarka nesikeičia

// --- 4. Objektų masyvas pagal skaičių ---
var books = [
  { title: "CKnyga #1", price: 10.25 },
  { title: "AKnyga #2", price: 5.15 },
  { title: "GKnyga #3", price: 7.32 },
  { title: "BKnyga #4", price: 54.01 },
  { title: "MKnyga #5", price: 77.17 },
];

books.sort(function (a, b) {
  if (a.price > b.price) return -1;  // brangiausios viršuje
  if (a.price < b.price) return 1;
  return 0;
});
console.log(books.map((b) => b.price)); // [ 77.17, 54.01, 10.25, 7.32, 5.15 ]

// Sukeitus -1 ir 1 vietomis gausime pigiausias viršuje:
books.sort((a, b) => a.price - b.price);
console.log(books.map((b) => b.price)); // [ 5.15, 7.32, 10.25, 54.01, 77.17 ]

// --- 5. Objektų masyvas pagal tekstą ir datą ---
let employees = [
  { firstName: "John", lastName: "Doe", age: 27, joinedDate: "December 15, 2017" },
  { firstName: "Ana", lastName: "Rosy", age: 25, joinedDate: "January 15, 2019" },
  { firstName: "Zion", lastName: "Albert", age: 30, joinedDate: "February 15, 2011" },
];

// Pagal vardus (string)
employees.sort((a, b) => {
  let fa = a.firstName.toLowerCase(),
      fb = b.firstName.toLowerCase();
  if (fa < fb) return -1;
  if (fa > fb) return 1;
  return 0;
});
employees.forEach((e) => console.log(`${e.firstName} ${e.lastName}`));
// Ana Rosy / John Doe / Zion Albert

// Pagal datas
employees.sort((a, b) => {
  let da = new Date(a.joinedDate),
      db = new Date(b.joinedDate);
  return da - db;
});
employees.forEach((e) => console.log(`${e.firstName} ${e.joinedDate}`));
// Zion February 15, 2011 / John December 15, 2017 / Ana January 15, 2019

// 💡 Jei originalo keisti negalima: const surikiuotas = [...arr].sort();
