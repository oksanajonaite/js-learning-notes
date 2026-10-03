"use strict";

//HOF ir callback (sinchroninis)

function remainderOf(n, d) {
  return n % d;
}

//const remainderOf = (n, d) => n % d; arrow function

console.log(remainderOf(10, 1));
console.log(remainderOf(10, 2));
console.log(remainderOf(10, 3));
console.log(remainderOf(10, 4));
console.log(remainderOf(129, 17));