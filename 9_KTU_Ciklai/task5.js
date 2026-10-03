"use strict";

/* 5. Draugu skaiciai
input: 2,9,4,100,25,5,6,3,5,85. Result: 4
input: 5,3,99,55,35,47,11,63,51,91. Result Nėra */

function countEvenNumbers() {
  const friendsCount = 10;
  const numbers = [];
  let count = 0;

  for (let i = 1; i <= friendsCount; i++) {
    numbers.push(Number(prompt(`Įveskite draugų sugalvotus skaičius, skaičius ${i}:`))); //supusiname visus skaicius i masyva
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { //ieskome masyve lyginiu skaiciu
      count++;
    }
  }

  if (count > 0) {
    console.log(`Atsakymas: ${count}`);
  } else {
    console.log("Atsakymas: Nėra");
  }
}

countEvenNumbers();