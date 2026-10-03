"use strict";

// 3. Write a function `numberJoinerWhile` which is given a start number and an end number.

function numberJoinerWhile (startNum, endNum) {
  let text = "";
  let current = startNum;

  while (current <= endNum) {
    if (current > startNum) {
      text += "_";
    }
    text += current;
    current++;
  }

  return text;
}

console.log(numberJoinerWhile(1, 10)); //1_2_3_4_5_6_7_8_9_10
console.log(numberJoinerWhile(12, 14)); //12_13_14