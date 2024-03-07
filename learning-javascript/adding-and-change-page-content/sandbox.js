const para = document.querySelector("p");

// console.log(para.innerText);
// para.innerText = "ninjas is awesome";
//
const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });
//
const content = document.querySelector(".content");
const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
// content.innerHTML = "<h2>THIS IS THE NEW H2</h2>";
// console.log(content.innerHTML);
