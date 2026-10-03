"use strict";

//5. Remove Shorter Strings

function removeShorterStrings(arr, minLength) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeShorterStrings(["evening", "cat", "cream", "sweed dreams", "hi", "birthday"], 5));
//[ 'evening', 'cream', 'sweed dreams', 'birthday' ]