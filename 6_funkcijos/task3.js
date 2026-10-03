"use strict";

function calcArea(a, b, c) {
  // calculate semi-perimeter
  let s = (a + b + c) / 2;
  // Multiply the semi-perimeter by the differences
  let radicand = s * (s - a) * (s - b) * (s - c);
  return Math.sqrt(radicand).toFixed(2); // Take the square root. toFixed returns string
  //return Math.round(Math.sqrt(radicand) * 100) / 100; //math.round returns a number
}

console.log(calcArea(5, 6, 7));