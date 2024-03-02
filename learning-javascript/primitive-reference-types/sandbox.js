//primitive and reference types


//primitive types
// so primitive types are the types that are not objects and they are immutable
// they are stored by values(they are copied by their values);  so when we copy a primitive type to another variable, 
// we are copying the value of the variable not the reference to the variable
// primitive types are: number, string, boolean, undefined, null, symbol
// example:
const scoreOne = 50;
const scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 50 scoreTwo: 50
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne: 100 scoreTwo: 50

// so when we copy x to y, we are copying the value of x to y not the reference to x
// so when we change the value of x, it does not affect the value of yield because they are independent of each other
// so when we copy a primitive type to another variable, we are copying the value of the variable not the reference to the variable
// so primitive types are stored by values(they are copied by their values);

//reference types
// reference types are objects and arrays
// they are stored by reference(they are copied by their reference); so when we copy a reference type to another variable,
// we are copying the reference to the variable not the value of the variable
// example:
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo); // { name: 'ryu', age: 30 } { name: 'ryu', age: 30 }
userOne.name = 'chun-li';
console.log(userOne, userTwo); // { name: 'chun-li', age: 30 } { name: 'chun-li', age: 30 } 

// so when we copy a to b, we are copying the reference to a not the value of a

