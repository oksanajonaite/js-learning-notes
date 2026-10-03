//selectiname duomenis is dokumento

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let cars = document.querySelector("#cars");
let carsForm = document.querySelector("#carsForm");

carsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = fname.value;
  let last = lname.value;
  let car = cars.value;
  let selectGender = document.querySelector("input[name='gender']:checked");
  let gender = selectGender ? selectGender.value : null;

  console.log({ name, last, car, gender });
});
 