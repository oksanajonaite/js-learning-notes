"use strict";

// 16. glueArrays, suklijuoti du arrays

function glueArrays (firsArray, secondArray) {
  let result = [];
  for (let i = 0; i < firsArray.length; i++) {
    result.push(firsArray[i]);
  }
  for (let i = 0; i < secondArray.length; i++) {
    result.push(secondArray[i]);
  }

  return result;
}


console.log(glueArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(glueArrays([-10, undefined], [true, 'waffles'])); // [-10, undefined, true, 'waffles']
console.log(glueArrays([], [])); // []
console.log(glueArrays([20, 104], [])); // [20, 104]
console.log(glueArrays([], ['hello', 'world'])); // ['hello', 'world']

/* 
concat skirtas metodas (sujungti)
function glueArrays(firstArray, secondArray) {
  return firstArray.concat(secondArray);
}
su spred opratoiumi ...
let glueArrays = (firstArray, secondArray) => [...firstArray, ...secondArray];
*/