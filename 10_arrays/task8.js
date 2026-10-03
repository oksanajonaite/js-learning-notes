"use strict";

// 8. Positive and new array

function positives(numbers) {
  let positives = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positives.push(numbers[i]);
    }
  }
  return positives;
}

console.log(positives([1, -3, 5, -3, 0])) // [1, 5]
console.log(positives([1, 2, 3])) // [1, 2, 3]
console.log(positives([-1, -2, -3])) // []

/* 
kitaip - filter sukuria masyva tik is tu elementu, kuriems salyga grazina true, daro ta pati ka ir push
let positives = (numbers) => numbers.filter((number) => number > 0);
*/