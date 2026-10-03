"use strict";

// 1. **Button Click Counter**

let button = document.getElementById("counter-btn");
let counterSpan = document.getElementById("counter");
let count = 0;

button.addEventListener("click", () => {
    count++;
    counterSpan.textContent = count;
});

// 2. **Input Live Preview**

let input = document.getElementById("preview-input");
let previewText = document.getElementById("preview-text");

input.addEventListener("input", () => {
    previewText.textContent = input.value; //be value bus visa eilute, o ne tekstas
});

// 3. **Change Background on Hover**

let box = document.getElementById("hover-box");

box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "red";
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "";
});
