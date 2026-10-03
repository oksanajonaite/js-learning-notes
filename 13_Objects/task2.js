"use strict";

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    country: "France",
    print: function() {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.country}`;
    }
};

console.log(person.print()); //John Smith is a 41 year old engineer living in France