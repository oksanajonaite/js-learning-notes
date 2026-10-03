"use strict";

// 5 Given an array of arrays, flatten them into a single array

function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }

  return result;
}

var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

console.log(flatten(arrays)); 
/*
[
  '1',  '2', '3',
  true, 4,   5,
  6
]
  */

/*
function flatten(arr) {
  return arr.flat();
}
  */