"use strict";

//14. capitalize the first letter of each word

function capitalize_Words(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize_Words("js string exercises")); //Js String Exercises