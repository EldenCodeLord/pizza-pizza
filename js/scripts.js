// Business logic:

let pizza = {};
pizza.size = ["Large", "Medium", "Small"];
pizza.toppings = ["Pineapple", "Anchovies", "Black Olives", "Pepperoccini", "Pepperoni", "Onions"];
pizza.price = [22, 18, 14];

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price= price;
}

let myNewPizza = new Pizza(pizza.size, pizza.toppings, pizza.price);

Pizza.prototype.pickToppings = function () {
  this.toppings = pickToppings(pizza.toppings);
}

Pizza.prototype.chooseSize = function () {
  this.size = chooseSize(pizza.size);
}

