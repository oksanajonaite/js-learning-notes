/*
Write a JavaScript function to add specified minutes to a Date object.

Test Data :
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
*/
"use strict";

function add_minutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000); //60sek ir 1000milisek
}

console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
//Sun Nov 02 2014 00:30:00 GMT+0200 (Rytų Europos žiemos laikas)