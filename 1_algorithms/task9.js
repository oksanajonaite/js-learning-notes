"use strict";

/* Gimtadienis. Input:20,4,24.
Result: Kiekvienas šventės dalyvis gavo po 4 sausainius. Tautvydui papildomai atiteko 4 sausainiai.*/

let tautvydasCookies = Number(prompt("Kiek sausainių iškepė Tautvydas"));
let friendsCookies = Number(prompt("Keli draugai dar atsinešė po tiek pat sausainių?"));
let guestCount = Number(prompt("Kiek žmonių dalyvavo šventėje?"));

let allCookies = friendsCookies * tautvydasCookies + tautvydasCookies;
let cookiesPerGuest = Math.floor(allCookies / guestCount);
let remainingCookiesForTautvydas = allCookies % guestCount;

console.log(`Kiekvienas šventės dalyvis gavo po ${cookiesPerGuest} sausainius`);
console.log(`Tautvydui papildomai atiteko ${remainingCookiesForTautvydas} sausainiai`);