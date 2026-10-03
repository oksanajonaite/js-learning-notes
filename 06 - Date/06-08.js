/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

"use strict";

function date_diff_indays(date1, date2) {
  const start = new Date(date1);
  const end = new Date(date2);

  const diffMs = end.getTime() - start.getTime(); //skirtumas milisekundemis
  const msInDay = 1000 * 60 * 60 * 24; //milisekundes paroje

  return Math.round(diffMs / msInDay);
}

console.log(date_diff_indays("04/02/2014", "11/04/2014")); //216
console.log(date_diff_indays("12/02/2014", "11/04/2014")); //-28
