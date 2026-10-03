"use strict";

/* 1. Didžiausias ir mažiausias skaičiai, 
Paprašykite vartotojo įvesti tris skaičius. Išveskite į konsolę didžiausią ir mažiausią skaičius.*/

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log(`Max number is ${max}, min number is ${min}`);