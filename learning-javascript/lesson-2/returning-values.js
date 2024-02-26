// returning values

// const speak = function (name = "luigi", time = "night") {
//   console.log(`good ${time} ${name}`);
// };
//

const calcArea = function (radius) {
  // we can use return directly to return the value of the function
  // before like this
  // const area = 3.14 * radius ** 2;
  // we can to do it like this to return the value of the function
  return 3.14 * radius ** 2;
  //  console.log(area)
  // we can use return to return the value of area
  return area;
};
// area is set to the value of the function
// we can use the value of the function to store it in a variable
// we can use the value of the function to pass it to another function
const area = calcArea(5);
console.log(area);

const calcVol = function (area) {};

calcVol(area);
