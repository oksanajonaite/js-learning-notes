"use strict";

//4. Count Non-Spaces

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("good things happens")); //14
console.log(countNonSpaces("a lot of homework")); //14
console.log(countNonSpaces("i miss you")); //8

/*
function countNonSpaces(str) {
    return str.replaceAll(" ", "").length;
}
*/