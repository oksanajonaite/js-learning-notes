// 02 · Įvedimas / išvedimas
// Paleisti: node 02-operatoriai/08-ivedimas-isvedimas.js
//
// ⚠️ SVARBU: alert, prompt ir confirm veikia TIK NARŠYKLĖJE.
// Node.js jų neturi, todėl čia jie paaiškinti komentaruose,
// o veikianti dalis rodo, kas atsitinka su gautais duomenimis.

// ===== NARŠYKLĖJE =====
//
// alert("Hi");                      // parodo pranešimą, nieko negrąžina
// let age = prompt("How old are you?", 100);   // grąžina STRING arba null (Cancel)
// let isBoss = confirm("Are you the boss?");   // grąžina true / false

// ===== SPĄSTAI: prompt VISADA grąžina string =====
let age = "100"; // <- tiek pat, kiek grąžintų prompt("How old are you?", 100)

console.log(typeof age);      // string ⚠️
console.log(age + 1);         // "1001" ⚠️ sujungimas, ne sudėtis
console.log(Number(age) + 1); // 101 ✅

// Cancel atveju gauname null:
let atsaukta = null;
console.log(Number(atsaukta)); // 0 ⚠️ null tampa nuliu, ne NaN

// ===== IŠVEDIMAS Į HTML =====
//
// <p id="demo"></p>
// <script>
//   document.getElementById("demo").innerHTML = 5 + 6;   // įrašo "11" į puslapį
// </script>

// ===== IŠVEDIMAS Į KONSOLĘ (veikia ir naršyklėje, ir Node) =====
console.log("paprastas pranešimas");
console.log("kelios reikšmės:", 1, true, [1, 2]);
console.error("klaidos pranešimas ← raudonai");
console.table([{ vardas: "Ana", amzius: 25 }, { vardas: "Jonas", amzius: 30 }]);

// ===== ĮVEDIMAS NODE'E (jei labai reikia) =====
//
// const readline = require("node:readline/promises");
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const vardas = await rl.question("Vardas: ");
