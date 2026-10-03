"use strict";

// 3. Saldainiai

function countCandyDays(candies, eatenPerDay) {
  let days = 0;
  let i = 0;

  console.log("Petriukas gavo saldainių: " + candies);

  while (i < eatenPerDay.length && candies >= eatenPerDay[i]) {
    console.log("Per dieną suvalgė: " + eatenPerDay[i]);
    candies = candies - eatenPerDay[i];
    days++;
    i++;
  }

  console.log("Petriukui saldainių užteks " + days + " dienoms ir jam liks " + candies + " saldainiai.");
}

countCandyDays(25, [7, 7, 8, 5]);

/*
Petriukas gavo saldainių: 25
Per dieną suvalgė: 7
Per dieną suvalgė: 7
Per dieną suvalgė: 8
Petriukui saldainių užteks 3 dienoms ir jam liks 3 saldainiai.
*/