"use strict";

// 6. Kauliukai

function playLottery(diceValues) {
  let diceCount = diceValues.length;
  let maxPoints = diceCount * 6;
  let totalPoints = 0;

  console.log("Įveskite kauliukų kiekį: " + diceCount);
  for (let i = 0; i < diceCount; i++) {
    console.log((i + 1) + "-o kauliuko taškų kiekis: " + diceValues[i]);
    totalPoints += diceValues[i];
  }

  let average = totalPoints / diceCount;

  console.log("Iš viso buvo galima surinkti taškų: " + maxPoints);
  console.log("Tomas iš viso surinko: " + totalPoints + " taškų");
  console.log("Jo taškų vidurkis: " + average.toFixed(1));

  if (totalPoints > maxPoints / 2) {
    console.log("Loterija laimėta.");
  } else {
    console.log("Loterija pralaimėta.");
  }
}

playLottery([5, 3, 2, 1]);
console.log("-----");
playLottery([6, 6, 2, 2, 5, 4, 5]);

/*
2-o kauliuko taškų kiekis: 3
3-o kauliuko taškų kiekis: 2
4-o kauliuko taškų kiekis: 1
Iš viso buvo galima surinkti taškų: 24
Tomas iš viso surinko: 11 taškų
Jo taškų vidurkis: 2.8
Loterija pralaimėta.
-----
Įveskite kauliukų kiekį: 7
1-o kauliuko taškų kiekis: 6
2-o kauliuko taškų kiekis: 6
3-o kauliuko taškų kiekis: 2
4-o kauliuko taškų kiekis: 2
5-o kauliuko taškų kiekis: 5
6-o kauliuko taškų kiekis: 4
7-o kauliuko taškų kiekis: 5
Iš viso buvo galima surinkti taškų: 42
Tomas iš viso surinko: 30 taškų
Jo taškų vidurkis: 4.3
Loterija laimėta.*/