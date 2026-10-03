"use strict";

/* 2. Suapvalinimas
Paprašykite vartotojo įvesti skaičių, kuris turėtų kelis skaičius po kablelio. Konsolėje išspausdinkite:
Suapvalintą skaičių. Suapvalintą žemyn skaičių. Suapvalintą aukštyn skaičių*/

let number = Number(prompt("Enter a decimal number:"));

let roundedNumber = Math.round(number);
let roundedDown = Math.floor(number);
let roundedUp = Math.ceil(number);

console.log(`Rounded number ${roundedNumber}`);
console.log(`Rounded down ${roundedDown}`);
console.log(`Rounded up ${roundedUp}`);