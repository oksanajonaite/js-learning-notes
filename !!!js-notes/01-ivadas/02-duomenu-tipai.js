// 01 · Duomenų tipai ir typeof
// Paleisti: node 01-ivadas/02-duomenu-tipai.js

// JS yra DYNAMICALLY TYPED: tipo nerašai, jį nustato pati reikšmė,
// ir tas pats kintamasis gali laikyti skirtingų tipų reikšmes.
let x = 42;
console.log(typeof x); // number
x = "dabar tekstas";
console.log(typeof x); // string

// --- 7 paprasti (primityvūs) tipai + object ---
console.log(typeof 42);          // number
console.log(typeof 3.14);        // number   ← atskiro "int/double" nėra
console.log(typeof 123n);        // bigint    ← labai dideliems sveikiesiems
console.log(typeof "tekstas");   // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof Symbol());    // symbol
console.log(typeof {});          // object
console.log(typeof null);        // object ⚠️ JS keistenybė, sena klaida kalboje

// typeof galima rašyti ir su skliaustais
console.log(typeof (x)); // string

// --- number ypatumai ---
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("a" / 2);      // NaN ← Not a Number
console.log(typeof NaN);   // number ⚠️ NaN irgi yra number tipo
console.log(0.1 + 0.2);    // 0.30000000000000004 ⚠️ trupmenų netikslumas

// --- null vs undefined ---
let tuscia = null;    // "nieko nėra" — priskiri PATS, sąmoningai
let nepriskirta;      // undefined — priskiria PATS JS
console.log(tuscia, nepriskirta); // null undefined

// --- string yra immutable (nekeičiamas) ---
let s = "labas";
s[0] = "L";
console.log(s); // labas ← nepasikeitė, klaidos irgi nebuvo
console.log(s.toUpperCase()); // LABAS ← metodai grąžina NAUJĄ tekstą
console.log(s);               // labas ← originalas vis dar toks pat
