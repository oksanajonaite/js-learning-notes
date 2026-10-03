/*
Write a JavaScript function to get time differences in days between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_days(dt1, dt2));
6
*/
"use strict";

function diff_days(date1, date2) {
  const diffMs = date2 - date1;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return Math.abs(Math.round(diffDays)); //Math.abs nuima minusą, jei datos paduotos atvirkščiai.
}

const dt1 = new Date("October 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2)); //6