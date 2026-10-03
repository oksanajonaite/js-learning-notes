"use strict";

/* 7. Write a function `factors` which is given a number and returns an array containing all its factors. 
Factors lietuviškai yra dalikliai:*/

function factors(number) {
  let result = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(factors(1)); //[ 1 ]
console.log(factors(12)); //[ 1, 2, 3, 4, 6, 12 ]
console.log(JSON.stringify(factors(42))); //[1,2,3,6,7,14,21,42] paverčia masyvą tekstu su skliaustais