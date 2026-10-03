"use strict";

// 12. only integers and new array

/*
function integers(numbers) {
  let intArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) { //if (numbers[i] % 1 === 0)
      intArray.push(numbers[i]);
    }
  }
  return intArray;
}

console.log(integers([3.14, 2.4, 7, 8.1, 2])); //[7, 2]
*/

// su filter
let integers = (numbers) =>
  numbers.filter((number) => Number.isInteger(number));

console.log(integers([3.14, 2.4, 7, 8.1, 2])); //[7, 2]