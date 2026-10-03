"use strict";

/*6. Write a function `gcd` that returns the Greatest Common Divisor of two numbers. 
If no GCD exists, return 1.
GCD (Greatest Common Divisor) lietuviškai yra DBD, didžiausias bendras daliklis. 
Tai didžiausias skaičius, iš kurio abu skaičiai dalijasi be liekanos.*/

function gcd(a, b) {
  let smaller = Math.min(a, b); //surandame maziausia skaiciu

  for (let divisor = smaller; divisor >= 1; divisor--) {
    
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
  }
  return 1;
}

console.log(gcd(5, 1)); //1
console.log(gcd(3, 15)); //3
console.log(gcd(50, 20)); //10