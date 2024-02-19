interface hasQuantity {
  quantity: number;
}

const something: hasQuantity = { quantity: 50 };

function printQuantity(item: hasQuantity): void {
  console.log(`the quantity of the item ${item.quantity}`);
}

const fruit = {
  name: "mango",
  quantity: 50,
};

const vehicle = {
  type: "mobil",
  quantity: 3,
};

const person = {
  name: "mario",
  age: 30,
};

//so, the conclusion is the inteface cannot be use for object that not have the same property as interface

printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(person);
// P.S:
// printQuantity({ quantity: 20, title: "mantap" });
// it will be error because the property is in the function call is not the same as the interface
// but if we use the object that have the same property as the interface, it will be ok
