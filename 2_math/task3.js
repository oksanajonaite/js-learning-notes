"use strict";

/* 3. Atsitiktinis skaičius
Išveskite į konsolę sugeneruotus tris atsitiktinai sugeneruotus skaičius:
 Skaičių nuo 0 iki 1
 Skaičių nuo 0 iki 100
 Skaičių nuo 5 iki 20*/

let number1 = Math.random();
let number2 = Math.random() * 100;
let number3 = Math.random() * 15 + 5;

console.log(`Random number from 0 to 1: ${number1}`);
console.log(`Random number from 0 to 100: ${number2}`);
console.log(`Random number from 5 to 20: ${number3}`);