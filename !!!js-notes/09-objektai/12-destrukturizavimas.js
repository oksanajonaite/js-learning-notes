// 09 · Objektų destruktūrizavimas
// Paleisti: node 09-objektai/12-destrukturizavimas.js
//
// Patogus ir greitas objekto savybių "išpakavimas" tiesiai į atskirus
// kintamuosius. Sutrumpina kodą, pašalina pasikartojantį objekto
// pavadinimo rašymą — kodas tampa švaresnis.

let user = {
  vardas: "Jonas",
  amzius: 25,
  miestas: "Vilnius",
};

// Vietoj šito:
/*
let vardas = user.vardas;
let amzius = user.amzius;
let miestas = user.miestas;
*/

// Rašom šitaip:
let { vardas, amzius, miestas } = user;

console.log(vardas);    // Jonas
console.log(amzius);    // 25
console.log(miestas);   // Vilnius

// ⚠️ Kintamųjų vardai turi SUTAPTI su savybių vardais.
const { nera } = user;
console.log(nera);      // undefined

// --- Kitoks kintamojo vardas: savybe: naujasVardas ---
const { vardas: userName, miestas: city } = user;
console.log(userName, city);   // Jonas Vilnius

// --- Numatytoji reikšmė, jei savybės nėra ---
const { salis = "Lietuva" } = user;
console.log(salis);   // Lietuva

// --- Destruktūrizavimas funkcijos parametruose (labai dažna) ---
function pristatyti({ vardas, amzius }) {
  return `${vardas}, ${amzius} m.`;
}
console.log(pristatyti(user));   // Jonas, 25 m.

// Be destruktūrizavimo tektų rašyti:
function pristatyti2(u) {
  return `${u.vardas}, ${u.amzius} m.`;
}
console.log(pristatyti2(user));

// --- Įdėtas (nested) objektas ---
const uzsakymas = {
  nr: "A-17",
  klientas: { vardas: "Ana", el: "ana@example.com" },
};
const { nr, klientas: { vardas: kliVardas, el } } = uzsakymas;
console.log(nr, kliVardas, el);   // A-17 Ana ana@example.com

// --- Kartu su rest (žr. 11-rest.js) ---
const { vardas: v, ...kita } = user;
console.log(v);      // Jonas
console.log(kita);   // { amzius: 25, miestas: 'Vilnius' }

// --- Veikia ir masyvams, tik ten svarbi TVARKA, ne vardai ---
const [pirmas, antras] = ["a", "b"];
console.log(pirmas, antras);   // a b

// --- Praktika: iš masyvo objektų ---
const zmones = [
  { vardas: "Ana", amzius: 25 },
  { vardas: "Jonas", amzius: 30 },
];
zmones.forEach(({ vardas, amzius }) => console.log(`${vardas}: ${amzius}`));
// Ana: 25
// Jonas: 30
