"use strict";

// 13. countEvens

function countEvens(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvens([1, 2, 3, 4, 5])); // 2
console.log(countEvens([10, 10, 10])); // 3
console.log(countEvens([1, 1, 1, 2])); // 1

/* 
kitaip - filter sukuria masyva tik is tu elementu, 
kuriems salyga grazina true, daro ta pati ka ir push

let countEvens = (numbers) => numbers.filter((number) => number % 2 === 0).length;
*/
