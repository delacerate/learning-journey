// hoisting only works with function declaration and not with function expression
// function declaration are hoisted to the top of the file 
// function expression are not hoisted to the top of file 
// var and function declaration are hoisted to the top of the file
// but let and const are not hoisted to the top of the file

// function declaration'
function greet () {
  console.log('hello there')
}

//function delacration 
const speak = function() {
  console.log('good day!')
};

speak()
greet()
