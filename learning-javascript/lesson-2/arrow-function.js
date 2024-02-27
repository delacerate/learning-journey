// regular function
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
//
// arrow function
// if we only have 1 parameter we can taking the parentheses inside the radius
// const area = (radius) => {
//   return 3.14 * radius ** 2;
// };

// const greet = function () {
//   return "hello,world";
// };
// arrow function version
// const greet = () => {
//   return "hello, world";
// };
// const result = greet();
// console.log(result);

// const bill = function(products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

//this is the arrow function version 

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total = +products[i] * products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));
