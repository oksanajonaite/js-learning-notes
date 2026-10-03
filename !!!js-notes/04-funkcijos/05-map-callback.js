// 04 · map — dažniausiai sutinkamas callback pavyzdys
// Paleisti: node 04-funkcijos/05-map-callback.js
//
// 💡 map = EXCEL FORMULĖS NUTEMPIMAS ŽEMYN.
//    Ta pati formulė pritaikoma kiekvienam elementui → gaunamas NAUJAS masyvas.

const kainos = [10, 20, 30];                       // A stulpelis
const dvigubos = kainos.map((kaina) => kaina * 2); // formulė =A1*2
console.log(dvigubos);                             // [ 20, 40, 60 ] ← B stulpelis

console.log(kainos); // [ 10, 20, 30 ] ← originalas nepakitęs

// --- Be map kiekvieną reiktų rašyti ranka ---
const dvigubos2 = [kainos[0] * 2, kainos[1] * 2, kainos[2] * 2];
console.log(dvigubos2); // [ 20, 40, 60 ]
// ...o su 1000 elementų taip neįmanoma.

// --- map su įvardinta funkcija (tas pats rezultatas) ---
function dvigubinti(kaina) {
  return kaina * 2;
}
console.log(kainos.map(dvigubinti)); // [ 20, 40, 60 ]

// --- map callback gauna 3 argumentus: (reikšmė, indeksas, masyvas) ---
console.log(kainos.map((kaina, i) => `${i}: ${kaina} €`));
// [ '0: 10 €', '1: 20 €', '2: 30 €' ]

// --- Giminingi metodai, kurie irgi priima callback ---
console.log(kainos.filter((k) => k > 15));   // [ 20, 30 ] ← atrenka
console.log(kainos.find((k) => k > 15));     // 20         ← pirmas tinkantis
kainos.forEach((k) => console.log(k));       // 10 20 30   ← tik veiksmas

// Plačiau apie visus šiuos metodus: ../06-masyvai/
