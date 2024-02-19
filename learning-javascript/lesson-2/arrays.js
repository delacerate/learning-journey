const ninja = ['darman', 'ryu', 'chunli'];
ninja[1] = 'ken';
console.log(ninja[1]);

const ages = [20, 25, 30, 35];
console.log(ages[2]);

// const random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninja.length);
// array methods
// const result = ninja.indexOf('chunli');
// const result = ninja.concat(['mamang', 'crystal']);
let result = ninja.push('ubun');
result = ninja.pop();

// so the pop method will remove the last item in the array
// and return it to the variable that we assigned it to
// const result = ninja.join('-');
console.log(result);
console.log(ninja);
