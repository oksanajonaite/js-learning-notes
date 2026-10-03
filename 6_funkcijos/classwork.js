"use strict";

function getEvenOrOdd(number) {

  // return number % 2 == 0 ? `Even number ${number}` : `Odd number ${number}`;
  let evenOrOdd = number % 2 == 0 ? `Even number ${number}` : `Odd number ${number}`;
  return evenOrOdd;
}

// getEvenOrOdd(num);
let num = +prompt("Enter number");
let result = getEvenOrOdd(num);

function innerData(d) {
   document.getElementById("result").innerHTML = d;
}

innerData(result);

