"use strict";

/*5. Write a function `numberJoinerFancy` which does the same thing as `numberJoinerWhile`, 
except it takes an optional third argument specifying the separator between the numbers.
Use either a `while` or a `for` loop (your preference).*/

function numberJoinerFancy (startNum, endNum, separator = "_") { //separator - jei naujas argumentas nepaduotas, naudok si
  let text = "";

  for (let current = startNum; current <= endNum; current++) {
    if (current > startNum) {
      text += separator
    }
    text += current;
  }

  return text;
}

console.log(numberJoinerFancy(1, 10)); //1_2_3_4_5_6_7_8_9_10
console.log(numberJoinerFancy(1, 10, "~")); //1~2~3~4~5~6~7~8~9~10
console.log(numberJoinerFancy(12, 14, "***_BANANAS_**")); //12***_BANANAS_**13***_BANANAS_**14