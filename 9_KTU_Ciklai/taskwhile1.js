"use strict";

// 1. Voveriukai.

function countDays (nuts, babies) {
  const dailyNuts = (babies + 1) * 3;
  let days =0;

  while (nuts > dailyNuts) {
    nuts -= dailyNuts;
    days++;
  }
  console.log(`Riešutų sukaupta ${days} dienoms`);

  if (days >= 92) {
    console.log("Riešutų užteks visai žiemai");
  } else {
    console.log("Riešutų neužteks visai žiemai");
  }
}

countDays(900, 2);
countDays(800, 3);

/*
Riešutų sukaupta 99 dienoms
Riešutų užteks visai žiemai

Riešutų sukaupta 66 dienoms
Riešutų neužteks visai žiemai
*/