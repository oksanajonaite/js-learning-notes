"use strict";

// 4. „skaiciuokPertraukas“

function suskaiciuokPertraukas(hours) {
  let blocks = 0;
  let minutes = hours * 60;

  while (minutes >= 45) {
    minutes = minutes - 45;
    blocks++;
  }
  return blocks;
}

console.log(suskaiciuokPertraukas(3)); //4
