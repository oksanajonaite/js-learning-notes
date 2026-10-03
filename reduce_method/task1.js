"use strict";

// 1. Turn an array of numbers into a total of all the numbers

function total(arr) {
  total = arr.reduce((a,b) => a+b, 0);
  return total;
}
console.log(total([1, 2, 3])); // 6
