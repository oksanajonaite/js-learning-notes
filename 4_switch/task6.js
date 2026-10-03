"use strict"

function getGreeting(languageCode) {

    switch (languageCode.toLowerCase()) {
        case "en":
            return "Hello";
        case "lt":
            return "Labas";
        case "fr":
            return "Bonjour";
        case "es":
            return "Hola";
        default:
            return "Language not supported";
    }
}
console.log(getGreeting("lt"));
console.log(getGreeting("LT"));
console.log(getGreeting("it"));