/*
Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(long_Days(dt));
"Sunday"
*/
"use strict";

function long_Days(date) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[date.getDay()];
}

const dt = new Date(2015, 10, 1);
console.log(long_Days(dt)); //Sunday
