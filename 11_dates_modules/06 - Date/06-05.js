/*
Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 

Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2" 
"Date1 > Date2" 
"Date2 > Date1"
*/

"use strict"

function compare_dates(date1, date2) {
  const time1 = date1.getTime();
  const time2 = date2.getTime();

  if (time1 > time2) {
    return "Date1 > Date2";
  } else if (time1 < time2) {
    return "Date2 > Date1";
  } else {
    return "Date1 = Date2";
  }
}

console.log(compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))); // "Date1 = Date2"
console.log(compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))); // "Date1 > Date2"
console.log(compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))); // "Date2 > Date1"
