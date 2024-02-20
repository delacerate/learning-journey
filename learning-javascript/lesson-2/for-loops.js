// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// inside the for is 
// initialization values | condition | final expression
// summary of for loop:
// Use a while loop when you want to execute a block of code repeatedly as long as a condition is true and you may not know in advance how many iterations are needed.
// Use a for loop when you want to execute a block of code for a known number of iterations and you can specify the initialization, condition, and iteration in a single line.
for (let i = 0; i < 5; i++) {
  console.log('in loop:', i)
}
console.log('the loop finished')



const names = ['darman', 'luigi', 'bowser']
//  so basically this is saying, for every name in names, log the name
//  and then the names are printed out using the i on the loop as the index
//  so the first time it goes through the loop, i is 0, so names[0] is printed
//  then i is 1, so names[1] is printed, and so on
//  so the output is:
//  darman luigi bowser
for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`
  console.log(html)
}
