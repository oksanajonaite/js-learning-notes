"use strict";

/* Keltas. Input:27,10.
Result: Perkels per kartų: 2. Liks neperkelta: 7.*/

let carCount = Number(prompt("Automobilių skaičius:"));
let ferryCapacity = Number(prompt("Į keltą telpa automobilių:"));

let ferryTrips = Math.floor(carCount / ferryCapacity);
let remainingCars = carCount % ferryCapacity;

console.log(`Perkels per kartų: ${ferryTrips}`);
console.log(`Liks neperkelta: ${remainingCars}`);