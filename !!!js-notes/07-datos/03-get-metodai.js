// 07 · Informacijos gavimas iš datos objekto (get metodai)
// Paleisti: node 07-datos/03-get-metodai.js

// Imame fiksuotą datą, kad rezultatai būtų vienodi kiekvieną kartą.
// 2026 m. rugsėjo 22 d., antradienis, 14:30:45.123
const d = new Date(2026, 8, 22, 14, 30, 45, 123);   // 8 = rugsėjis (nuo 0!)

console.log(d.getFullYear());     // 2026 ← metai 4 skaitmenimis
console.log(d.getMonth());        // 8    ⚠️ mėnuo 0–11, tad 8 = RUGSĖJIS
console.log(d.getDate());         // 22   ← mėnesio diena 1–31
console.log(d.getDay());          // 2    ⚠️ savaitės diena 0–6, 0 = SEKMADIENIS
console.log(d.getHours());        // 14   ← valandos 0–23
console.log(d.getMinutes());      // 30   ← minutės 0–59
console.log(d.getSeconds());      // 45   ← sekundės 0–59
console.log(d.getMilliseconds()); // 123  ← milisekundės 0–999
console.log(d.getTime());         // milisekundės nuo 1970-01-01
console.log(Date.now());          // dabarties timestamp (ES5)

// --- ⚠️ Dvejos spąstai, kuriuos lengva supainioti ---
// getMonth()  → 0–11  (0 = sausis)
// getDate()   → 1–31  (mėnesio diena)
// getDay()    → 0–6   (0 = sekmadienis!)

// Todėl mėnesį rodant žmogui reikia pridėti 1:
console.log(`Mėnuo: ${d.getMonth() + 1}`); // Mėnuo: 9

// --- Pavadinimai lietuviškai ---
const menesiai = ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio",
                  "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"];
const dienos = ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis",
                "ketvirtadienis", "penktadienis", "šeštadienis"];

console.log(`${d.getFullYear()} m. ${menesiai[d.getMonth()]} ${d.getDate()} d., ${dienos[d.getDay()]}`);
// 2026 m. rugsėjo 22 d., antradienis

// --- Praktika: ar šiandien savaitgalis? ---
const diena = d.getDay();
console.log(diena === 0 || diena === 6 ? "Savaitgalis" : "Darbo diena"); // Darbo diena

// --- Praktika: amžiaus skaičiavimas ---
function amzius(gimimoData) {
  const sh = new Date(2026, 8, 22);   // "šiandien" (fiksuota, kad pvz. nesikeistų)
  let m = sh.getFullYear() - gimimoData.getFullYear();
  const menSkirtumas = sh.getMonth() - gimimoData.getMonth();
  // Jei gimtadienio šiemet dar nebuvo — atimam vienerius metus
  if (menSkirtumas < 0 || (menSkirtumas === 0 && sh.getDate() < gimimoData.getDate())) {
    m--;
  }
  return m;
}
console.log(amzius(new Date(2000, 0, 15)));  // 26 ← gimtadienis jau buvo
console.log(amzius(new Date(2000, 11, 15))); // 25 ← gimtadienis dar bus

// --- UTC versijos (jei reikia laiko be laiko juostos) ---
console.log(d.getUTCHours());   // 11 ← Lietuvoje vasarą +3, tad 14 - 3
