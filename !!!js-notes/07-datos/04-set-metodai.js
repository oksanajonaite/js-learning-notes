// 07 · Datos nustatymas / keitimas (set metodai)
// Paleisti: node 07-datos/04-set-metodai.js
//
// ⚠️ set metodai KEIČIA patį objektą (kaip push masyvuose), naujo nekuria.

const d = new Date(2020, 0, 1, 10, 0, 0);   // 2020-01-01 10:00:00
console.log(d.toString()); // Wed Jan 01 2020 10:00:00

d.setFullYear(2026);       // metai (galima ir mėnuo, diena)
console.log(d.getFullYear()); // 2026

d.setMonth(11);            // mėnuo 0–11 → 11 = gruodis
d.setDate(25);             // mėnesio diena 1–31
d.setHours(18);            // valandos 0–23
d.setMinutes(30);          // minutės 0–59
d.setSeconds(15);          // sekundės 0–59
d.setMilliseconds(500);    // milisekundės 0–999

console.log(d.toString()); // Fri Dec 25 2026 18:30:15

// --- setTime(): nustato viską iš timestamp ---
const d2 = new Date();
d2.setTime(0);
console.log(d2.toISOString()); // 1970-01-01T00:00:00.000Z

// --- ⚠️ Objektas KEIČIAMAS vietoje ---
const originalas = new Date(2026, 0, 1);
const kopija = originalas;       // tai tik NUORODA (kaip masyvuose!)
kopija.setFullYear(2030);
console.log(originalas.getFullYear()); // 2030 ⚠️ pasikeitė ir originalas!

// Tikrai kopijai:
const tikraKopija = new Date(originalas.getTime());
tikraKopija.setFullYear(2040);
console.log(originalas.getFullYear());   // 2030 ✅ nepasikeitė
console.log(tikraKopija.getFullYear());  // 2040

// --- 💡 Naudinga savybė: datos PERSIVERČIA automatiškai ---
const sausio31 = new Date(2026, 0, 31);
sausio31.setDate(sausio31.getDate() + 1);
console.log(sausio31.toDateString()); // Sun Feb 01 2026 ← pats persivertė

// Todėl "po 10 dienų" skaičiuoti labai paprasta:
function poDienu(data, kiek) {
  const nauja = new Date(data.getTime());   // dirbam su kopija
  nauja.setDate(nauja.getDate() + kiek);
  return nauja;
}
console.log(poDienu(new Date(2026, 11, 25), 10).toDateString()); // Mon Jan 04 2027

// Veikia ir atgal, ir per metų ribą:
console.log(poDienu(new Date(2026, 0, 1), -1).toDateString()); // Wed Dec 31 2025

// --- Naršyklėje (iš skaidrės) ---
// <script>
//   const d = new Date();
//   d.setFullYear(2020);
//   document.getElementById("demo").innerHTML = d;
// </script>
