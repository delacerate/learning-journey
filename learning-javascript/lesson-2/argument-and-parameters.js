// arguments and parameters

const speak = function (name = "luigi", time = "night") {
  console.log(`good day ${name} good ${time}`);
};

// this cannot be happen because the name is already inside local variable
// console.log(name)
speak();
// so this is will be override the value default 
speak("mario", "morning");
