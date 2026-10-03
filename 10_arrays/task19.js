"use strict";

// 19. firstIndexOf` looking for index of first occurence with value
//Paprasta taisykle: i yra vieta, array[i] yra tai, kas toje vietoje.

function firstIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(firstIndexOf([10, 20, 30, 20], 20)); // 1
console.log(firstIndexOf([10, 20, 30, 20], 17)); // -1
console.log(firstIndexOf(['giraffe', 'giraffe', 'banana'], 'giraffe')); // 0
console.log(firstIndexOf(['giraffe', 'giraffe', 'banana'], 'banana')); // 2

//indexOf()
//let firstIndexOf = (array, value) => array.indexOf(value);

