// 04 · Kas yra funkcija
// Paleisti: node 04-funkcijos/01-kas-yra-funkcija.js
//
// 💡 Funkcija = RECEPTAS. Užsirašai vieną kartą ir gamini kiek nori kartų,
//    vis su kitais ingredientais.

function pasisveikinti(vardas) {    // receptas užrašytas, bet dar NIEKAS neįvyko
  return "Labas, " + vardas;
}

// Tik iškvietus suveikia:
console.log(pasisveikinti("Oksana")); // Labas, Oksana
console.log(pasisveikinti("Jonas"));  // Labas, Jonas

// --- Kodėl funkcijos reikalingos: nekartojam to paties kodo ---
// BE funkcijos:
console.log("Labas, Ana");
console.log("Labas, Petras");
console.log("Labas, Rūta");

// SU funkcija — logika vienoje vietoje, pakeisti reikia tik kartą:
["Ana", "Petras", "Rūta"].forEach((v) => console.log(pasisveikinti(v)));

// --- sum vs sum() ---
console.log(typeof pasisveikinti);   // function ← pati funkcija
console.log(typeof pasisveikinti("X")); // string ← jos REZULTATAS

console.log(pasisveikinti);   // [Function: pasisveikinti] ⚠️ pamiršus () gauni funkciją
