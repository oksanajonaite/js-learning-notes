"use strict"

let now1 = new Date(0); //1970-01-01T00:00:00.000Z
console.log(now1);

let birthDateString = "1986-10-30";
let birthDate = new Date(birthDateString);
let milliseconds = birthDate.getTime();

console.log(milliseconds);

let birthday = new Date(milliseconds);
console.log(birthday);

let now = new Date(); //2026-09-22T14:50:41.970Z
let timestamp = now.getTime();
console.log(timestamp);
// console.log(timestamp - birthday);

let age = (timestamp - birthday) / 1000 / 3600 / 24 / 365;
console.log(age);


