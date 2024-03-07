// const para = document.querySelector("body > h1:nth-child(1)");
// console.log(para);
// querySelectorAll is used to select all the elements in the document
// but it returns a node list not an array
// it doesn't have all the array methods

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");

paras.forEach((para) => {
  console.log(para);
});
console.log(errors);
