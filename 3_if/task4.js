"use strict";

/* 4. Trijų skaičių sandaugos ženklas
Paprašykite vartotojo įvesti tris skaičius. Nustatykite, koks yra jų sandaugos ženklas.
 Jei teigiamas, tuomet „+“
 Jei neigiamas, tuomet „-“
Rezultatą parodyk su alert.*/

let num1 = Number(prompt("Enter a first number:"));
let num2 = Number(prompt("Enter a second number:"));
let num3 = Number(prompt("Enter a third number:"));

let product = num1 * num2 * num3;

if (product > 0) {
    alert("+");
} else {
    alert("-");
}