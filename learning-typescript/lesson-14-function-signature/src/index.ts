// function signature
type Calculator = (numOne: number, numTwo: number) => number;

function addTwoNumbers(a: number, b: number) {
  return a + b;
}

function multiplyTwoNumbers(first: number, second: number) {
  return first * second;
}

function squareNumbers(num: number) {
  return num * num;
}

function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne} ${numTwo}`;
}

let calcs: Calculator[] = [];

calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
// calcs.push(joinTwoNumbers);
calcs.push(squareNumbers);

// function signature on interface
//
//
interface hasArea {
  name: string;
  calcArea: (a: number) => number;
}
interface hasArea {
  name: string;
  calcArea: (a: number): number
}
// so it can belike this as well

const shapeOne: hasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

const shapeTwo: hasArea = {
  name: "circle",
  calcArea(r: number) {
    return (Math.PI * r) ^ 2;
  },
};

shapeOne.calcArea(5)
shapeTwo.calcArea(10)
