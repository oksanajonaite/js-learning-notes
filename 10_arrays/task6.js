"use strict";

// 6. Given an array of numbers, return their product. Use reduce metod.

function product(numbers) {
  return numbers.reduce(function (result, currentNumber) {
    return result * currentNumber; 
  }, 1); //naudojame ne 0, o 1!!!
}

console.log(product([2, 4, 6]));  // 48
console.log(product([-10, 10]));  // -100


/*
let product = (numbers) => numbers.reduce((result, currentNumber) => result * currentNumber, 1);
*/