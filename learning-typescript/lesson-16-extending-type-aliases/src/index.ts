//expanding type aliases

type Person = {
  id: string | number;
  firstName: string;
};

type User = Person & {
  email: string;
};

const personOne: Person = {
  id: 1,
  firstName: "mario",
};

const personTwo: User = {
  id: "2",
  firstName: "yoshi",
  email: "yoshi@cobain.com",
};

const personThree = {
  email: "peach@coabain.com",
};

function printUser(user: User) {
  console.log(user.id, user.email, user.firstName);
}

// printUser(personOne);

printUser(personTwo); // so in this case we can see that we can use the user type for the personTwo object
// because the person two having the properties of user type which is email, id and firstName
// but we cannot use the user type for personOne because personOne is not having the email in the personOne object
// and also we cannot use the user type for personThree because personThree is not having the id and firstName in the personThree object
// and using amperand(&) we can combine the types and create a new type
// and we can use the new type for the object which is having the properties of the new type
// and we cannot use the new type for the object which is not having the properties of the new type
// printUser(personThree);
