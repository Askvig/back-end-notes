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
    #ingredient;
    constructor(name, price, ingredient) {
        super(name, price);
        this.#ingredient = ingredient;
    }
}

class Pancake extends Dish {
    #sweet;
    constructor(name, price, sweet) {
        super(name, price);
        this.#sweet = sweet;
    }
}

class Pasta extends Dish {
    constructor(name, price, isVegetarian) {
        super(name, price);
        this.isVegetarian = isVegetarian;
    }
}

const suppe = new Dish('Tomatsuppe', '99kr');
const brød = new Dish('Hvetebrød', '19kr');
const margherita = new Pizza('Margherita', '299kr', ['Ost', 'Oregano']);
const skinke = new Pizza('Skinke', '299kr', ['Skinke', 'Oregano']);
const ronnie = new Pancake('Ronnie', '249kr', true);
const calimero = new Pancake('Calimero', '269kr', true);
const bolognese = new Pasta('Bolognese', '150kr', false);
const carbonara = new Pasta('Carbonara', '190kr', false);

console.log(suppe);
console.log(brød);
console.log(margherita);
console.log(skinke);
console.log(ronnie);
console.log(ronnie.name);
console.log(ronnie.price);
console.log(ronnie.sweet);
console.log(calimero);
console.log(bolognese);
console.log(bolognese.name);
console.log(bolognese.price);
console.log(bolognese.isVegetarian);
console.log(carbonara);