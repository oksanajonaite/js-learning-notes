"use strict";

/* 3. Dviejų skaičių palyginimas
Paprašykite vartotojo įvesti du sveikus skaičius. Ir išveskite didesnį į konsolę.*/

let num1 = Number(prompt("Enter a first integer:"));
let num2 = Number(prompt("Enter a second integer:"));

if (num1 > num2) { //Math.max(num1, num2)
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("Numbers are equal");
}