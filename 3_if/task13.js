"use strict";

/* 13. Arbatpinigiai
Paprašykite vartotojo įvesti sąskaitos sumą ir aptarnavimo lygį (good, fair, poor). Apskaičiuokite arbatpinigius:
 good → 20%
 fair → 15%
 poor → 10%
1. Išveskite į konsolę tik arbatpinigių sumą.
2. Išveskite į konsolę bendrą sumą: sąskaita + arbatpinigiai
3. Paprašyk vartotojo įvesti sąskaitos sumą, aptarnavimo lygį ir žmonių skaičių.
Apskaičiuokite, kiek turi mokėti kiekvienas žmogus. Rezultatą išveskite į konsolę.*/

let invoice = Number(prompt("Enter an invoice sum:"));
let serviceLevel = prompt("What is the level of service (good, fair, poor)?");
let person = Number(prompt("How many people were served?"));

let percent;

if (serviceLevel == "good") {
    percent = 20;
} else if (serviceLevel == "fair") {
    percent = 15;
} else if (serviceLevel == "poor") {
    percent = 10;
}

let tip = invoice * percent / 100;
let total = invoice + tip;
let perPerson = total / person;

console.log(`Tip: ${tip.toFixed(2)}`);
console.log(`Total: ${total.toFixed(2)}`);
console.log(`Each person pays: ${perPerson.toFixed(2)}`);