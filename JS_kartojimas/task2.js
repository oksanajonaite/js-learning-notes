"use strict";

// 2. „atrinkPoilsioDienas“

function atrinkPoilsioDienas(days) {
  let result = [];

  for (let i = 0; i < days.length; i++) {
    let hoursText = days[i].split(": ")[1];   // "5h mokymosi"
    let hours = parseInt(hoursText);          // 5

    if (hours < 3) {
      result.push(days[i] + " - pagaliau pailsėjai bent truputį!");
    }
  }

  return result;
}

let week = [
  "Pirmadienis: 5h mokymosi",
  "Antradienis: 2h mokymosi",
  "Trečiadienis: 4h mokymosi",
  "Ketvirtadienis: 1h mokymosi"
];

console.log(atrinkPoilsioDienas(week));

/*
'Antradienis: 2h mokymosi – pagaliau pailsėjai bent truputį!',
'Ketvirtadienis: 1h mokymosi – pagaliau pailsėjai bent truputį!'
  */

function atrinkPoilsioDienas(days) {
  return days
    .filter(day => parseInt(day.split(": ")[1]) < 3)
    .map(day => day + " - pagaliau pailsėjai bent truputį!");
}
