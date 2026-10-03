"use strict";


// for ir while cikla galima nutraukti su komanda break;

let text = "";
let i;

for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "the number is " + i;
}
console.log(text);


