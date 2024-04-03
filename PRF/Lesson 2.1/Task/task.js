/* In this lesson, we learned some crucial concepts of Object-oriented Programming. We learned about classes, encapsulation and inheritance.

In this task, you have to create a menu for a restaurant. Every dish has a name and price. Our restaurant serves pizza, pancakes and pasta. In addition, pizza has an array of ingredients, and pancakes have the Boolean sweet property, which defines whether pancakes should be served sweet. Pasta has the Boolean property isVegetarian, which defines whether it contains meat.

Create a model in Object-oriented Programming simulating the menu. Think about which properties should be private and which not. */

class Dish {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    food() {
        return this.name;
    }
}

class Pizza extends Dish {
    #ingredient;
    constructor(name, price, ingredient) {
        super(name, price);
        this.#ingredient = ingredient;
    }
    getIngredients() {
        return this.#ingredient;
    }
}

class Pancake extends Dish {
    #sweet
    constructor(name, price, sweet) {
        super(name, price);
        this.#sweet = sweet;
    }
    isSweet () {
        return this.#sweet;
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


console.log(suppe); // Dish { name: 'Tomatsuppe', price: '99kr' }
console.log(brød); // Dish { name: 'Hvetebrød', price: '19kr' }

console.log(margherita); // Pizza { name: 'Margherita', price: '299kr' }
console.log(margherita.food()); // Margherita
margherita.name = "hamburger";
// console.log(margherita.getDish()); // Margherita
console.log(margherita.food()); // hamburger

console.log(margherita.price); // 299kr
console.log(margherita.ingredient); // undefined
console.log(margherita.getIngredients()); // [ 'Ost', 'Oregano' ]

console.log(skinke); // Pizza { name: 'Skinke', price: '299kr' }
console.log(ronnie); // Pancake { name: 'Ronnie', price: '249kr' }
console.log(ronnie.name); // Ronnie
console.log(ronnie.price); // 249kr
console.log(ronnie.sweet); // undefined
console.log(ronnie.isSweet()); // true
console.log(calimero); // Pancake { name: 'Calimero', price: '269kr' }
console.log(bolognese); // Pasta { name: 'Bolognese', price: '150kr', isVegetarian: false }
console.log(bolognese.name); // Bolognese
console.log(bolognese.price); // 150kr
console.log(bolognese.isVegetarian); // false
console.log(carbonara); // Pasta { name: 'Carbonara', price: '190kr', isVegetarian: false }

console.log(ronnie instanceof Pancake); // true