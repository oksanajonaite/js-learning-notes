"use strict"

function checkDivisibility(number) {
    return number % 5 === 0 ? "Divisible" : "Not divisible";
}

console.log(checkDivisibility(25));
console.log(checkDivisibility(7));