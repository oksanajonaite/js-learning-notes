"use strict";

/* 8. Ar galima sudaryti trikampį?
Paprašykite vartotojo įvesti tris skaičius - trikampio kraštines. 
Patikrinkite, ar iš jų galima sudaryti trikampį. Taisyklė: dviejų kraštinių suma turi būti didesnė už trečią.
 Jei trikampis galima - grąžinti true
 Jei ne - false*/

let a = Number(prompt("Enter a first number:"));
let b = Number(prompt("Enter a second number:"));
let c = Number(prompt("Enter a third number:"));

if (a + b > c && a + c > b && b + c > a) {
    console.log("true");
} else {
    console.log("false");
}