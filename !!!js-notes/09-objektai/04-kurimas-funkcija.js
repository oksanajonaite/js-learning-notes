// 09 · 3 būdas: funkcijos (konstruktoriaus) pagalba
// Paleisti: node 09-objektai/04-kurimas-funkcija.js
//
// • Funkcijos vardas rašomas iš DIDŽIOSIOS raidės.
// • Funkcijos konstruktoriaus pagalba sukuriami TO PATIES TIPO objektai.
//   Jų gali būti keletas.
// • Tai SENESNIS būdas kurti objektus JS kalboje.

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

console.log("My father is " + myFather.name());   // My father is John Doe
console.log("My mother is " + myMother.name());   // My mother is Sally Rally

// 💡 Vienas "ruošinys" — daug objektų. Be konstruktoriaus tektų
//    ranka rašyti du beveik vienodus object literal'us.

// --- ⚠️ Taip sukurtam objektui NEGALIMA pridėti savybės ar metodo tiesiogiai ---
Person.nationality = "English";
console.log(myFather.nationality);   // undefined ⚠️ neveikia

// --- ✅ Savybių ir metodų pridėjimui naudojami PROTOTIPAI ---
Person.prototype.nationality = "English";
console.log(myFather.nationality);   // English ✅
console.log(myMother.nationality);   // English ✅ visi objektai paveldėjo

Person.prototype.greet = function () {
  return `Labas, aš ${this.firstName}`;
};
console.log(myFather.greet());   // Labas, aš John

// --- Kur savybė iš tikrųjų yra? ---
console.log(myFather.hasOwnProperty("firstName"));    // true  ← paties objekto
console.log(myFather.hasOwnProperty("nationality"));  // false ← iš prototipo
console.log(myFather);
// Person { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue', name: ... }

// --- ⚠️ Pamiršus new viskas sugenda ---
// var klaida = Person("X", "Y", 1, "z");   // grąžina undefined, o this nukeliauja kitur
