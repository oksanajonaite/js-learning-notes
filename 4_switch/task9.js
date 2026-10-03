"use strict"

function typeAdvantage(type) {

    switch (type.toLowerCase()) {
        case "fire":
            return "grass";
        case "water":
            return "fire";
        case "grass":
            return "water";
        default:
            return "No advantage";
    }
}
console.log(typeAdvantage("fire"));
console.log(typeAdvantage("WATER"));
console.log(typeAdvantage("sun"));