"use strict";

/*Trapecijos plotas. Input:5,3,4
Result: Trapecijos plotas: 16*/

let longBase = Number(prompt("Trapecijos ilgesniojo pagrindo ilgis:"));
let shortBase = Number(prompt("Trapecijos trumpesniojo pagrindo ilgis:"));
let altitude = Number(prompt("Trapecijos aukštinės ilgis:"));

let area = (longBase + shortBase) / 2 * altitude;

console.log(`Trapecijos plotas: ${area}`);