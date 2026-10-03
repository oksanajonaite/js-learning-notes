"use strict";

// 2. Write a function `fizzbuzz` that returns the fizzbuzz string for an input number.

function fizzbuzz(number) {
  let result = "";

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "fizzbuzz";
    } else if (i % 3 === 0) {
      result += "fizz";
    } else if (i % 5 === 0) {
      result += "buzz";
    } else {
      result += ".";
    }
  }

  return result;
}

console.log(fizzbuzz(3)); //..fizz
console.log(fizzbuzz(15)); //..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz