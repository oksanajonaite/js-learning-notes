"use strict";

//2. Get Digits

function getDigits(str) {
    let digits = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            digits += str[i];
        }
    }
    return Number(digits);
}

console.log(getDigits("zxc78as8er8t9t6asd544")); //788896544
