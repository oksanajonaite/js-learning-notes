"use strict";

// 17.countValue` which returns the number of times that value is found in the array.

function countValue (array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++ ) {
    if (array[i] == value) {
      count++;
    }
  }
  return count;
}

console.log(countValue([1, 2, 3, 4, 5], 2));                   // 1
console.log(countValue([1, 2, 3, 4, 5], 17));                  // 0
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));       // 4
console.log(countValue([10, 10, 10, -10], 10));                // 3
console.log(countValue(['hello', 'bananas', 'hello'], 'hello'));   // 2
console.log(countValue(['hello', 'bananas', 'hello'], 'giraffe')); // 0

/*
filter
let countValue = (array, value) => array.filter((element) => element === value).length;
*/