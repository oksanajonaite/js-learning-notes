"use strict";

// 4. sumNumbers and reduce method

/*
function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

let numbers = [0,5,8,6,45,47,100,12,19,13,15,555,4,7,8,9];
console.log(sumNumbers(numbers));
*/


function sumNumbers(numbers) {
  return numbers.reduce(function (sum, currentNumber) { //ka daryti su elementais
    return sum + currentNumber;
}, 0); //pradine reiksme
}

let numbers = [0,5,8,6,45,47,100,12,19,13,15,555,4,7,8,9];
console.log(sumNumbers(numbers)); 


/*
let sumNumbers = (numbers) => numbers.reduce((sum, currentNumber) => sum + currentNumber, 0);
*/


