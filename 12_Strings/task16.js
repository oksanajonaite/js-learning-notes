"use strict";

//16. function to convert a string into camel case

function camelize(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

console.log(camelize("JavaScript Exercises")); //JavaScriptExercises
console.log(camelize("JavaScript exercises")); //JavaScriptExercises
console.log(camelize("JavaScriptExercises"));  //JavaScriptExercises