"use strict"

function getMonthDays(monthNum) {

    switch (monthNum) {
        case 2:
            return 29;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        default:
            return "Invalid month number";
    }
}
console.log(getMonthDays(1));
console.log(getMonthDays(9));
console.log(getMonthDays(15));