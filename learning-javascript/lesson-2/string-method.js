const email = 'mario@thenetninja.co.uk';
// const result = email.lastIndexOf('n');
// slice (start, end)
// const result = email.slice(0, 5);

// substr (start, length)
const result = email.substr(4, 10);
// replace with substring instead of substr because of compatibility
// substring (start, end)
const resultSubs = email.substring(4, 10);

const resultreplace = email.replace('m', 'w');

console.log(result, resultSubs, resultreplace);
