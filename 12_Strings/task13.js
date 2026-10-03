"use strict";

//13. capitalize the first letter of a string.

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("js string exercises")); //Js string exercises