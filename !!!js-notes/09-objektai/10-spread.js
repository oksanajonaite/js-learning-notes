// 09 · Spread operatorius (...) objektams
// Paleisti: node 09-objektai/10-spread.js

// --- Objekto praplėtimas nauja savybe ---
const circle = {
  radius: 10,
};

const coloredCircle = {
  ...circle,
  color: "black",
};

console.log(coloredCircle);   // { radius: 10, color: 'black' }
console.log(circle);          // { radius: 10 } ← originalas nepakitęs ✅

// --- Objektų jungimas ---
const style = {
  backgroundColor: "red",
};

const solidCircle = {
  ...circle,
  ...style,
};

console.log(solidCircle);   // { radius: 10, backgroundColor: 'red' }

// --- ⚠️ Jei savybės sutampa, laimi PASKUTINĖ ---
const numatyta = { spalva: "juoda", dydis: 10 };
const vartotojo = { spalva: "raudona" };
console.log({ ...numatyta, ...vartotojo });   // { spalva: 'raudona', dydis: 10 }
console.log({ ...vartotojo, ...numatyta });   // { spalva: 'juoda', dydis: 10 }

// 💡 Todėl spread patogus "numatytosioms reikšmėms":
function piesti(nustatymai) {
  const galutiniai = { spalva: "juoda", storis: 1, ...nustatymai };
  console.log(galutiniai);
}
piesti({ spalva: "mėlyna" });   // { spalva: 'mėlyna', storis: 1 }

// --- Objekto kopija (tas pats, kas Object.assign({}, obj)) ---
const kopija = { ...circle };
console.log(kopija === circle);   // false ✅ naujas objektas

// --- Spread perduodant funkcijai parametrus (masyvui) ---
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));   // 16

// Be spread funkcija gautų VIENĄ argumentą — masyvą:
console.log(addNumbers(numbers));      // 1,3,5,7undefinedundefinedundefined ⚠️

// --- ⚠️ Spread objektams irgi PAVIRŠINIS (shallow) ---
const orig = { a: 1, vidus: { b: 2 } };
const kop = { ...orig };
kop.vidus.b = 99;
console.log(orig.vidus.b);   // 99 ⚠️ vidinis objektas bendras
