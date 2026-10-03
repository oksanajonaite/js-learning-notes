/*
Write a JavaScript function to add specified months to a date. 
Test Data :
dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());
Output :
"Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
*/
"use strict";

function add_months(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

const dt = new Date(2014, 10, 2);
console.log(add_months(dt, 10).toString()); //Wed Sep 02 2015 00:00:00 GMT+0300 (Rytų Europos vasaros laikas)