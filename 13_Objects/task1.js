"use strict";

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

const keys = Object.keys(student);

console.log(keys); //[ 'firstName', 'lastName', 'class' ]

//masyva i teksta pavercia join

console.log(keys.join(", ")); //firstName, lastName, class