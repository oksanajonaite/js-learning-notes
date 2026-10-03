"use strict"

function getTemperatureDescription(temp) {

   switch (true) {
        case temp < 0:
            return "Freezing";
        case temp <= 10:
            return "Cold";
        case temp <= 20:
            return "Mild";
        case temp <= 30:
            return "Warm";
        default:
            return "Hot";
    }
}
console.log(getTemperatureDescription(35));
console.log(getTemperatureDescription(-1));