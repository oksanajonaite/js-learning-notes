"use strict";

//17. to uncamelize a string

function uncamelize(str, separator = " ") {
  return str
    .replace(/[A-Z]/g, letter => separator + letter.toLowerCase()) //suranda kiekviena didziaja raide, g reiskia kiekviena atitikmeni
    .trim();
}

console.log(uncamelize("helloWorld")); //hello world
console.log(uncamelize("helloWorld", "-")); //hello-world
console.log(uncamelize("helloWorld", "_")); //hello_world