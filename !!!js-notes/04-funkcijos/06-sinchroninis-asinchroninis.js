// 04 · Sinchroninis vs asinchroninis kodas
// Paleisti: node 04-funkcijos/06-sinchroninis-asinchroninis.js
//
// 💡 Sinchroninis  = kavinėje stovi prie kasos, kol padarys kavą.
//    Asinchroninis = restorane gauni pypsintį pultelį ir eini sėsti.

// --- SINCHRONINIS: vykdoma iš eilės, kodas LAUKIA ---
console.log("1");
[10, 20].forEach((x) => console.log(x));
console.log("2");
// 1, 10, 20, 2  ← tvarka tokia, kokia parašyta

console.log("---");

// --- ASINCHRONINIS: kodas eina toliau, rezultatas ateina VĖLIAU ---
console.log("1");
setTimeout(() => console.log("2"), 1000);   // po 1 sekundės
console.log("3");
// 1, 3, 2  ⚠️ "2" atsiranda paskutinis, nors parašytas viduryje

// --- Net su 0 ms delsimu asinchroninis kodas vykdomas PO viso sinchroninio ---
setTimeout(() => console.log("asinchroninis su 0 ms"), 0);
console.log("sinchroninis");
// sinchroninis
// asinchroninis su 0 ms

// | Kada vykdomas | Sinchroninis: iškart | Asinchroninis: vėliau      |
// | Pavyzdžiai    | map, filter, forEach | setTimeout, fetch iš serverio |

// Kam to reikia? Jei puslapis lauktų, kol atsiųs duomenis iš serverio,
// jis tiesiog "užšaltų" ir vartotojas nieko negalėtų spausti.
