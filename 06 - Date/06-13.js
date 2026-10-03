/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/
"use strict";

function timeConvert(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60; //suzinome dalybos liekana

  return `${totalMinutes} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}

console.log(timeConvert(200)); //200 minutes = 3 hour(s) and 20 minute(s).

