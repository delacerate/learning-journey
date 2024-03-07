// object literals
//
let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  login: function() {
    console.log("the user logged in");
  },
  logout: function() {
    console.log("the user logged out");
  },
  logBlogs: function() {
    // console.log(this.blogs);
    console.log("this user has written the follow blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

// we can change the login: function()
// to login() {}

user.logBlogs();

// When using `this` in a regular function, it refers to the global object (typically the `window` object in browsers).

// However, when using `this` in an arrow function, it refers to the enclosing 
// lexical context, usually the object where the arrow function is defined. 

// Arrow functions lack their own `this` binding and instead inherit the `this` value from the surrounding code block 
// (in this case, the object containing the arrow function).

// This behavior is known as lexical scoping, 
// wherein the value of `this` is determined by the context in which the function is defined.

// When `this` is used without any qualifier, it defaults to the global object (e.g., `window` in browsers).
console.log(this);

//indo version
// Ketika menggunakan `this` dalam sebuah fungsi biasa, 
// ia merujuk pada objek global (biasanya objek `window` di browser).

// Namun, ketika menggunakan `this` dalam sebuah arrow function, 
// ia merujuk pada konteks leksikal yang melingkupinya, biasanya objek di mana arrow function tersebut didefinisikan.

// Arrow functions tidak memiliki ikatan `this` sendiri dan sebagai gantinya mewarisi nilai `this` dari blok kode sekitarnya 
// (dalam hal ini, objek yang berisi arrow function).

// Perilaku ini dikenal sebagai lexical scoping, di mana nilai `this` ditentukan oleh konteks di mana fungsi tersebut didefinisikan.

// Ketika `this` digunakan tanpa kualifikasi apapun, ia defaultnya ke objek global (misalnya, `window` di browser).

