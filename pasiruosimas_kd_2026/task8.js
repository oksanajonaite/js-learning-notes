"use strict";

// 8. Merge arrays of objects by id

function mergeById(people, scores) {

 const result = [];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    let foundScore;

    for (let j = 0; j < scores.length; j++) {
      if (scores[j].id === person.id) {
        foundScore = scores[j].score;
      }
    }

    const merged = {
      id: person.id,
      name: person.name,
      score: foundScore
    };

    result.push(merged);
  }

  return result;
}

const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" }
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 }
];

console.log(mergeById(people, scores));
/*
[
  { id: 1, name: "Jonas", score: 10 },
  { id: 2, name: "Ona", score: 9 },
  { id: 3, name: "Petras", score: 7 }
]
  */