"use strict";

// 4. Unique values from array of objects

function returnUniqueTags (posts) {
  const tags = posts.map((post) => post.tags); //istraukiame visus 3 tag masyvu masyva
  const list = tags.flat(); //sudedame i 1 sarasa-masyva
  const unique = new Set(list); //kolekcija kuri leidzia kiekviena reiksme tik 1 karta
  const uniqueTags = Array.from(unique).sort(); //rusiuoja tekstus be funcijos pagal nutylejima
return uniqueTags;

}

const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] }
];
console.log(returnUniqueTags(posts));
/*
[
  'backend', 'css',
  'design',  'frontend',
  'js',      'node',
  'web'
]
  */