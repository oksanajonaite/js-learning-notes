/*
Write a JavaScript function to get time differences in weeks between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_weeks(dt1, dt2)); 
18
*/
"use strict";

function diff_weeks(date1, date2) {
  const diffMs = date2 - date1;
  const diffWeeks = diffMs / (1000 * 60 * 60 * 24 * 7);
  return Math.abs(Math.round(diffWeeks)); //
}

const dt1 = new Date("June 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2)); //18

/*
diffMs / (1000)                    // sekundės
diffMs / (1000 * 60)               // minutės
diffMs / (1000 * 60 * 60)          // valandos
diffMs / (1000 * 60 * 60 * 24)     // dienos
diffMs / (1000 * 60 * 60 * 24 * 7) // savaitės*/