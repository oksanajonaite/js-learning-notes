"use strict";

/* 11. Spynos kombinacija
Paprašykite vartotojo įvesti 4 skaičius. Kombinacija teisinga, jeigu:
 pirmas skaičius yra 3, 5 arba 7
 antras skaičius yra 2
 trečias skaičius yra tarp 5 ir 100 (imtinai)
 ketvirtas skaičius yra mažesnis nei 9 ARBA didesnis nei 20
Jei viskas teisinga - išvesk „correct“, kitu atveju - „incorrect“.*/

let num1 = Number(prompt("Enter a first number:"));
let num2 = Number(prompt("Enter a second number:"));
let num3 = Number(prompt("Enter a third number:"));
let num4 = Number(prompt("Enter a fourth number:"));

if (
    (num1 == 3 || num1 == 5 || num1 == 7) && 
    num2 == 2 &&
    (num3 >= 5 && num3 <=100) &&
    (num4 < 9 || num4 > 20) ) {
    console.log("correct");
} else {
    console.log("incorrect");
}