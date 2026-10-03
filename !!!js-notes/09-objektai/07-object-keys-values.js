// 09 · Object.keys() ir Object.values()
// Paleisti: node 09-objektai/07-object-keys-values.js
//
// Abu skirti objekto DUOMENIMS PAIMTI.

// --- Object.keys() sukuria savybių PAVADINIMŲ (keys) masyvą ---
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

const keys = Object.keys(employees);
console.log(keys);   // [ 'boss', 'secretary', 'sales', 'accountant' ]

// --- Gali būti naudojamas išvesti savybes su pavadinimais (keys and values) ---
Object.keys(employees).forEach((key) => {
  let value = employees[key];
  console.log(`${key}: ${value}`);
});
// boss: Michael
// secretary: Pam
// sales: Jim
// accountant: Oscar

// --- Pasinaudojant Object.keys() galima nustatyti objekto DYDĮ ---
console.log(Object.keys(employees).length);   // 4 savybės
// ⚠️ Objektas neturi .length savybės, skirtingai nei masyvas:
console.log(employees.length);                // undefined

// --- Object.values() sukuria savybių REIKŠMIŲ (values) masyvą ---
const session = {
  id: 1,
  time: `26-July-2018`,
  device: "mobile",
  browser: "Chrome",
};

const values = Object.values(session);
console.log(values);   // [ 1, '26-July-2018', 'mobile', 'Chrome' ]

// --- Object.entries() — poros [raktas, reikšmė] ---
console.log(Object.entries(session));
// [ [ 'id', 1 ], [ 'time', '26-July-2018' ], ... ]

for (const [key, value] of Object.entries(employees)) {
  console.log(`${key} = ${value}`);   // aiškiausias būdas pereiti objektą
}

// --- Kadangi gaunami MASYVAI, galima naudoti visus masyvo metodus ---
const kainos = { duona: 1.2, pienas: 0.9, suris: 4.5 };

console.log(Object.values(kainos).reduce((s, k) => s + k, 0).toFixed(2)); // 6.60
console.log(Object.keys(kainos).filter((k) => kainos[k] > 1));           // [ 'duona', 'suris' ]
console.log(Object.keys(kainos).sort());                                  // [ 'duona', 'pienas', 'suris' ]

// --- Ar objektas tuščias? ---
console.log(Object.keys({}).length === 0);   // true
