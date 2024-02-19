// booleans and comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans
const email = 'luigi@thenetninja.co.uk';
const names = ['mario', 'luigi', 'toad'];

// if the includes method finds the value in the string or array it will return true
// if it doesn't find it, it will return false
const result = names.includes('bowser');
// const result = email.includes('!');

console.log(result);

// comparisons operators
const age = 25;
// single equal is used to same
console.log(`is it the age same as 25 ? ${age == 25}`)
console.log(`is it the age not 25 ? ${age != 30}`)
console.log(`is it the age below 20 ? ${age > 20}`)
console.log(`is it the up to 20  ? ${age < 20}`)
console.log(`is it the below than 25? ${age <= 20}`)
console.log(`is it the age up to 25 ? ${age >= 20}`)

let name = 'shaun'


console.log(name == 'shaun')
console.log(name == 'Shaun')
console.log(name > 'crystal')
//lower case letter is greater than upper case letter
console.log(name > 'Shaun')
console.log(name > 'Crystal')
