"use strict";

/* 5. Amstrong skaičius (3 skaitmenys)
Paprašykite vartotojo įvesti 3 skaitmenų skaičių.
Amstrong skaičius yra tuomet, kai jo skaitmenų kubų suma yra lygi pačiam skaičiui.
Jei skaičius Amstrong - išveskite true, jei ne - false.*/

let number = prompt("Enter a 3-digit number:");

let digit1 = Number(number[0]);
let digit2 = Number(number[1]);
let digit3 = Number(number[2]);

let sum = digit1 ** 3 + digit2 ** 3 + digit3 ** 3;

if (sum === Number(number)) {
    console.log("true");
} else {
    console.log("false");
}