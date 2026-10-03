"use strict";

/* Statybininkas. Input:4,3,0.5
Result: Plytų kiekis: 600. Plytos kainuos 300.00 Lt*/

let wallLengthM = Number(prompt("Sienos ilgis"));
let wallHeightM = Number(prompt("Sienos aukštis"));
let brickPrice = Number(prompt("Plytos kaina"));

let wallArea = wallLengthM * wallHeightM;

let brickArea = 20 * 10 / 10000;

let brickCount = wallArea / brickArea;

let totalBrickPrice = brickPrice * brickCount;

console.log(`Plytų kiekis: ${brickCount}`);
console.log(`Plytos kainuos ${totalBrickPrice.toFixed(2)} Lt`);