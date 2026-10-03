"use strict";

/* Kaina po nuolaidos
Paprašykite vartotojo įvesti kainą ir nuolaidos procentą. 
Apskaičiuokite galutinę kainą, suapvalintą iki 2 skaičių po kablelio. 
Rezultatą išveskite į konsolę.*/

let price = Number(prompt("Enter a price:"));
let discount = Number(prompt("Enter a discount (%):"));

let priceAfterDiscount = price * (100 - discount) / 100;

console.log(`Price after discount is ${priceAfterDiscount.toFixed(2)}`);