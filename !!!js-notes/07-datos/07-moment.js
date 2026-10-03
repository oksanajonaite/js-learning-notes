// 07 · Moment.js — biblioteka darbui su datomis
// Paleisti: node 07-datos/07-moment.js
//
// Dokumentacija: https://momentjs.com/docs/#/use-it/
// Video pamoka: https://www.youtube.com/watch?v=fB9KRePY9-w
//
// "Parse, validate, manipulate and display dates and times in JavaScript"
//
// ⚠️ Moment.js NĖRA įdiegtas — todėl jo kodas čia yra komentaruose,
//    o veikianti dalis rodo, kaip TĄ PATĮ padaryti be bibliotekos.

// ===== PRIJUNGIMAS =====
//
// Naršyklėje:
//   <script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
//
// Node.js:
//   npm install moment
//   const moment = require("moment");

const d = new Date(2026, 8, 22, 14, 30);

// ===== 1. FORMATAVIMAS =====
// moment().format("YYYY-MM-DD");           // "2026-09-22"
console.log(d.toLocaleDateString("sv-SE")); // 2026-09-22 ← be bibliotekos

// moment().format("YYYY-MM-DD HH:mm");
console.log(d.toLocaleString("lt-LT"));     // 2026-09-22 14:30:00

// ===== 2. PRIDĖTI / ATIMTI =====
// moment().add(7, "days");
const poSavaites = new Date(d.getTime());
poSavaites.setDate(poSavaites.getDate() + 7);
console.log(poSavaites.toDateString());     // Tue Sep 29 2026

// moment().subtract(1, "month");
const priesMenesi = new Date(d.getTime());
priesMenesi.setMonth(priesMenesi.getMonth() - 1);
console.log(priesMenesi.toDateString());    // Sat Aug 22 2026

// ===== 3. SKIRTUMAS =====
// moment(a).diff(moment(b), "days");
const a = new Date(2026, 0, 1);
const b = new Date(2026, 2, 15);
console.log(Math.round((b - a) / 86400000), "dienų"); // 73 dienų

// ===== 4. "prieš 3 dienas" =====
// moment(data).fromNow();                  // "3 days ago"
const rtf = new Intl.RelativeTimeFormat("lt", { numeric: "auto" });
console.log(rtf.format(-3, "day"));         // prieš 3 dienas ← įdėta į JS
console.log(rtf.format(2, "day"));          // poryt ← numeric: "auto" verčia į žodį

// ===== 5. PATIKRINIMAS =====
// moment("2023-13-01").isValid();          // false
console.log(!isNaN(new Date("2023-13-01"))); // false
console.log(!isNaN(new Date("2023-12-01"))); // true

// ===== AR VERTA NAUDOTI MOMENT.JS? =====
//
// Moment.js buvo populiariausia datų biblioteka, BET oficialiai
// paskelbta "legacy" — naujuose projektuose autoriai jos nerekomenduoja
// (ji didelė ir keičia datos objektą vietoje).
//
// Ką rinktis:
//   • Paprastiems dalykams  → įdėtos JS priemonės (šis failas)
//   • Dideliam projektui    → day.js (2 KB, tokia pati sintaksė kaip moment)
//                             arba date-fns
//   • Egzaminui / kursui    → mokėk moment sintaksę, jei jos prašo dėstytojas
