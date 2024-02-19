// classes
//
//

type Base = "classic" | "thick" | "thin" | "garlic";

class Pizza {
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
  title: string;
  price: number;
  base: Base = "classic";
  topping: string[] = [];
  addTopping(topping: string): void {
    this.topping.push(topping);
  }
  removeTopping(topping: string): void {
    this.topping = this.topping.filter((t) => t !== topping);
  }
  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizza = new Pizza("enak", 15);

pizza.selectBase("garlic");
pizza.addTopping("olive");
pizza.addTopping("almond");

console.log(pizza);
