"use strict";

/* Pamoka. Input: 5,6,4,5,4.
Result: Pamokų skaičius: 24, Tai sudaro minučių: 1080*/

let days = ["pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį"];
let lessons = 0;

for (let i = 0; i < days.length; i++) {
    lessons += Number(prompt(`Kiek pamokų yra ${days[i]}?`));
}
console.log(`Pamokų skaičius: ${lessons}`);

const LESSON_MINUTES = 45;
let minutes = lessons * LESSON_MINUTES;
console.log(`Tai sudaro minučių: ${minutes}`);