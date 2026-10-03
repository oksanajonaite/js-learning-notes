"use strict";

// 11. `skaiciuokPuslapius`

function skaiciuokPuslapius(min) {
  if (min < 10) return 0;

  let pages = 0;
  let timeLeft = min;
  do {
    pages++;
    timeLeft = timeLeft - 10;
  } while (timeLeft >= 10);

  return pages;
}

console.log(skaiciuokPuslapius(35)); // 3

// function skaiciuokPuslapius(min) {
//   let pages = Math.floor(min/10);
//   return pages;
// }

// console.log(skaiciuokPuslapius(35));
