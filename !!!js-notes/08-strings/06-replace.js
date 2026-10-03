// 08 · replace() ir replaceAll()
// Paleisti: node 08-strings/06-replace.js

// --- replace() pakeičia PIRMĄ rastą atitikmenį ---
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);   // Visit W3Schools!
console.log(text);     // Visit Microsoft! ← originalas nepakitęs ✅

// ⚠️ Jei žodžių yra keli, pakeičiamas tik PIRMAS:
console.log("1 abc 2 abc 3".replace("abc", "xyz")); // 1 xyz 2 abc 3

// --- replaceAll() pakeičia VISUS atitikmenis ---
console.log("1 abc 2 abc 3".replaceAll("abc", "xyz")); // 1 xyz 2 xyz 3

// --- replace yra case sensitive ---
console.log("Visit microsoft!".replace("Microsoft", "W3Schools"));
// Visit microsoft! ⚠️ nieko nepakeitė

// --- Senesnis būdas pakeisti visus: regex su /g ---
console.log("1 abc 2 abc 3".replace(/abc/g, "xyz"));  // 1 xyz 2 xyz 3
console.log("Visit Microsoft!".replace(/microsoft/i, "W3Schools")); // i = ignoruoti raidžių dydį

// --- Praktika: tarpų pašalinimas ---
console.log("labas  visiems".replaceAll(" ", "_"));   // labas__visiems

// --- Praktika: skaičiaus formatas ---
console.log("1234,56".replace(",", "."));   // 1234.56
console.log(Number("1234,56".replace(",", "."))); // 1234.56 ← jau skaičius

// --- Praktika: šablono užpildymas ---
const sablonas = "Sveiki, {vardas}! Jūsų užsakymas {nr} paruoštas.";
console.log(sablonas.replace("{vardas}", "Ana").replace("{nr}", "A-17"));
// Sveiki, Ana! Jūsų užsakymas A-17 paruoštas.
