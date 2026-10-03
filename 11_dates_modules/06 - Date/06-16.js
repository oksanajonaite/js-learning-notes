/*
Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15))); 
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/
"use strict";

function days_passed(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const msInDay = 1000 * 60 * 60 * 24;

  const diffDays = Math.round((date - startOfYear) / msInDay); //Pastaba: date - startOfYear veikia ir be getTime(), nes - visada paverčia datas skaičiais
  return diffDays + 1; //iskaiciuoja skaicuojancia diena
}

console.log(days_passed(new Date(2015, 0, 15))); //15
console.log(days_passed(new Date(2015, 11, 14))); //348

