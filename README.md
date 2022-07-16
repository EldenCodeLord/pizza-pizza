# Pizza Joint Online Order

### _Online Pizza Order_

## Technoligies Used:

* JavaScript
* HTML
* CSS
* Bootstrap
* Markdown
* Git
* Github

## Description
Create a website for a pizza restaurant where a user(customer) can choose one or more individual toppings, pizza size, and see the final cost. 

## Tests:

Test1: Create a constructor for pizza.
Code: let pizza = {}; pizza.sizes = ["Large", "Medium", "Small"]; pizza.toppings =     ["Pineapple", "Pepperoni", "Peperoccini", "Anchovies", "Black Olives"]
pizza.prices = [32,28,24];
Output: Return an array for pizza. 

Test2: Create a function for pizza.
Code: function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price= price;
}
Output: Passed. 

Test3: Create prototype for toppings.
Code: Pizza.prototype.pickToppings = function () {
    this.toppings = pickToppings(pizza.toppings);
}
Output: Passed. 

Test4: Create protype for pizza size. 
Code: Pizza.prototype.chooseSize = function () {
  this.size = chooseSize(pizza.size);
}
Output: Passed. 

Test5: Create a function prototype for completing pizza selections and thus return final price. 
Code: Pizza.prototype.completePizza = function (pickToppings, chooseSize) {
    if (pizza.pickToppings >=4) {
    return "Delicious Toppings!";
        console.log(completePizza);
    }
};
Output: Passed. 