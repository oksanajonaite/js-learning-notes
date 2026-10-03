"use strict";

// 2. Degalai.

function countTripDays(tank, consumption) {
  let fuel = tank;
  let day = 0;

  while (fuel > 0) {
    day++;

    if (day % 2 === 0) {
      fuel -= consumption;
    } else {
      fuel -= consumption * 2;
    }
  }

  console.log(`Keliauti bus galima ${day} dienų/(as)/(ą).`);
}

countTripDays(20, 5); //Keliauti bus galima 3 dienų/(as)/(ą).
countTripDays(112, 11); //Keliauti bus galima 7 dienų/(as)/(ą).