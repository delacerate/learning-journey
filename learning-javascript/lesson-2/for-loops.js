// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// inside the for is 
// initialization values | condition | final expression
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
