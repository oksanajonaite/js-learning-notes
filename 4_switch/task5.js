"use strict"

function getDriverAction(trafficColor) {

    switch (trafficColor.toLowerCase()) {
        case "red":
            return "Stop";
        case "yellow":
            return "Slow down";
        case "green":
            return "Go";
        default:
            return "Unknown light";
    }
}
console.log(getDriverAction("red"));
console.log(getDriverAction("GREEN"));
console.log(getDriverAction("black"));