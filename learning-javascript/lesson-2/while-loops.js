// while loops

// summary of for loop and while loop:
// Use a while loop when you want to execute a block of code repeatedly as long as a condition is true and you may not know in advance how many iterations are needed.
// Use a for loop when you want to execute a block of code for a known number of iterations and you can specify the initialization, condition, and iteration in a single line.

const names = ['darman', 'luigi', 'bowser']
// let i = 0;
// while (i < 5) {
//   console.log('in loop:', i)
//   i +;
// }
let i = 0
while (i < names.length) {
  console.log(names[i])
  i++
}
