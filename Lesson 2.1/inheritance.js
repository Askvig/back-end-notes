class House {
    constructor(name) {
        this.name = name;
    }
    info() {
        return "This house is the: " + this.name + ". ";
    }
}

class Villa extends House {
    constructor(name, prestige) {
        super(name);
        this.prestige = prestige;
    }
    info() {
        return (
            super.info() +
            "It has the prestige " +
            this.prestige +
            " out of 10. "
        );
    }
}

class DetachedHouse extends House {
    constructor(name, hasGarden) {
        super(name);
        this.hasGarden = hasGarden;
    }
}
let villa = new Villa("Not so prestigious villa", 1);
let detachedHouse = new DetachedHouse("Small house, but with the garden", true);
console.log(villa.info()); // This house is the: Not so prestigious villa. It has the prestige 1 out of 10.
console.log(detachedHouse.info()); // This house is the: Small house, but with the garden.


// Activity
/* Create a basic class Pizza. The pizza has a name and price. It should also have an info() method which says, “I am basic pizza: _name_. I cost _price_.” Create two subclasses: ItalianPizza and AmericanPizza.

AmericanPizza has a sauce string property. ItalianPizza has a region property, which determines where it comes from. Their info() method should contain additional information about these properties. */

class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    info() {
        return `I am basic pizza ${this.name}. I cost ${this.price}.`
    }
}

class ItalianPizza extends Pizza {
    constructor(name, price, region) {
        super(name, price);
        this.region = region;
    }
    info() {
        return `I am a classic Italian pizza ${this.name}. I cost ${this.price} and come from ${this.region}.`;
    }
}

class AmericanPizza extends Pizza {
    constructor(name, price, sauce) {
        super(name, price);
        this.sauce = sauce;
    }
    info() {
        return `${super.info()} I am made in beautiful Chicago. I have the ${this.sauce} sauce.`;
    }
}

let pepperoni = new Pizza('Pepperoni', '230 NOK')
let prosciutto = new ItalianPizza('Prosciutto', '16 EUR', 'Provence')
let mightyBeef = new AmericanPizza('Heavy Heaven', '19 USD', 'Tomato')

console.log(Pizza);
console.log(pepperoni);
console.log(pepperoni.info());
console.log(prosciutto);
console.log(prosciutto.info());
console.log(mightyBeef);
console.log(mightyBeef.info());
console.log(mightyBeef instanceof Pizza);