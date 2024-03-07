// get an element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// it doesnt return a nodelist, it returns an HTML collection
// and it doesnt show like node list, it shows like an array
//
// so the htmlcollection methods is
// .item() and namedItem()
// and the node list methods is
// item() .entries(), .forEach(), .keys(), .values()
// errors.forEach((error) => {
//   console.log(error);
// });

// get elements by their tag name
//
const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[1]);
