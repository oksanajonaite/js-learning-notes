"use strict";

//while naudojame kai nezinome kiek suksime cikla.
//pirma while patikrina salyga ir tuomet veikia

// let sum = 0;

// let number = parseInt(prompt("Enter a number:"));

// while (number >= 0) {
//     sum += number;
//     number = parseInt(prompt("Enter a number:"));
// } 

// console.log(`The sum is ${sum}.`);

let i = 1;

while (i <= 3) {
    console.log("While skaičius: " + i);
    i++;
}

let j = 1;

//padare koda 1 karta, o veliau patikrino salyga

do {
    console.log("Do... while skaičius: " + j);
    j++;
} while (j <= 3)

for (let k = 1; k <= 3; k++ ) {
    console.log("for skaičius: " + k);
}