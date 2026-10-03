// 07 · Datų palyginimas
// Paleisti: node 07-datos/05-palyginimas.js
//
// Nors datos yra JS OBJEKTAI, jas galima lyginti operatoriais > < >= <=

// --- Tekstai dar nėra datos ---
var date1 = "01/12/2018";
var date2 = "12/12/2018";

// Paverčiam į JavaScript datas:
date1 = new Date(date1);
date2 = new Date(date2);

console.log(date1 > date2);   // false
console.log(date1 < date2);   // true
console.log(date1 >= date2);  // false
console.log(date1 <= date2);  // true

// ⚠️ Atsargiai: "01/12/2018" suprantama kaip MM/DD/YYYY = sausio 12 d.!
console.log(date1.toDateString()); // Fri Jan 12 2018
console.log(date2.toDateString()); // Wed Dec 12 2018

// --- ⚠️ BET su == ir === lyginti NEGALIMA ---
const a = new Date(2026, 0, 1);
const b = new Date(2026, 0, 1);   // ta pati data, bet KITAS objektas

console.log(a === b);   // false ⚠️ lyginamos nuorodos, ne reikšmės
console.log(a == b);    // false ⚠️
console.log(a > b);     // false
console.log(a < b);     // false ← t.y. jos lygios, bet === to nerodo

// ✅ Lygybę tikrinam per getTime():
console.log(a.getTime() === b.getTime());   // true
console.log(+a === +b);                     // true ← trumpiau (unarinis +)

// Kodėl > < veikia, o === ne?
// Lyginant su > < JS automatiškai paverčia datą į SKAIČIŲ (timestamp),
// o su === tipo nekeičia ir lygina objektų nuorodas.
console.log(Number(a)); // 1767218400000

// --- Skirtumas tarp datų ---
const pradzia = new Date(2026, 0, 1);
const pabaiga = new Date(2026, 2, 15);

const skirtumasMs = pabaiga - pradzia;    // atimant tipas irgi pavirsta į skaičių
console.log(skirtumasMs);                 // 6307200000
console.log(Math.round(skirtumasMs / 86400000), "dienų"); // 73 dienų

// --- Praktika: ar data jau praėjo? ---
function arPraejo(data) {
  return data < new Date();
}
console.log(arPraejo(new Date(2020, 0, 1))); // true
console.log(arPraejo(new Date(2099, 0, 1))); // false

// --- Praktika: rikiavimas pagal datą ---
const ivykiai = [
  { pav: "Egzaminas", data: new Date(2026, 5, 10) },
  { pav: "Projektas", data: new Date(2026, 2, 1) },
  { pav: "Atostogos", data: new Date(2026, 7, 20) },
];

ivykiai.sort((x, y) => x.data - y.data);   // atimtis grąžina skaičių ✅
ivykiai.forEach((i) => console.log(i.data.toDateString(), i.pav));
// Sun Mar 01 2026 Projektas
// Wed Jun 10 2026 Egzaminas
// Thu Aug 20 2026 Atostogos
