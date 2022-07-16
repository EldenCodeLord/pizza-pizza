# Pizza Joint Online Order

### _Online Pizza Order_###

## Technoligies Used:##

* JavaScript
* HTML
* CSS
* Bootstrap
* Markdown
* Git
* Github

## Description##
Create a website for a pizza restaurant where a user(customer) can choose one or more individual toppings, pizza size, and see the final cost. 

## Tests:##

Test1: Create a constructor for pizza.
Code: let pizza = {}; pizza.sizes = ["Large", "Medium", "Small"]; pizza.toppings =     ["Pineapple", "Pepperoni", "Peperoccini", "Anchovies", "Black Olives"]
pizza.prices = [22,18,14];
Output: Return an array for pizza. 

Test2: Create a function for pizza.
Code: function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price= price;
}
Output: Passed. 

Test3: Create prototype for toppings.
Code: Pizza.prototype.chooseToppings = function () {
    this.toppings = chooseToppings(pizza.toppings);
}
Output: Passed. 

Test4: Create protype for pizza size. 
Code: Pizza.prototype.chooseSize = function () {
  this.size = chooseSize(pizza.size);
}