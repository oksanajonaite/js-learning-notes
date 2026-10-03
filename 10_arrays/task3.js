"use strict";

// 3. returning max, 3 skirtingi budai

function max(numbers) {
    let highest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }

    return highest;
}

let numbers = [0,5,8,6,45,47,100,12,19,13,15,555,4,7,8,9];
console.log(max(numbers));


/*
math.max grazina didziausia skaiciu, nesupranta masyvo, 
todel reikalingas spread operatorius ... - isskleidzia masyva i atskirus elementus.
function max(numbers) {
  return Math.max(...numbers);
}

let numbers = [0,5,8,6,45,47,100,12,19,13,15,555,4,7,8,9];
console.log(max(numbers)); 
*/

/*
didejancia tvarka
numbers.sort(function (a, b) { return b - a; });

mazejancia tvarka
numbers.sort(function (a, b) { return b - a; });
*/