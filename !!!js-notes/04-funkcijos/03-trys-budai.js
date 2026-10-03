// 04 · 3 būdai aprašyti funkciją
// Paleisti: node 04-funkcijos/03-trys-budai.js
//
// 💡 Tai trys būdai užrašyti TĄ PATĮ receptą. Visi daro visiškai tą patį.

// --- 1. Function declaration ---
function sum1(a, b) {
  return a + b;
}

// --- 2. Function expression (funkcija priskiriama kintamajam) ---
const sum2 = function (a, b) {
  return a + b;
};

// --- 3. Arrow function (trumpiausias) ---
const sum3 = (a, b) => a + b;        // viena eilutė: return AUTOMATINIS

const sum4 = (a, b) => {             // su {} return rašyti PRIVALOMA
  return a + b;
};

console.log(sum1(2, 3), sum2(2, 3), sum3(2, 3), sum4(2, 3)); // 5 5 5 5

// --- Arrow variantai ---
const sayHi = () => console.log("Hello");   // be parametrų: ()
const double = (n) => n * 2;                // vienas parametras
const double2 = n => n * 2;                 // skliaustai nebūtini
const objektas = () => ({ a: 1 });          // objektą grąžinant reikia () apie {}

sayHi();
console.log(double(5), double2(5), objektas()); // 10 10 { a: 1 }

// --- ⚠️ Vienintelis praktinis skirtumas: HOISTING ---
console.log(anksti(2, 3));   // 5 ✅ declaration galima kviesti PRIEŠ aprašymą
function anksti(a, b) {
  return a + b;
}

try {
  vėlai(2, 3);
} catch (e) {
  console.log("❌ " + e.message); // Cannot access 'vėlai' before initialization
}
const vėlai = (a, b) => a + b;

// | Galima kviesti prieš aprašymą | Declaration ✅ | Expression / Arrow ❌ |
