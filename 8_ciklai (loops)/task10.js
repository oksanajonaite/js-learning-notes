"use strict";

// 10. makeBanner

function makeBanner(text) {
  let width = text.length + 4;
  let border = "";

  for (let i = 0; i < width; i++) {
    border += "*";
  }

  let middle = "* " + text + " *";

  return border + "\n" + middle + "\n" + border;
}

console.log(makeBanner("Welcome to DigitalCrafts"));
/*
****************************
* Welcome to DigitalCrafts *
****************************
*/