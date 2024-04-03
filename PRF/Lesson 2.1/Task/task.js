/* In this lesson, we learned some crucial concepts of Object-oriented Programming. We learned about classes, encapsulation and inheritance.

In this task, you have to create a menu for a restaurant. Every dish has a name and price. Our restaurant serves pizza, pancakes and pasta. In addition, pizza has an array of ingredients, and pancakes have the Boolean sweet property, which defines whether pancakes should be served sweet. Pasta has the Boolean property isVegetarian, which defines whether it contains meat.

Create a model in Object-oriented Programming simulating the menu. Think about which properties should be private and which not. */

class Dish {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Pizza extends Dish {
    constructor(name, price, ingredient) {
        super(name, price);
        this.ingredient = ingredient;
    }
}

class Pancake extends Dish {
    constructor(name, price, sweet) {
        super(name, price);
        this.sweet = sweet;
    }
}

class Pasta extends Dish {
    constructor(name, price, isVegetarian) {
        super(name, price);
        this.isVegetarian = isVegetarian;
    }
}
