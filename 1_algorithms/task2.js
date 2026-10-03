"use strict";

/* Akvariumas. Input: 5,3,3.
Result: Po 3 dienų akvariume gyvens 14 žuvų.*/

let fishes = +prompt("Kiek žuvų gyvena akvariume?");
let addedFishes = +prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?");
let days = +prompt("Kiek dienų praėjo?");

let totalFishes = fishes + addedFishes * days;

console.log(`Po ${days} dienų akvariume gyvens ${totalFishes} žuvų.`);