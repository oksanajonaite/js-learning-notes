// 04 · Nested funkcijos (funkcija funkcijoje)
// Paleisti: node 04-funkcijos/08-nested.js
//
// 💡 DĖŽUTĖ DĖŽUTĖJE. Iš mažosios matai, kas yra didžiojoje,
//    bet iš lauko į mažąją neįlįsi.

function isorine() {
  const vardas = "Oksana";

  function vidine() {
    console.log("Labas, " + vardas);   // ✅ mato išorinės funkcijos kintamąjį
  }

  vidine();
}

isorine();   // Labas, Oksana

// Iš lauko vidinės funkcijos nematyti:
try {
  vidine();
} catch (e) {
  console.log("❌ " + e.message); // vidine is not defined
}

// --- Kam naudinga: pagalbinė funkcija, reikalinga tik vienoje vietoje ---
function suformuotiKaina(suma, valiuta) {
  function apvalinti(x) {
    return Math.round(x * 100) / 100;
  }
  return apvalinti(suma) + " " + valiuta;
}

console.log(suformuotiKaina(12.3456, "€")); // 12.35 €

// --- Funkcija gali GRĄŽINTI funkciją ---
function daugiklis(kiek) {
  return function (x) {
    return x * kiek;   // "prisimena" kiek net pasibaigus daugiklis()
  };
}

const trigubinti = daugiklis(3);
console.log(trigubinti(5));   // 15
console.log(daugiklis(10)(5)); // 50

// Toks "prisiminimas" vadinamas CLOSURE — tai viena iš stipriausių JS savybių.
