// 09 · 4 būdas: klasės pagalba
// Paleisti: node 09-objektai/05-kurimas-klase.js
//
// • Klasė (class) yra RUOŠINYS / ŠABLONAS objektams kurti.
// • Pagal vieną klasę galime sukurti daug to paties tipo objektų.
// • Klasės JavaScript'e yra nuo ES6 versijos.
// • Tai šiuolaikinis ir modernus būdas kurti objektus.
// • Klasės vardas rašomas iš DIDŽIOSIOS raidės.

class User {
  constructor(name) {      // constructor — vykdomas kuriant objektą su new
    this.name = name;      // savybė
  }

  sayHi() {                // metodas
    console.log(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();   // John

// --- Vienas ruošinys — daug objektų ---
class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `${this.name} yra ${this.level} lygio`;
  }
}

const hero1 = new Hero("Varg", 1);
const hero2 = new Hero("Elena", 5);

console.log(hero1.greet());   // Varg yra 1 lygio
console.log(hero2.greet());   // Elena yra 5 lygio

// --- Išvedus objektą į konsolę matome savybes, konstruktorių ir metodus ---
console.log(hero1);
// Hero { name: 'Varg', level: 1 }
//   __proto__:
//     constructor: class Hero
//     greet: f greet()
//
// Metodai NĖRA saugomi kiekviename objekte — jie yra prototipe,
// todėl 1000 objektų dalinasi ta pačia greet() funkcija.
console.log(Object.getPrototypeOf(hero1) === Hero.prototype); // true
console.log(hero1.hasOwnProperty("greet"));                   // false

// --- Paveldėjimas (extends) ---
class SuperHero extends Hero {
  constructor(name, level, galia) {
    super(name, level);      // iškviečiam tėvinės klasės konstruktorių
    this.galia = galia;
  }

  greet() {
    return super.greet() + ` ir turi galią: ${this.galia}`;
  }
}

const superas = new SuperHero("Zed", 10, "skraidymas");
console.log(superas.greet());   // Zed yra 10 lygio ir turi galią: skraidymas

// --- 💡 Klasė yra "gražesnis" užrašymo būdas tai pačiai funkcijai-konstruktoriui ---
console.log(typeof Hero);   // function ⚠️ klasė JS'e po skraiste yra funkcija
