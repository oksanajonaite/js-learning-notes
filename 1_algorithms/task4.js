"use strict";

/* Automobilis. Input: 60.
Result: Automobilis tunelį pravažiuos per 15.84 s*/

const TUNNEL_LENGTH = 264;

let carSpeedInKmH = Number(prompt("Koks automobilio greitis?"));
let carSpeedInMS = carSpeedInKmH / 3600 * 1000;
let time = TUNNEL_LENGTH / carSpeedInMS;

console.log(`Automobilis tunelį pravažiuos per ${time.toFixed(2)} s`);