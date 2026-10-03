/*
Write a JavaScript function to check whether an `input` is a date object or not. 

Test Data :
console.log(is_date("October 13, 2014 11:13:00")); 
console.log(is_date(new Date(86400000))); 
console.log(is_date(new Date(99,5,24,11,33,30,0))); 
console.log(is_date([1, 2, 4, 0]));
Output :
false 
true 
true 
false
*/
"use strict";

function is_date(input) {
  return input instanceof Date; //instanceof tikrina as tai yra date objektas
}

console.log(is_date("October 13, 2014 11:13:00")); //false nes tai string tekstas
console.log(is_date(new Date(86400000))); //true nes tai yra milisekundes nuo 1970-01-01
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0))); //true, nes tikra data 1999 birzleio 24, 11:33:30
console.log(is_date([1, 2, 4, 0])); //false nes tai masyvas