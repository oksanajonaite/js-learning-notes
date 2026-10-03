"use strict";

// 7. `anyPositive` is any element is positive

function anyPositive(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) { //0 neigiamas skaicius
      return true;
    }
  }
  return false;
}

console.log(anyPositive([1, 2, 3, 4, 5])); //true
console.log(anyPositive([1, 2, -3, 4, 5])); // true
console.log(anyPositive([0, 0, 1])); // true
console.log(anyPositive([-10, -10, -10])); //false
console.log(anyPositive([-10, -10, 1])); //true

/*
function anyPositive(numbers) {
  return numbers.some(function (number) {
    return number > 0;
  });
}

console.log(anyPositive([1, 2, 3, 4, 5]));   // true
console.log(anyPositive([1, 2, -3, 4, 5]));  // true
console.log(anyPositive([0, 0, 1]));         // true
console.log(anyPositive([-10, -10, -10]));   // false
console.log(anyPositive([-10, -10, 1]));     // true
console.log(anyPositive([0, 0, 0]));         // false
*/

/*
trumpiau - some klausia ar bent vienas, bet jei reikia kad visi reikia rinktis every()
let anyPositive = (numbers) => numbers.some((number) => number > 0);
*/