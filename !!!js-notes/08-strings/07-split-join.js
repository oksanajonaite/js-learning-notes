// 08 · split() ir join()
// Paleisti: node 08-strings/07-split-join.js

// --- split() išskaido tekstą į MASYVĄ ---
const greeting = "What a beautiful world";
const arr = greeting.split(" ");   // " " yra splitter (skirtukas)
console.log(arr);   // [ 'What', 'a', 'beautiful', 'world' ]

// --- Tuščias skirtukas išskaido į atskirus SIMBOLIUS ---
const arr2 = greeting.split("");
console.log(arr2.slice(0, 8)); // [ 'W', 'h', 'a', 't', ' ', 'a', ' ', 'b' ]

// --- Be argumento gaunamas vieno elemento masyvas ---
console.log(greeting.split());  // [ 'What a beautiful world' ]

// --- split() dažnai naudojamas kartu su masyvo metodu join() ---
const sentence = "Hello world this is JavaScript";

const words = sentence.split(" ");
console.log(words);   // [ 'Hello', 'world', 'this', 'is', 'JavaScript' ]

const dashed = words.join("-");
console.log(dashed);  // Hello-world-this-is-JavaScript

// --- join() be argumento jungia kableliu ---
console.log(words.join());      // Hello,world,this,is,JavaScript
console.log(words.join(""));    // HelloworldthisisJavaScript (be tarpų)

// --- Praktika: CSV eilutė ---
const eilute = "Ana;25;Vilnius";
const [vardas, amzius, miestas] = eilute.split(";");
console.log(vardas, amzius, miestas);   // Ana 25 Vilnius

// --- Praktika: kiek žodžių sakinyje ---
console.log(sentence.split(" ").length);   // 5

// --- Praktika: apversti tekstą (split → reverse → join) ---
console.log("labas".split("").reverse().join(""));   // sabal

// --- Praktika: kiekvieno žodžio pirma raidė didžioji ---
const pavadinimas = "labas rytas visiems";
console.log(
  pavadinimas
    .split(" ")
    .map((z) => z[0].toUpperCase() + z.slice(1))
    .join(" ")
);   // Labas Rytas Visiems
