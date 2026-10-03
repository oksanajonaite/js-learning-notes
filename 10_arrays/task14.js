"use strict";

// 14. countLessThan, number and threshold number, riba kuri paduodama, 
// strictly less reikia kad butinai < , skaicius lygus ribai nesiskaiciuoja

function countLessThan (numbers, threshold) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] < threshold) {
      count++;
    }
  }
  return count;
}

console.log(countLessThan([1, 2, 3, 4, 5], 2));                 // 1
console.log(countLessThan([1, 2, 3, 4, 5], 17));                // 5
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));     // 0
console.log(countLessThan([10, 10, 10, -10, 15, 7], 10));       // 2

/*
let countLessThan = (numbers, threshold) =>
  numbers.filter((number) => number < threshold).length;
*/