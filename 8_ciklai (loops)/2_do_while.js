"use strict";

//do..while pirma padaro veiksma, o veliau patikrina salyga.
//do visada kazka atliks nors 1 karta

let sum = 0;
let number =0;

do {
    sum += number;
    number = parseInt(prompt("Enter a number:"));
} while (number >= 0) 

console.log(`The sum is ${sum}.`);

// let i = 1;

// do {
//     console.log("Do... while skaičius: " + i);
//     i++;
// } while (i <= 3)