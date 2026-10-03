/*
Write a JavaScript function to get time differences in hours between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_hours(dt1, dt2)); 
3
*/
"use strict";

function diff_hours(date1, date2) {
  const diffMs = date2 - date1;
  const diffHours = diffMs / (1000 * 60 * 60);
  return Math.abs(Math.round(diffHours)); //Math.abs nuima minusą, jei datos paduotos atvirkščiai.
}

const dt1 = new Date("October 13, 2014 08:11:00");
const dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2)); //3