"use strict";

// 5. Write function `allPositive` which is given an array 
// of numbers and returns true if _every_ element is positive and false otherwise.

function allPositive(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) { //0 laikomas negative
      return false;
    }
  }
  return true;
}

console.log(allPositive([1, 2, 3, 4, 5]));  // true
console.log(allPositive([1, 2, -3, 4, 5])); // false
console.log(allPositive([0, 0, 1]));        // false


/*kitas sprendimo budas - logika tokia pat - tikrina salyga kiekvienam elementui ir sustoja prie pirmo, kuris neatitinka
function allPositive(numbers) {
  return numbers.every(function (number) {
    return number > 0;
  });
}
console.log(allPositive([1, 2, 3, 4, 5]));  // true
console.log(allPositive([1, 2, -3, 4, 5])); // false
console.log(allPositive([0, 0, 1]));  // false
*/

/*
let allPositive = (numbers) => numbers.every((number) => number > 0);
*/