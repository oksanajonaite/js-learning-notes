"use strict";

function getTypeOf (value) {
  return typeof value;
}

// let getTypeOf = value => typeof value; arrow function

console.log(getTypeOf({ car: "Audi"}));
//console.log(getTypeOf(null)); also object, old JS bug
console.log(getTypeOf(true));
console.log(getTypeOf(getTypeOf));
console.log(getTypeOf(2));
console.log(getTypeOf("sun"));
console.log(getTypeOf(undefined));
