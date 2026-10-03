/*
Write a JavaScript function to get the current date. 

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/')); 
console.log(curday('-'));
Output :
"11/13/2014" 
"11-13-2014"
*/

"use strict";

function curday(separator) {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0"); //getDate grazina menesio diena, padStart is 9 padaro 09, padStart veikia tik su tekstu, todel string
  const month = String(today.getMonth() + 1).padStart(2, "0"); //getMonth+1 grazina menesio diena
  const year = today.getFullYear(); //grazina metus

  return month + separator + day + separator + year; //kai stringas jungiamas + su skaiciumi, js automatiskai metus pavercia tekstu
}

console.log(curday("/")); // 09/29/2026
console.log(curday("-")); // 09-29-2026

