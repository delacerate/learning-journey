"use strict";
// classes
//
//
class Pizza {
    constructor(title, price) {
        this.base = "classic";
        this.topping = [];
        this.title = title;
        this.price = price;
    }
    addTopping(topping) {
        this.topping.push(topping);
    }
    removeTopping(topping) {
        this.topping = this.topping.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza("enak", 15);
pizza.selectBase("garlic");
pizza.addTopping("olive");
pizza.addTopping("almond");
console.log(pizza);
