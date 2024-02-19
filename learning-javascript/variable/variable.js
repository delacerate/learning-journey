// variable = a container that stores a value
// behaves as if it were a box that stores a value
// 1. declaration  let x = 100;
// 2. assignment    x = 100;
// javascript variable can be declarare in 4 ways
// var, const, let, automatically

// this is automatically
u = 5;

// this is using let
let x;

// this is using var
//Block Scope: var declarations are function-scoped or globally scoped, whereas let and const are block-scoped.
//This means variables declared with var can lead to unexpected behavior, especially within loops or conditional blocks.
//
//Hoisting: Variables declared with var are hoisted to the top of their scope, which can lead to confusion and bugs if not understood properly.
//Variables declared with let and const are not hoisted in the same way, making the code behavior more predictable.
//
//Reassignment and Immutability: const provides immutability, meaning the variable cannot be reassigned.
//This can prevent unintended side effects and make the code easier to reason about. let, on the other hand, allows reassignment but still respects block scope.
//
//Readability and Maintainability: The use of let and const often leads to cleaner, more readable code, as they clearly signal the intent of the variable
//(whether it will be reassigned or not).
//
// However, if you're targeting older browsers that don't fully support ES6 features, you may have to use var to ensure compatibility.
// Just be aware of the differences and potential pitfalls mentioned above, and use var judiciously.

var y = 10;

//this is using const
//these are constant values and cannot be changed.
// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)
// Only use let if you can't use const
// Only use var if you MUST support old browsers.
const hehe = 10;
const haha = 12;
let hahahehe = hehe + haha;
