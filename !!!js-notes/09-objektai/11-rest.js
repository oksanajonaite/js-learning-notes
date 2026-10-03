// 09 · Rest operatorius (...)
// Paleisti: node 09-objektai/11-rest.js
//
// Naudojamas PADUODANT parametrus funkcijai.
// Trys taškiukai prieš atskirus parametrus funkcijoje juos SUJUNGIA į masyvą.

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
// [ 'CodeSweetly', 'Web Developer', 'Male' ]
// ← pirmi du argumentai pateko į firstName ir lastName,
//   VISI likusieji surinkti į masyvą otherInfo

// --- ⚠️ Rest turi būti PASKUTINIS parametras ---
// function blogai(...a, b) {}   // ❌ SyntaxError

// --- Praktika: nežinomas argumentų skaičius ---
function suma(...skaiciai) {
  return skaiciai.reduce((s, n) => s + n, 0);
}
console.log(suma(1, 2, 3));          // 6
console.log(suma(10, 20, 30, 40));   // 100
console.log(suma());                 // 0 ← tuščias masyvas

// --- Rest ir objektams: "visos likusios savybės" ---
const vartotojas = {
  vardas: "Ana",
  amzius: 25,
  miestas: "Vilnius",
  slaptazodis: "12345",
};

const { slaptazodis, ...saugusDuomenys } = vartotojas;
console.log(saugusDuomenys);   // { vardas: 'Ana', amzius: 25, miestas: 'Vilnius' }
// 💡 Patogu pašalinti vieną savybę nekeičiant originalo.
console.log(Object.keys(vartotojas).length);   // 4 ← originalas nepakitęs

// --- Rest ir masyvams ---
const [pirmas, ...likusieji] = [1, 2, 3, 4];
console.log(pirmas);      // 1
console.log(likusieji);   // [ 2, 3, 4 ]

// --- 💡 SPREAD ar REST? Žiūrim, KUR yra trys taškai ---
// Funkcijos APRAŠYME arba destruktūrizuojant → REST  (surenka į vieną)
// Iškvietime arba kuriant objektą/masyvą      → SPREAD (išskaido)
const arr = [1, 2, 3];
console.log(Math.max(...arr));   // 3 ← SPREAD (iškvietime)
function f(...args) {            //   ← REST (aprašyme)
  return args.length;
}
console.log(f(1, 2, 3));         // 3
