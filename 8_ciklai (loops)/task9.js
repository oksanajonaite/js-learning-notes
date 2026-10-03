"use strict";

/* 9. Write a function "makeBox" which is given a width and height and returns a hollow box of those dimensions.
*/

function makeBox(width, height) {
  let box = "";

  for (let row = 0; row < height; row++) {
    if (row > 0) {
      box += "\n";
    }

    for (let col = 0; col < width; col++) {
      let isBorder =
        row === 0 ||
        row === height - 1 || //todel kad skaiciuojame nuo 0, o ne nuo 1.
        col === 0 ||
        col === width - 1; //todel kad skaiciuojame nuo 0, o ne nuo 1.

      if (isBorder) {
        box += "*";
      } else {
        box += " ";
      }
    }
  }

  return box;
}

console.log(makeBox(6, 4));
/*
******
*    *
*    *
******
*/