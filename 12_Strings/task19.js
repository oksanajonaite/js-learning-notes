"use strict";

//19. insert a string within a string at a particular position (default is 1).

function insert(mainString, insString = "", pos = 0) {
  return mainString.slice(0, pos) + insString + mainString.slice(pos);
}

console.log(insert("We are doing some exercises."));
//We are doing some exercises.

console.log(insert("We are doing some exercises.", "JavaScript "));
//JavaScript We are doing some exercises.

console.log(insert("We are doing some exercises.", "JavaScript ", 18));
//We are doing some JavaScript exercises.