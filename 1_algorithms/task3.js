"use strict";

/* Taupyklė. Input: 5,0,3.
Result: Taupyklėje yra 6.25 Lt.*/

const FIVE_CT = 0.05;
const TWENTY_CT = 0.20;
const TWO_LT = 2;

let fiveCents = Number(prompt("Kiek yra monetų po 5 ct?"));
let twentyCents = Number(prompt("Kiek yra monetų po 20 ct?"));
let twoLitas = Number(prompt("Kiek yra monetų po 2 Lt?"));

let totalMoney = FIVE_CT * fiveCents + TWENTY_CT * twentyCents + TWO_LT * twoLitas;

console.log(`Taupyklėje yra ${totalMoney.toFixed(2)} Lt.`);