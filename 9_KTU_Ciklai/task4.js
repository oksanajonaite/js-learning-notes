"use strict";

/* 4. Kaledines eglutes
input: egluciu 6, auksciai 167, 134, 145, 156, 155, 176. 
Result: 155.5 cm */

function calculateAverageHeight() {
  let count = Number(prompt("Kiek eglučių atvežta?"));
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += Number(prompt(`Įveskite ${i} eglutės aukštį:`));
  }

  return sum / count;
}

let average = calculateAverageHeight();
console.log(`Eglutės aukščio vidurkis: ${average} cm`);
