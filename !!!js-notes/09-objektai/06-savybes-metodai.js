// 09 · Darbas su objektais: savybių ir metodų iškvietimas, keitimas, šalinimas
// Paleisti: node 09-objektai/06-savybes-metodai.js

const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function () {
    return `Hi, my name is ${this.name}!`;
  },
};

// --- Savybių iškvietimas ---
console.log(gimli.weapon);   // axe
console.log(gimli.name);     // Gimli

// --- Metodų iškvietimas (su skliaustais!) ---
console.log(gimli.greet());  // Hi, my name is Gimli!
console.log(gimli.greet);    // [Function: greet] ⚠️ pamiršus () gauni pačią funkciją

// --- Savybių PRIDĖJIMAS ---
gimli.age = 139;
console.log(gimli.age);      // 139

// --- Metodų PRIDĖJIMAS ---
gimli.fight = function () {
  return `Gimli attacks with an ${this.weapon}.`;
};
console.log(gimli.fight());  // Gimli attacks with an axe.

// --- Savybių KEITIMAS ---
gimli.weapon = "battle axe";
console.log(gimli.fight());  // Gimli attacks with an battle axe.

// --- Savybių ŠALINIMAS ---
delete gimli.weapon;
console.log(gimli.weapon);   // undefined
console.log("weapon" in gimli); // false ← taip tikrinam, ar savybė yra

// --- Pasiekimas per LAUŽTINIUS skliaustus ---
const myCar = {
  make: "BMW",
  model: "X1",
  year: 2000,
};

myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
console.log(myCar);   // { make: 'Ford', model: 'Mustang', year: 1969 }

// --- Savybių keitimas nurodant jas per KINTAMUOSIUS ---
const audi = { make: "Audi", model: "Mustang", year: 2000 };

let propertyName = "make";
audi[propertyName] = "Ford";      // Audi -> Ford

propertyName = "model";
audi[propertyName] = "Focus";     // Mustang -> Focus

propertyName = "year";
audi[propertyName] = 2010;        // 2000 -> 2010

console.log(audi);   // { make: 'Ford', model: 'Focus', year: 2010 }

// ⚠️ audi.propertyName ieškotų savybės, kurios vardas tiesiog "propertyName":
console.log(audi.propertyName);   // undefined

// --- Kada kurį būdą naudoti ---
// obj.savybe        → kai savybės vardą žinai rašydamas kodą ✅ dažniausiai
// obj["savybe"]     → kai vardas yra kintamajame arba turi tarpų/brūkšnelių
const keistas = { "mano savybe": 1, "kaina-eur": 5 };
console.log(keistas["mano savybe"], keistas["kaina-eur"]);   // 1 5

// --- ⚠️ const objektą keisti VIDUJE galima (kaip masyvuose) ---
const o = { a: 1 };
o.a = 99;        // ✅ veikia
console.log(o);  // { a: 99 }
// o = {};       // ❌ TypeError: Assignment to constant variable
