/*
Write a JavaScript function to get time differences in months between two dates. 
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_months(dt1, dt2)); 
*/
"use strict";

function diff_months(date1, date2) {
  const yearDiff = date2.getFullYear() - date1.getFullYear();
  const monthDiff = date2.getMonth() - date1.getMonth();
  return Math.abs(yearDiff * 12 + monthDiff);
}

const dt1 = new Date("June 13, 2014 08:11:00");
const dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2)); //4