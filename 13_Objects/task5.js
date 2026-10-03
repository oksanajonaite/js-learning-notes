"use strict";

const library = [
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Chamber of Secrets",
        readingStatus: true
    },
    {
        author: "Homer",
        title: "The Odyssey",
        readingStatus: true
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        readingStatus: false
    }
];

for (const book of library) { //for of eina per reiksmes, of in per
    if (book.readingStatus) {
        console.log(`Already read ${book.title} by ${book.author}`);
    } else {
        console.log(`You still need to read ${book.title} by ${book.author}`);
    }
}

/*Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
Already read The Odyssey by Homer
You still need to read To Kill a Mockingbird by Harper Lee*/