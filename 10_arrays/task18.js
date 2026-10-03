"use strict";

// 18. findInHaystack, which returns true if the value is found in the array and false otherwise.
//sieno kupeta ir adata


function findInHaystack(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

console.log(findInHaystack([1, 2, 30, -10], 480));                       // false
console.log(findInHaystack([1, 2, 30, -10], 30));                        // true
console.log(findInHaystack(['waffle', 'giraffe', 'banana'], 'giraffe')); // true
console.log(findInHaystack(['waffle', 'giraffe', 'banana'], 'lemons'));  // false


/*
includes
let findInHaystack = (haystack, needle) => haystack.includes(needle);
*/