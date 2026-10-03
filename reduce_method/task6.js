"use strict";

// 6 Given an array of potential voters, return an object representing the results of the vote

function voterResults(arr) {
const result = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  };

  for (let i = 0; i < arr.length; i++) {
    const voter = arr[i];

    if (voter.age >= 18 && voter.age <= 25) {
      result.numYoungPeople++;
      if (voter.voted) {
        result.numYoungVotes = result.numYoungVotes + 1;
      }
    } else if (voter.age >= 26 && voter.age <= 35) {
      result.numMidsPeople++;
      if (voter.voted) {
        result.numMidVotesPeople = result.numMidVotesPeople + 1;
      }
    } else if (voter.age >= 36 && voter.age <= 55) {
      result.numOldsPeople++;
      if (voter.voted) {
        result.numOldVotesPeople = result.numOldVotesPeople + 1;
      }
    }
  }

  return result;
}

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

console.log(voterResults(voters));
/*
{
  numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
  */