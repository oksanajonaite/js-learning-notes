"use strict";

const range = {
    min: 0,
    max: 5,
    includes(number) {
        return number >= this.min && number <= this.max;
    }
};

console.log(range.includes(4));  // true
console.log(range.includes(7));  // false

/*
function isInRange(number, range) {
    return number >= range.min && number <= range.max;
}

console.log(isInRange(4, { min: 0, max: 5 }));   // true
console.log(isInRange(4, { min: 4, max: 5 }));   // true
console.log(isInRange(4, { min: 6, max: 10 }));  // false
console.log(isInRange(5, { min: 5, max: 5 }));   // true
*/