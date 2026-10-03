"use strict";

/* 6. Kvadratas ar kūbas?
Paprašykite vartotojo įvesti skaičių. Apskaičiuokite šio skaičiaus kvadratą ir kūbą.*/

let number = Number(prompt("Enter your number:"));

let square = number ** 2; //Math.pow(number, 2)
let cube = number ** 3; //Math.pow(number, 3)

console.log(`Square: ${square}`);
console.log(`Cube: ${cube}`);