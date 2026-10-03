/*
Write a JavaScript function to get the quarter (1 to 4) of the year. 

Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
*/

"use strict";

function quarter_of_the_year(date) {
  const month = date.getMonth() + 1;
  return Math.ceil(month / 3); //Math.ceil apvalina aukštyn iki sveiko skaičiaus.
}

console.log(quarter_of_the_year(new Date(2015, 1, 21))); //1
console.log(quarter_of_the_year(new Date(2015, 10, 18))); //4