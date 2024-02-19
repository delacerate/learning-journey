const title = 'best reads of 2019';
const author = 'Mario';
const likes = 30;

// concat way
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'

// template string way
const result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

const html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes} likes </span>
`;
