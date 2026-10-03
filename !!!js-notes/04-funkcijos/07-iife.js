// 04 · Self-invoking funkcija (IIFE)
// Paleisti: node 04-funkcijos/07-iife.js
//
// Funkcija, kuri iškviečiama IŠKART ją sukūrus. Veikia tik su function expression.
//
// 💡 Receptas, kurį užrašai ir iškart pagamini, nes antrą kartą jo nereikės.
//    Dabar naudojama retai, bet sutiksi senesniame kode.

(function () {
  console.log("Iškviesta iškart!");
})();
// (function () {...}) ← funkcija skliaustuose
//                  () ← "iškviesk dabar"

// --- Su argumentu ---
(function (message) {
  console.log(message);
})("Hello, hello");

// --- Arrow versija ---
(() => {
  console.log("Arrow IIFE");
})();

// --- Kam to reikėjo: paslėpti kintamuosius nuo viso failo ---
(function () {
  var vidinis = "manęs iš lauko nematyti";
  console.log(vidinis);
})();

try {
  console.log(vidinis);
} catch (e) {
  console.log("❌ " + e.message); // vidinis is not defined
}

// Šiandien tą patį padaro paprastas blokas su let/const:
{
  const vidinis2 = "irgi paslėptas";
  console.log(vidinis2);
}
