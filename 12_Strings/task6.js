"use strict";

//6. is_string?

function is_string(input) {
    return typeof input === "string";
}

console.log(is_string('w3resource')); //true
console.log(is_string([1, 2, 4, 0])); //false