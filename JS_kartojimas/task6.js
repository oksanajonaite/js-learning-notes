"use strict";

// 6. „susidarykToDo“

function susidarykToDo(list) {
  let todo = [...list];

  todo.push("isgerti arbatos"); // ideda i pabaiga
  todo.shift(); //ismeta pirma darba
  return todo;
}

let list = ["anksti atsikelti", "papusryciauti", "isvesti sunis"];
console.log(susidarykToDo(list));
//[ 'papusryciauti', 'isvesti sunis', 'isgerti arbatos' ]