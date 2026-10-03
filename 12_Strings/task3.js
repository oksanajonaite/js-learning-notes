"use strict";

//3. Acronyms

function acronym(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && (i === 0 || str[i - 1] === " ")) {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(acronym("abracadabra")); //A
console.log(acronym("as soon as possible")); //ASAP
console.log(acronym("graphics interchange forma")); //GIF
console.log(acronym("do it yourself")); //DIY
