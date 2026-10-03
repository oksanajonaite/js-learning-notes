"use strict";

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12
};

console.log(student); //{ firstName: 'John', lastName: 'Smith', class: 12 }

delete student.class;

console.log(student); //{ firstName: 'John', lastName: 'Smith' }

/* arba galima per raktu masyva istrinti paskutini, nezinant jo pavadinimo
const keys = Object.keys(person);
const lastKey = keys[keys.length - 1];

delete person[lastKey];*/