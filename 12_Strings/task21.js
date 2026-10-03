"use strict";

/*21. Write a JavaScript function to truncates a string if it is longer 
than the specified number of characters. 
Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.*/

function text_truncate(str, length, ending = "...") {
  if (length === undefined || str.length <= length) {
    return str;
  }
  return str.slice(0, length - ending.length) + ending;
}

console.log(text_truncate("We are doing JS string exercises."));
//We are doing JS string exercises.

console.log(text_truncate("We are doing JS string exercises.", 19));
//We are doing JS ...

console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
//We are doing !!