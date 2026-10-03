"use strict";

// 1. Change the background color of a `<div>` to "lightblue"

let box1 = document.getElementById("box1");
box1.style.backgroundColor = "lightblue";

// 2. Set the text color of all `<p>` elements to "green"

let box = document.querySelectorAll("#task2 p");

box.forEach((b) => {
    b.style.color = "green";
});

// 3. Make a heading (`<h1>`) centered using `style.textAlign`

let heading = document.getElementById("heading3");
heading.style.textAlign = "center";

// 4. Increase the font size of an element with class "title" to "30px"

let element = document.querySelector(".title");
element.style.fontSize = "30px";

// 5. Set an image's `src` attribute to a new URL and update its alt text

let img = document.getElementById("image5");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "Second image");

// 6. Add a `title` attribute to a `<div>` with the text "Hover tooltip"

let box6 = document.getElementById("box6");
box6.setAttribute("title", "Hover tooltip");

// 7. Replace the inner HTML of a `<section>` with a new heading and paragraph

let section = document.getElementById("section7");
section.innerHTML = "<h2>New heading</h2><p>New paragraph</p>";

// 8. Wrap an existing `<p>` element's content in a `<strong>` tag using `innerHTML`

let paragraph = document.getElementById("paragraph8");
paragraph.innerHTML = "<strong>" + paragraph.innerHTML + "</strong>";

// 9. Change the background color and border of all elements with class "card"
let card = document.querySelectorAll(".card");
card.forEach((c) => {
    c.style.backgroundColor = "blue";
    c.style.border = "2px solid red";
});

// 10. Add a link inside a `<footer>` by setting its `innerHTML` to `<a href='https://example.com'>Visit Example</a>`
let footer = document.getElementById("footer10");
footer.innerHTML = "<a href='https://example.com'>Visit Example</a>";