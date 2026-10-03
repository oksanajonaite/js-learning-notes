/*
Write a JavaScript function to get the amount of days of a year. 

Test Data :
console.log(days_of_a_year(2015)); 
365
console.log(days_of_a_year(2016));
366
*/
"use strict";

function days_of_a_year(year) {
  const daysInFebruary = new Date(year, 2, 0).getDate();
  return daysInFebruary === 29 ? 366 : 365;
}

console.log(days_of_a_year(2015)); //365
console.log(days_of_a_year(2016)); //366


