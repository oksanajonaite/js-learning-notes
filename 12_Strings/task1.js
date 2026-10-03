"use strict";

//1. Remove Blanks

function removeBlanks (str) {
    return str.replaceAll(" ", "");
}

console.log(removeBlanks("J a v a")); //Java

//kitas budas

/*
function removeBlanks(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}
*/