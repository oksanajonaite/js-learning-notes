// 09 · 2 būdas: kūrimas su raktažodžiu new
// Paleisti: node 09-objektai/03-kurimas-new.js
//
// Sukuriamas TUŠČIAS objektas, o paskui jam priskiriamos savybės.

var person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.speak = function () {
  let sent = `Mano vardas ${person.firstName}. Taip.`;
  console.log(sent);   // arba veiksmas
  return sent;         // arba grąžinama reikšmė
};

console.log(person.firstName + " is " + person.age + " years old.");
person.speak();

// Naršyklėje rezultatas būtų rodomas taip:
// document.getElementById("demo").innerHTML =
//   person.firstName + " is " + person.age + " years old." + person.speak();

// --- ⚠️ Šis būdas naudojamas RETAI ---
// new Object() ir {} duoda VISIŠKAI tą patį rezultatą, tik {} trumpiau:
const a = new Object();
const b = {};
console.log(typeof a, typeof b);   // object object

// Todėl praktikoje rašoma taip:
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
console.log(person2);

// --- Kada vis dėlto praverčia tuščias objektas? ---
// Kai savybės surenkamos ciklu ar pagal sąlygą:
const duomenys = [["vardas", "Ana"], ["amzius", 25]];
const rezultatas = {};
for (const [raktas, reiksme] of duomenys) {
  rezultatas[raktas] = reiksme;   // per laužtinius skliaustus
}
console.log(rezultatas);   // { vardas: 'Ana', amzius: 25 }
