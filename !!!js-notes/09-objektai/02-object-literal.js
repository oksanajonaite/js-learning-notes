// 09 · 1 būdas: Object literal
// Paleisti: node 09-objektai/02-object-literal.js
//
// Objektus JavaScript'e galima kurti 4 būdais:
//   1. Object literal        ← šis failas (dažniausiai naudojamas)
//   2. Su raktažodžiu new    → 03-kurimas-new.js
//   3. Funkcijų pagalba      → 04-kurimas-funkcija.js
//   4. Klasių pagalba        → 05-kurimas-klase.js

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;   // this rodo į objektą
  },
};

console.log(person.firstName);   // John
console.log(person.fullName());  // John Doe

// 💡 Raktinis žodis THIS rodo į metodo savininką, t.y. į patį objektą.

// --- Objekto anatomija ---
const myObject = {
  city: "Madrid",        // city = property name (key), "Madrid" = property value
  greet() {              // greet = metodas (trumpasis užrašymo būdas)
    console.log(`Greetings from ${this.city}`);
  },
};

console.log(myObject.city);   // Madrid
myObject.greet();             // Greetings from Madrid

// --- Object literal iš kintamųjų (shorthand) ---
const userName = "John";
const age = 42;
const logedIn = true;

const myObj = { userName, age, logedIn };   // trumpasis užrašymas
console.log(myObj);   // { userName: 'John', age: 42, logedIn: true }

// Tai tas pats, kas:
const myObj2 = { userName: userName, age: age, logedIn: logedIn };
console.log(myObj2);

// --- ⚠️ this arrow funkcijoje NEVEIKIA taip pat ---
const blogai = {
  city: "Vilnius",
  greet: () => console.log(`Iš ${this.city}`),   // arrow neturi savo this
};
blogai.greet();   // Iš undefined ⚠️

const gerai = {
  city: "Vilnius",
  greet() { console.log(`Iš ${this.city}`); },   // ✅ įprastas metodas
};
gerai.greet();    // Iš Vilnius
