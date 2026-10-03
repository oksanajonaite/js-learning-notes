/*
 Write a JavaScript function to get time differences in years between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2017 11:13:00"); 
console.log(diff_years(dt1, dt2)); 
3
*/
"use strict";

function diff_years(date1, date2) {
  return Math.abs(date2.getFullYear() - date1.getFullYear());
}

const dt1 = new Date("June 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2)); //3
