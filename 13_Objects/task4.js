"use strict";

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    country: "France"
};

const length = Object.keys(person).length;

console.log(length); //5