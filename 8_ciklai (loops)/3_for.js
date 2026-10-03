"use strict";

//do..while pirma padaro veiksma, o veliau patikrina salyga.
//do visada kazka atliks nors 1 karta

let sum = 0;
let n = 100;

//initialExpression; condition; updateExpression

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`sum:`, sum);
