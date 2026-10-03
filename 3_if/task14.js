"use strict";

/* 14. Lyginis ar nelyginis
Paprašykite vartotojo įvesti reikšmę. Jei:
 Skaičius lyginis - grąžinti „is Even“
 Jei nelyginis - „is Odd“
Rezultatą išveskite į konsolę.*/

let number = Number(prompt("Enter a number:"));

if (number % 2 == 0) {
    console.log("is Even");
} else {
    console.log("is Odd");
}