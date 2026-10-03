// 07 · Datos kūrimo būdai
// Paleisti: node 07-datos/01-kurimas.js
//
// ⚠️ Rezultatai rodomi TAVO kompiuterio laiko juosta (Lietuvoje GMT+2 / +3).

// --- 1. Dabarties data ir laikas ---
let now = new Date();
console.log(now);
// 2026-09-22T17:18:13.000Z ← kas kartą kitoks

// --- 2. Iš timestamp (milisekundžių nuo 1970-01-01) ---
var timestamp = 1607110465663;
var date = new Date(timestamp);
console.log(date.toISOString()); // 2020-12-04T19:34:25.663Z

// --- 3. Iš date string ---
let d1 = new Date("2017-01-26");
console.log(d1.toString());
// Thu Jan 26 2017 02:00:00 GMT+0200
// ⚠️ "2017-01-26" suprantama kaip UTC vidurnaktis, o Lietuvoje tai jau 02:00!

let d2 = new Date("2017-01-26T00:00:00");   // be Z = VIETINIS laikas
console.log(d2.toString());
// Thu Jan 26 2017 00:00:00 GMT+0200 ✅

// --- 4. Nurodant metus / mėn / dieną / val / min / sek / ms ---
console.log(new Date(2011, 0, 1, 0, 0, 0, 0).toString());
// Sat Jan 01 2011 00:00:00 ← 1 Jan 2011, 00:00:00

console.log(new Date(2011, 0, 1).toString());
// tas pats — valandos ir kt. pagal nutylėjimą yra 0

let date3 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date3.toString());
// Sat Jan 01 2011 02:03:04 ← 1.01.2011, 02:03:04.567

// ⚠️⚠️ MĖNESIAI SKAIČIUOJAMI NUO 0!
// 0 = sausis, 1 = vasaris, ... 11 = gruodis
console.log(new Date(2011, 0, 1).getMonth());  // 0 ← sausis
console.log(new Date(2011, 11, 1).getMonth()); // 11 ← gruodis
// Dienos, priešingai, skaičiuojamos nuo 1.

// --- ⚠️ Spąstai: MM/DD/YYYY ar DD/MM/YYYY? ---
console.log(new Date("01/12/2018").toString());
// Fri Jan 12 2018 ← amerikietiškas formatas: MĖNUO/DIENA/METAI!
// Todėl visada rašyk ISO formatu: "2018-12-01"

// --- ⚠️ Neteisinga data "persiverčia" arba tampa Invalid Date ---
console.log(new Date("2023-02-30").toString()); // Thu Mar 02 2023 ← persivertė
console.log(new Date("2023-13-01").toString()); // Invalid Date
console.log(isNaN(new Date("blogai")));         // true ← taip tikrinam
