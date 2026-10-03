"use strict";

/* 4. Skaičiai po kablelio
Duotas skaičius 2,100212. 
Paprašykite vartotojo įvesti, kiek skaičių po kablelio reikia palikti. 
Išveskite į konsolę tokiu būdų suformatuotą skaičių.*/

const NUMBER = 2.100212;
let decimals = Number(prompt("How many decimal places?"));

console.log(NUMBER.toFixed(decimals));