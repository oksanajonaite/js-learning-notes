/*
Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(short_Days(dt));
"Sun"
*/
"use strict";

function short_Days(date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayNames[date.getDay()];
}

const dt = new Date(2015, 10, 1);
console.log(short_Days(dt)); //Sun
