"use strict";


// viena for ir while ciklo iteracija galima praleisti su komanda continue;
//A loop which will skip the step where i = 3.

let text = "";
let i;

for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "the number is " + i;
}
console.log(text);


