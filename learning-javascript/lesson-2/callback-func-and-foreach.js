// callback and foreach

const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

// this is the original form
// myFunc(function(value) {
//   console.log(value);
// });

//this using arrow function
myFunc((value) => {
  console.log(value);
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
// people.forEach(function(person) {
//   console.log(person);
// });

// people.forEach((person) => {
//   console.log(person);
// });

people.forEach((person, index) => {
  console.log(`this person have ${person} in index ${index}`);
});

//we can change it into something like this 
const logPerson = (person, index) => {
  console.log(`this person have ${person} in index ${index}`);
};

people.forEach(logPerson)
