// let root = document.getElementById("root");
// console.log(root);

// let root = document.getElementsByTagName("p");
// console.log(root);

// let root = document.querySelectorAll("p");
// console.log(root);

// let root = document.querySelector("p");
// root.innerHTML = "Test test";
// console.log(root.innerHTML);

// let showImage = () => {
//   let image = document.querySelector("#logo");
//   image.setAttribute("src", "images/logo2.png");
// };

// let root = document.getElementById("root");

let div = document.querySelector('#root');
let button = document.querySelector('#button');

button.addEventListener("click", (event) => {
    div.innerHTML = div.innerHTML ? "" : "Labas";
    console.log(event);
    event.target.style.backgroundColor = "yellow";
})


