"use strict";

/* 1. Marskineliu konkursas
input: 5-24, 31-62, result: 4; 5 */

function countShirts(a, b, divisor = 6) {
  let count = 0;

  for (let i = a; i <= b; i++) {
    if (i % divisor === 0) {
      count++;
    }
  }

  return count;
}

let a = Number(prompt("Įveskite intervalo pradžią:"));
let b = Number(prompt("Įveskite intervalo pagaigą:"));
console.log(`Reikalingų marškinėlių skaičius: ${countShirts(a, b)}`); //Reikalingų marškinėlių skaičius: 4

// console.log(countShirts(5, 24));
// console.log(countShirts(31, 62));

/*sprendimas per masyva, uzima daugiau vietos, gerai, jei reiketu parodyti visa masyva ir skaicius.

function countShirts(a, b, divisor) {
  let result = [];

  for (let i = a; i <= b; i++) {
    if (i % divisor === 0) {
      result.push(i);
    }
  }
  return result.length;
}

console.log(countShirts(5, 24, 6));
console.log(countShirts(31, 62, 5));

sprendimas be masyvo, skaiciuoja tik marskineliu kieki, lengvesnis, nes nesaugo masyvo savyje*/