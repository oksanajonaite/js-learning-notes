"use strict";

/* 2. Ar paveikslėlis yra „landscape“?
Paprašykite vartotojo įvesti plotį ir aukštį.
 Jei plotis didesnis už aukštį – paveikslėlis yra „landscape“
 Jei aukštis didesnis arba lygus pločiui – ne
Rezultatą išveskite į konsolę.*/

let width = Number(prompt("Enter a width:"));
let height = Number(prompt("Enter a height:"));

if (width > height) {
    console.log("landscape");
} else {
    console.log("not landscape");
}