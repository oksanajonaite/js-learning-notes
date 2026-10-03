"use strict"

function getExamResult(score) {
    return score >= 50 ? "Pass" : "Fail";
}

console.log(getExamResult(99));
console.log(getExamResult(50));
console.log(getExamResult(49));