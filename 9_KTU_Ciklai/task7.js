"use strict";

// 7. Suoliai per virvute

function countJumps(jumps) {
  let attempts = jumps.length;
  let total = 0;

  console.log("Kiek kartų šokinėjo: " + attempts);
  for (let i = 0; i < attempts; i++) {
    console.log("Kiek sušokinėjo kartų " + (i + 1) + " bandymu: " + jumps[i]);
    total += jumps[i];
  }

  let average = total / attempts;

  console.log("Iš viso: " + total);
  console.log("Vidutiniškai: " + average);
}

countJumps([20, 40, 30]);
console.log("-----");
countJumps([10, 20]);

/*Kiek kartų šokinėjo: 3
Kiek sušokinėjo kartų 1 bandymu: 20
Kiek sušokinėjo kartų 2 bandymu: 40
Kiek sušokinėjo kartų 3 bandymu: 30
Iš viso: 90
Vidutiniškai: 30
-----
Kiek kartų šokinėjo: 2
Kiek sušokinėjo kartų 1 bandymu: 10
Kiek sušokinėjo kartų 2 bandymu: 20
Iš viso: 30
Vidutiniškai: 15*/