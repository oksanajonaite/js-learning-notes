// 02 · typeof — kokio tipo reikšmė?
// Paleisti: node 02-operatoriai/02-typeof.js

let x = 5;

// Abu užrašymo būdai veikia vienodai
console.log(typeof x);    // number
console.log(typeof (x));  // number

console.log(typeof 0);          // number
console.log(typeof 10n);        // bigint
console.log(typeof "foo");      // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof Symbol());   // symbol
console.log(typeof {});         // object

// --- Dvi JS keistenybės ---
console.log(typeof null);       // object ⚠️ sena klaida kalboje, nepataisyta
console.log(typeof []);         // object ⚠️ masyvas irgi objektas

// Todėl masyvą tikriname kitaip:
console.log(Array.isArray([]));   // true  ✅
console.log(Array.isArray({}));   // false

// O null tikriname taip:
let a = null;
console.log(a === null);          // true ✅

// --- typeof funkcijai ---
console.log(typeof function () {});  // function
console.log(typeof console.log);     // function
