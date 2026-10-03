/*
Write a JavaScript function to test whether a date is a weekend. 

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/

"use strict";

//getDay() savaitės diena, 0–6; su getDate() menesio diena, 1–31.

function is_weekend(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();

  if (day === 0 || day === 6) {
    return "weekend";
  }
}

console.log(is_weekend("Nov 15, 2014")); //weekend
console.log(is_weekend("Nov 16, 2014")); //weekend
console.log(is_weekend("Nov 17, 2014")); //undefined