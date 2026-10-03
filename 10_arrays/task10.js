"use strict";

// 10. Evens and new array

function evens(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0 && numbers[i] !== 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(evens([1, 2, -3, 5, 8, -3, 0])); // [2, 8]
console.log(evens([1, 2, 3])); // [2]
console.log(evens([-1, -2, -3])); // [-2]

/* 
kitaip - filter sukuria masyva tik is tu elementu, kuriems salyga grazina true, daro ta pati ka ir push
let evens = (numbers) => numbers.filter((number) => number % 2 === 0 && number !== 0);
*/
