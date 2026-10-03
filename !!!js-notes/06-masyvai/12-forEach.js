// 06 · forEach() — atlieka veiksmą su kiekvienu elementu
// Paleisti: node 06-masyvai/12-forEach.js
//
// ⚠️ NIEKO NEGRĄŽINA (undefined). return viduje ignoruojamas.
// Naujo masyvo nekuria.

// --- Callback parametrai: (item, index, array) ---
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
// Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
// Gandalf is at index 1 in ...
// Nazgul is at index 2 in ...

// --- Kadangi nėra return, rezultatą reikia kažkur PADĖTI patiems ---
const apps = ["WhatsApp", "Instagram", "Facebook"];
const playStore = [];

apps.forEach(function (item) {
  playStore.push(item);
});

console.log(playStore); // [ 'WhatsApp', 'Instagram', 'Facebook' ]

// ⚠️ Tai, ką grąžina forEach, yra undefined:
const nieko = apps.forEach((a) => a.toUpperCase());
console.log(nieko); // undefined

// ✅ Jei reikia rezultato — naudok map:
console.log(apps.map((a) => a.toUpperCase())); // [ 'WHATSAPP', 'INSTAGRAM', 'FACEBOOK' ]

// 💡 forEach — kai reikia VEIKSMO (spausdinti, siųsti).
//    map     — kai reikia NAUJO masyvo.
