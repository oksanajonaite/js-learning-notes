"use strict";

// 9. Mean, arithmetic mean, vidurkis

function mean(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(mean([30, 10, 20])); // 20
console.log(mean([-10, 10]));    // 0


/* 
reduce budas
function mean(numbers) {
  let sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
  return sum / numbers.length;
}
*/