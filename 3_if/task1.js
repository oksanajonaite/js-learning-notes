"use strict";

/* 1. Teigiamas skaičius
Paprašykite vartotojo įvesti skaičių ir patikrinkite, ar skaičius yra didesnis už 0:
 Jei skaičius teigiamas - išveskite true
 Jei neigiamas - false
Rezultatą išveskite į konsolę.*/

let number = Number(prompt("Enter your number:"));

if (number > 0) {
    console.log("true");
} else {
    console.log("false");
}