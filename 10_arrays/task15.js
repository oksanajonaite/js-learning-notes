"use strict";

// 15. squareDance, returns new array pakeltu kvadratu, map

function squareDance(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] ** 2);
  }
  return result;
}

console.log(squareDance([1, 2, 3])); // [1, 4, 9]

/*
variantas su map
function squareDance(numbers) {
  return numbers.map(function (number) {
    return number ** 2;
  });

paaiskinimas kaip veikia map viduje
function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}
}
*/
