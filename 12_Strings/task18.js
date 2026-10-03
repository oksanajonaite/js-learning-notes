"use strict";

//18. to concatenates a given string n times (default is 1)

function repeat(str, n = 1) {
  return str.repeat(n);
}

console.log(repeat("Ha!")); //Ha!
console.log(repeat("Ha!", 2)); //Ha!Ha!
console.log(repeat("Ha!", 3)); //Ha!Ha!Ha!