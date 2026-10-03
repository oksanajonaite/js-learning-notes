/*
Write a JavaScript function to calculate 'yesterday day'.

Test Data :
console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
console.log(yesterday('Nov 17, 2016'));
Output :
"Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
"Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)" 
"Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
*/

"use strict";

function yesterday(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() - 1);
  return date.toString();
}

console.log(yesterday("Nov 15, 2014")); //Fri Nov 14 2014 00:00:00 GMT+0200 (Rytų Europos žiemos laikas)
console.log(yesterday("Nov 16, 2015")); //Sun Nov 15 2015 00:00:00 GMT+0200 (Rytų Europos žiemos laikas)
console.log(yesterday("Nov 17, 2016")); //Wed Nov 16 2016 00:00:00 GMT+0200 (Rytų Europos žiemos laikas)


