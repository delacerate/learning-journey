// math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E); // euler numbers

const area = 7.2;
console.log(Math.round(area)); // round to nearest integer  7.2 = 7, 7.8 = 8
console.log(Math.floor(area)); // round down to nearest integer 5.3= 5
console.log(Math.ceil(area)); // round up to nearest integer 5.3 = 6
console.log(Math.trunc(area)); // remove decimal part 5.3 = 5

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100))
