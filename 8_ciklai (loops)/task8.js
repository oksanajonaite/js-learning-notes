"use strict";

/* 8. Write a function `makeSquare` which is given a size and returns a square of that size using asterisks.
*/

function makeSquare(size) {
  let square = "";

  for (let row = 0; row < size; row++) { //galima naudoti ir nuo 1, bet tuomet bus row <= size
    if (row > 0) {                       //ir tuomet ir cia bus row > 1
      square += "\n";
    }

    for (let col = 0; col < size; col++) {
      square += "*";
    }
  }

  return square;
}

console.log(makeSquare(5));
/*
*****
*****
*****
*****
*****
*/