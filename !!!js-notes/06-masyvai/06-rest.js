// 06 · Rest parameter (...)
// Paleisti: node 06-masyvai/06-rest.js

// Tas pats ... ženklas, bet FUNKCIJOS APRAŠYME jis vadinamas rest parameter:
// atskiri argumentai SURENKAMI į masyvą.

let func = function (...args) {
  console.log(args);
};

func(3);        // [ 3 ]
func(4, 5, 6);  // [ 4, 5, 6 ]

// --- Praktinis pavyzdys ---
function suma(...skaiciai) {
  let sum = 0;
  for (const n of skaiciai) sum += n;
  return sum;
}

console.log(suma(1, 2, 3));       // 6
console.log(suma(10, 20, 30, 40)); // 100

// --- Rest turi būti PASKUTINIS parametras ---
function pirkinys(pavadinimas, ...kainos) {
  console.log(pavadinimas, kainos);
}
pirkinys("Krepšelis", 5, 10, 15); // Krepšelis [ 5, 10, 15 ]

// 💡 Kaip atskirti:
//    ...masyvas  iškvietime / masyve  → spread (išskaido)
//    ...args     funkcijos aprašyme   → rest   (surenka)
