"use strict";

// 11. Search with multiple filters

const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] }
];

function searchBooks(books, { minPages, hasTag }) {
  
 const result = [];

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const enoughPages = book.pages >= minPages;
    const hasRequiredTag = book.tags.includes(hasTag);

    if (enoughPages && hasRequiredTag) {
      result.push(book);
    }
  }

  return result;
}

console.log(searchBooks(books, { minPages: 150, hasTag: "css" }));

/*
[
  { title: 'CSS Mastery', pages: 200, tags: [ 'css' ] },
  {
    title: 'HTML & CSS',
    pages: 150,
    tags: [ 'html', 'css', 'beginner' ]
  }
]
  */