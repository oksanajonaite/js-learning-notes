"use strict";

/* Mariaus saldainiai. Input:15,4,22.
Result: Marius dovanas paruoš 60 draugų. Supakavus dovanas liks 2 saldainiai.*/

let candyPerDay = Number(prompt("Kiek saldainių gauna Marius?"));
let eatPerDay = Number(prompt("Po kiek saldainių suvalgo?"));
let daysLeft = Number(prompt("Kelios dienos liko iki Kalėdų?"));

let candiesPerGift = eatPerDay; //task condition

let savedCandies = daysLeft * (candyPerDay - eatPerDay);
let gifts = Math.floor(savedCandies / candiesPerGift);
let remainingCandies = savedCandies % candiesPerGift;

console.log(`Marius dovanas paruoš ${gifts} draugų.`);
console.log(`Supakavus dovanas liks ${remainingCandies} saldainiai.`);