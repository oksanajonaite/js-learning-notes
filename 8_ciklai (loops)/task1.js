"use strict";

// 1. Given two integers, function returns the sum of all integers between those two integers,
// inclusive.

function sumOfRange(leftSummand, rightSummand) {
  let sum = 0;

  for (let i = leftSummand; i <= rightSummand; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfRange(1, 5)); //15
console.log(sumOfRange(-3, 4)); //4