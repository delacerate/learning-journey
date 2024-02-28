// object literals
//
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
  logBlogs: function(){}
};

user.login();
user.logout();

//this methods is same as above
// methods are just functions inside objects
// same like the toUpperCase() method on strings objects built into javascript 
const name = "mario";
name.toUpperCase();
