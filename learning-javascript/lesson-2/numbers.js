const radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, /, **, %
//
// console.log(10 / 2);
// const result = radius % 3;

// const result = pi * radius ** 2;

// order of operation is BIDMASS B stands for Bracket
// I stands for indices/exponent
// D for division
// M for multiplication
// A for addition
// S for subtraction
const result = 5 * (10 - 3) ** 2;

console.log(result);

let likes = 10;
// it will look like likes = likes + 1
// likes += 1;
// likes++;
// likes--;
likes -= 5;
// likes *= 2;
// likes /= 2;
console.log(likes);

// NaN
console.log(5 / 'hello');
console.log(5 * 'hello');

const resultcon = `the blog has ${likes} likes`;
console.log(resultcon);
