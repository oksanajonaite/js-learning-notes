// 01 · Dažniausios pradedančiųjų klaidos
// Paleisti: node 01-ivadas/05-klaidos.js
//
// Kiekviena klaida čia "pagauta" su try/catch, kad failas neužstrigtų
// ir galėtum perskaityti VISUS pranešimus iš eilės.

function parodyk(aprasymas, veiksmas) {
  try {
    veiksmas();
    console.log(`✅ ${aprasymas}: klaidos nebuvo`);
  } catch (e) {
    console.log(`❌ ${aprasymas}\n   → ${e.name}: ${e.message}`);
  }
}

// 1. Kintamasis neegzistuoja arba yra už scope ribų
parodyk("Nedeklaruotas kintamasis", () => {
  console.log(nezinomas);
});

// 2. let/const panaudotas per anksti (temporal dead zone)
parodyk("Naudojimas prieš deklaraciją", () => {
  console.log(vardas);
  let vardas = "Ana";
});

// 3. Tas pats vardas deklaruotas du kartus
parodyk("Dviguba deklaracija", () => {
  eval("let z = 1; let z = 2;");
});

// 4. Bandymas pakeisti const
parodyk("const keitimas", () => {
  const MAX = 10;
  MAX = 20;
});

// 5. Savybė iš null / undefined
parodyk("Savybė iš undefined", () => {
  let user;
  console.log(user.name);
});

// --- TYLIOS klaidos: JS nesikeikia, bet rezultatas ne toks ---
console.log("\n⚠️ Šios klaidos NESUKELIA pranešimo:");
console.log("  '5' + 3   =", "5" + 3);        // 53   ← sujungimas vietoj sudėties
console.log("  '5' - 3   =", "5" - 3);        // 2    ← o čia jau atimtis
console.log("  0.1 + 0.2 =", 0.1 + 0.2);      // 0.30000000000000004
console.log("  [] == 0   =", [] == 0);        // true ← todėl naudok ===
