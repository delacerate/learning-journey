// object literals
//
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
};

console.log(user);
console.log(user.name);

//this for override the value of age
user.age = 35;
console.log(user.age);

//this can be helpful if we want to pass some variable
const key = "location";

//this another way to access the update properties
console.log(user["key"]);
user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);
