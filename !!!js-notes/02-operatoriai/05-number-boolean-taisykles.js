// 02 · Number() ir Boolean() taisyklės
// Paleisti: node 02-operatoriai/05-number-boolean-taisykles.js

// --- Number() taisyklės ---
console.log(Number(undefined));  // NaN
console.log(Number(null));       // 0   ⚠️ skiriasi nuo undefined!
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(""));         // 0   ⚠️ tuščias tekstas = 0
console.log(Number("   "));      // 0   ⚠️ vien tarpai irgi 0
console.log(Number(" 12 "));     // 12  ← tarpai kraštuose nukerpami
console.log(Number("12abc"));    // NaN

// --- Boolean(): false grąžina tik FALSY reikšmės ---
// Falsy yra tik šios 6 (+ -0 ir 0n):
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// --- VISA kita yra truthy ---
console.log(Boolean("hello"));  // true
console.log(Boolean(1));        // true
console.log(Boolean(-5));       // true ⚠️ neigiamas irgi true
console.log(Boolean("0"));      // true ⚠️ netuščias TEKSTAS
console.log(Boolean(" "));      // true ⚠️ tarpas irgi simbolis
console.log(Boolean("false"));  // true ⚠️ tekstas "false" yra truthy!
console.log(Boolean([]));       // true ⚠️ tuščias masyvas
console.log(Boolean({}));       // true ⚠️ tuščias objektas

// 💡 Prisimink 6 falsy reikšmes — visa kita true.
