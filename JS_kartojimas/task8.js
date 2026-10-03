"use strict";

// 8. „simuliuokMiegoGrafika“

function simuliuokMiegoGrafika(yesterday, today, dayBeforeYesterday) {
  let average = (yesterday + today + dayBeforeYesterday) / 3;
  let shown = Math.floor(average * 10) / 10; // 6.666... → 6.6

  let verdict;
  if (shown < 6) {
    verdict = "esi zombis";
  } else if (shown <= 7) {
    verdict = "normaliai išsilaikei";
  } else {
    verdict = "miego karalius";
  }

  return `Vidurkis ${shown} - ${verdict}`;
}

console.log(simuliuokMiegoGrafika(5, 7, 8)); //Vidurkis 6.6 – normaliai išsilaikei
console.log(simuliuokMiegoGrafika(4, 5, 6)); //Vidurkis 5 – esi zombis
console.log(simuliuokMiegoGrafika(8, 9, 7)); //Vidurkis 8 – miego karalius