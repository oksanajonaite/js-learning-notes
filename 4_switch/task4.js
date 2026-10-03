"use strict"

function getGradeDescription(grade) {

    switch (grade.toUpperCase()) {
        case "A":
            return "Excellent";
        case "B":
            return "Good";
        case "C":
            return "Average";
        case "D":
            return "Poor";
        case "F":
            return "Fail";
        default:
            return "Invalid grade";
    }
}
console.log(getGradeDescription("a"));
console.log(getGradeDescription("D"));
console.log(getGradeDescription("Q"));