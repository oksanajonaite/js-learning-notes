"use strict"

function getCurrencySymbol(code) {

    switch (code.toUpperCase()) {
        case "USD":
            return "$";
        case "EUR":
            return "€";
        case "GBP":
            return "£";
        case "JPY":
            return "¥";
        case "CHF":
            return "Fr";
        default:
            return "Unsupported code";
    }
}
console.log(getCurrencySymbol("eur"));
console.log(getCurrencySymbol("JPY"));
console.log(getCurrencySymbol("as"));