"use strict";

/* Puodelių pakavimas. Input:7
Result: Pilnų dėžučių skaičius: 2. Nesupakuotų puodelių skaičius: 1.*/

let cupCount = Number(prompt("Puodelių, kuriuos reikia supakuoti, skaičius:"));
let boxCapacity = 3;

let fullBoxes = Math.floor(cupCount / boxCapacity);
let remainingCups = cupCount % boxCapacity;

console.log(`Pilnų dėžučių skaičius: ${fullBoxes}`);
console.log(`Nesupakuotų puodelių skaičius: ${remainingCups}`);