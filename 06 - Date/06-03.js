/*
Write a JavaScript function to get the number of days in a month.

Test Data :
console.log(getDaysInMonth(1, 2012)); 
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 
console.log(getDaysInMonth(12, 2012)); 
Output :
31 
29 
30 
31
*/

"use strict";

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate(); //0 reiskia, paskutine ankstesnio menesio diena
}

console.log(getDaysInMonth(1, 2012)); // 31
console.log(getDaysInMonth(2, 2012)); // 29
console.log(getDaysInMonth(9, 2012)); // 30
console.log(getDaysInMonth(12, 2012)); // 31

