"use strict";

// 5. Find the most frequent character in a string

function getMostFrequentChar (input) {
  const text = input.split(" ").join("").toLowerCase(); //split pavercia masyvu, join pavercia tekstu
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const count = text.split("").filter((letter) => letter === char).length; //palieka tik tas raides, kurios lygios dabartinei, o length yra count

    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

let input = "Hello world";
console.log(getMostFrequentChar(input)); //l