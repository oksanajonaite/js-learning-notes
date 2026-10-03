/*
Write a JavaScript function to add specified years to a date. 
Test Data :
dt = new Date(2014,10,2); 
console.log(add_years(dt, 10).toString());
Output :
"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
*/
"use strict";

function add_years(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

const dt = new Date(2014, 10, 2);
console.log(add_years(dt, 10).toString()); //Sat Nov 02 2024 00:00:00 GMT+0200 (Rytų Europos žiemos laikas)