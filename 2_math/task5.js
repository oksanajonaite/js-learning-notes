"use strict";

/* 5. Teigiama reikšmė
Paprašykite vartotojo įvesti skaičių. 
Jeigu įvestas skaičius neigiamas - paverskite jį teigiamu. Rezultatą išveskite į konsolę.*/

let number = Number(prompt("Enter your number:"));

console.log(`Positive value: ${Math.abs(number)}`);