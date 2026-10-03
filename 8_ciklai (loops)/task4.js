"use strict";

/*4. Write a function `numberJoinerFor` which does the same thing as `numberJoinerWhile`, 
except using a `for` loop internally.*/

function numberJoinerWhile (startNum, endNum) {
  let text = "";

  for (let current = startNum; current <= endNum; current++) {
    if (current > startNum) {
      text += "_";
    }
    text += current;
  }

  return text;
}

console.log(numberJoinerWhile(1, 10)); //1_2_3_4_5_6_7_8_9_10
console.log(numberJoinerWhile(12, 14)); //12_13_14