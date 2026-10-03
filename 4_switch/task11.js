"use strict"

function getShippingCost(weight) {

    switch (true) {

        case weight <= 0:
            return "Wrong weight";
        case weight < 1:
            return 2.50;
        case weight <= 5:
            return 5;
        case weight <= 10:
            return 8.50;
        case weight <= 20:
            return 15;
        default:
            return "Too heavy for standard shipping";
    }
}
console.log(getShippingCost(1).toFixed(2));
console.log(getShippingCost(5.5).toFixed(2));
console.log(getShippingCost(20.5));
console.log(getShippingCost(-10));
console.log(getShippingCost(0));
console.log(getShippingCost(0.5).toFixed(2));