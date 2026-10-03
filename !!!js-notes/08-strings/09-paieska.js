// 08 · Paieška tekste: includes, indexOf, search, startsWith
// Paleisti: node 08-strings/09-paieska.js

// --- includes() patikrina, ar tekstas yra dalis kito teksto → true / false ---
let sentence = "Java is to JavaScript what Car is to Carpet.";

let check = sentence.includes("Java");
console.log(check);    // true

// ⚠️ case sensitive
let check1 = sentence.includes("java");
console.log(check1);   // false

// Antras argumentas nurodo, nuo kurios pozicijos pradėti
let check2 = sentence.includes("Java", 20);
console.log(check2);   // false

let check3 = sentence.includes("whose");
console.log(check3);   // false

let check4 = sentence.includes("");
console.log(check4);   // true ⚠️ tuščias tekstas "yra" bet kur

// --- Kad raidžių dydis nesvarbu ---
console.log(sentence.toLowerCase().includes("java"));   // true ✅

// --- indexOf() grąžina INDEKSĄ arba -1 ---
console.log(sentence.indexOf("Java"));       // 0
console.log(sentence.indexOf("JavaScript")); // 11
console.log(sentence.indexOf("Python"));     // -1 ← nerasta
console.log(sentence.lastIndexOf("Car"));    // 37 ← paskutinis atitikmuo

// ⚠️ Prieš includes() atsiradimą buvo rašoma taip:
console.log(sentence.indexOf("Java") !== -1);   // true

// --- startsWith() / endsWith() ---
console.log(sentence.startsWith("Java"));   // true
console.log(sentence.endsWith("."));        // true
console.log("nuotrauka.png".endsWith(".png")); // true

// --- search() ieško REGEX atitikties tekste ---
// Grąžina pirmosios atitikties indeksą arba -1, jei atitikimų nerado.
let string1 = "JavaScript JavaScript1";
let regExp = /(JavaScript)\d/;   // 'JavaScript', po kurio eina SKAITMUO
let index = string1.search(regExp);
console.log(index);   // 11

console.log("labas".search(/\d/));   // -1 ← skaitmenų nėra

// --- Kada ką naudoti ---
// includes()   → ar yra? (true/false)
// indexOf()    → kurioje vietoje? (indeksas)
// search()     → kurioje vietoje pagal ŠABLONĄ (regex)
// startsWith() → ar prasideda?
