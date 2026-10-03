// 09 · Object.assign()
// Paleisti: node 09-objektai/09-object-assign.js
//
// Skirtas objekto duomenims (savybėms ir reikšmėms) NUKOPIJUOTI
// iš vieno objekto į kitą.

// --- Dviejų objektų sujungimas ---
const name = {
  firstName: "Philip",
  lastName: "Fry",
};

const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

const character = Object.assign(name, details);
console.log(character);
// { firstName: 'Philip', lastName: 'Fry', job: 'Delivery Boy', employer: 'Planet Express' }

// ⚠️ SVARBU: pirmasis argumentas (name) yra PAKEIČIAMAS!
console.log(name);   // ...irgi turi job ir employer ⚠️
console.log(character === name);   // true ← tas pats objektas

// --- Objekto kopijavimas į TUŠČIĄ objektą ---
const vardas = {
  firstName: "Philip",
  lastName: "Fry",
};

// Kopijuojamos savybės iš vardas į naują tuščią objektą character2
const character2 = Object.assign({}, vardas);
character2.nationality = "LT";
console.log(character2);   // { firstName: 'Philip', lastName: 'Fry', nationality: 'LT' }
console.log(vardas);       // { firstName: 'Philip', lastName: 'Fry' } ✅ nepakitęs

// 💡 Object.assign({}, obj) yra saugus būdas gauti KOPIJĄ.
//    Object.assign(obj1, obj2) pakeičia obj1.

// --- Kodėl kopijos reikia: objektas yra nuoroda (kaip masyvas) ---
const a = { x: 1 };
const b = a;            // tai tik NUORODA
b.x = 99;
console.log(a.x);       // 99 ⚠️ pasikeitė ir a

const c = Object.assign({}, a);
c.x = 1;
console.log(a.x);       // 99 ✅ nepasikeitė

// --- ⚠️ Kopija tik PAVIRŠINĖ (shallow) ---
const originalas = { vardas: "Ana", adresas: { miestas: "Vilnius" } };
const kopija = Object.assign({}, originalas);

kopija.vardas = "Jonas";
console.log(originalas.vardas);            // Ana ✅

kopija.adresas.miestas = "Kaunas";
console.log(originalas.adresas.miestas);   // Kaunas ⚠️ vidinis objektas BENDRAS!

// Giliai kopijai:
const gili = structuredClone(originalas);
gili.adresas.miestas = "Klaipėda";
console.log(originalas.adresas.miestas);   // Kaunas ✅
