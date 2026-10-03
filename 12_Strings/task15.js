"use strict";

//15. converts upper case letters to lower case, and lower case letters to upper case.

function swapcase(str) {
  return str
    .split("")
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

console.log(swapcase("AaBbc")); //aAbBC