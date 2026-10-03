// 02 · Rankinis (explicit) tipų keitimas
// Paleisti: node 02-operatoriai/04-tipu-keitimas-rankinis.js

// --- Į NUMBER ---
console.log(Number("123"));        // 123
console.log(Number("3 lives"));    // NaN ⚠️ VISAS tekstas turi būti skaičius

console.log(parseInt("20.01"));    // 20    ← nukerpa trupmeną
console.log(parseInt("3 lives"));  // 3     ← pasiima skaičių iš PRADŽIOS
console.log(parseInt("lives 3"));  // NaN   ← bet tik iš pradžios!

console.log(parseFloat("20.01"));  // 20.01 ← palieka trupmeną
console.log(+"20.01");             // 20.01 ← trumpiausias būdas
console.log(Math.floor("20.01"));  // 20    ← apvalina ŽEMYN

// 💡 Number reikalauja, kad VISAS tekstas būtų skaičius.
//    parseInt pasiima skaičių iš teksto PRADŽIOS.

// --- Į STRING ---
console.log(String(true));     // "true"
console.log(String(123));      // "123"
console.log((123).toString()); // "123"
console.log(123 + "");         // "123" ← gudrybė, bet neaiškiai skaitosi

// --- Į BOOLEAN ---
console.log(Boolean("hello")); // true
console.log(Boolean(0));       // false

// --- Apvalinimas ---
console.log(Math.floor(4.7));  // 4  žemyn
console.log(Math.ceil(4.1));   // 5  aukštyn
console.log(Math.round(4.5));  // 5  iki artimiausio
console.log((4.567).toFixed(2)); // "4.57" ⚠️ grąžina STRING
