"use strict";

// 11. Odds and new array

/*
function odds(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}

console.log(odds([1, 2, -3, 5, 8, -3, 0])); //[1, -3, 5, -3]
console.log(odds([1, 2, 3])); //[ 1, 3 ]
console.log(odds([-1, -2, -3])); //[ -1, -3 ]
*/

//kitaip - filter sukuria masyva tik is tu elementu, kuriems salyga grazina true, daro ta pati ka ir push
let odds = (numbers) => numbers.filter((number) => number % 2 !== 0);
console.log(odds([1, 2, -3, 5, 8, -3, 0])); //[1, -3, 5, -3]
console.log(odds([1, 2, 3])); //[ 1, 3 ]
console.log(odds([-1, -2, -3])); //[ -1, -3 ]
