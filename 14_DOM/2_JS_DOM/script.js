"use strict";

// 1. Change Heading Text

let h1 = document.getElementById("main-title");
let changeTitleBtn = document.getElementById("change-title-btn");

changeTitleBtn.addEventListener("click", (event) => {
  let title = "New amazing title";
  h1.textContent = title;
});

// 2. Highlight All List Items

let items = document.querySelectorAll("#todo-list li"); //tevas tarpas vaikas
let highlightBtn = document.getElementById("highlight-btn");

highlightBtn.addEventListener("click", (event) => {
  items.forEach((item) => {
    item.style.color = "red";
  });
});

// 3. Toggle Dark Mode Class

let page = document.getElementById("page");
let toggleThemeBtn = document.querySelector("#toggle-theme-btn");

toggleThemeBtn.addEventListener("click", (event) => {
  page.classList.toggle("dark");
});

// 4. Add New List Item from Input

let itemInput = document.getElementById("item-input");
let addItemBtn = document.getElementById("add-item-btn");
let list = document.getElementById("items");

addItemBtn.addEventListener("click", () => {
  let text = itemInput.value;
  if (text === "") {
    return; // sustabdo funkcija, neleidzia ivesti tuscio laukelio
  }
  let newItem = document.createElement("li");
  newItem.textContent = text;
  list.append(newItem);
  itemInput.value = "";
});

// 5. Change Image `src` and `alt`
let img = document.getElementById("preview");
let changeImgBtn = document.getElementById("change-img-btn");

changeImgBtn.addEventListener("click", () => {
  img.src = "img2.png"; // img.setAttribute("src", "img2.jpg");
  img.alt = "Second image"; // img.setAttribute("alt", "Second image");
});

// 6. Show/Hide Paragraph

let secretText = document.getElementById("secret-text");
let toggleTextBtn = document.getElementById("toggle-text-btn");

toggleTextBtn.addEventListener("click", () => {
  if (secretText.style.display === "none") {
    secretText.style.display = "block";
    toggleTextBtn.textContent = "Hide";
  } else {
    secretText.style.display = "none";
    toggleTextBtn.textContent = "Show";
  }
});

/* kitas budas su css
toggleTextBtn.addEventListener("click", () => {
  secretText.classList.toggle("hidden");

  if (secretText.classList.contains("hidden")) {
    toggleTextBtn.textContent = "Show";
  } else {
    toggleTextBtn.textContent = "Hide";
  }
});
*/

// 7. Mouseover Highlight Box

let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "";
});

// 8. Live Character Counter

let textArea = document.getElementById("message");
let charCount = document.getElementById("char-count");

textArea.addEventListener("input", () => {
  charCount.textContent = textArea.value.length; // skaiciuojame raides
});

// 9. Simple Tab Switcher

let tabButtons = document.querySelectorAll(".tab-btn");
let tabs = document.querySelectorAll(".tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let targetId = button.dataset.target;

    tabs.forEach((tab) => {
      tab.style.display = "none";
    });

    //suranda bloka, kurio id sutampa su paspausto mygtuko data-target ir ji parodo
    document.getElementById(targetId).style.display = "block";
  });
});
