class Dish {
    #name;
    #price;
    constructor(name, price) {
        this.#name = name;
        this.#price = price;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }
    get price() {
        return this.#price;
    }
    set price(newPrice) {
        this.#price = newPrice;
    }
    food() {
        return this.#name;
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
    #sweet;
    constructor(name, price, sweet) {
        super(name, price);
        this.#sweet = sweet;
    }
    isSweet() {
        return this.#sweet;
    }
}

class Pasta extends Dish {
    #isVegetarian;
    constructor(name, price, isVegetarian) {
        super(name, price);
        this.#isVegetarian = isVegetarian;
    }
    get isVegetarian() {
        return this.#isVegetarian;
    }
    set isVegetarian(newValue) {
        this.#isVegetarian = newValue;
    }
}

// Få objekta på plass
const suppe = new Dish('Tomatsuppe', '99kr');
const brod = new Dish('Hvetebrød', '19kr');
const margherita = new Pizza('Margherita', '299kr', ['Ost', 'Oregano']);
const skinke = new Pizza('Skinke', '299kr', ['Skinke', 'Oregano']);
const ronnie = new Pancake('Ronnie', '249kr', true);
const calimero = new Pancake('Calimero', '269kr', true);
const bolognese = new Pasta('Bolognese', '150kr', false);
const carbonara = new Pasta('Carbonara', '190kr', false);

// Demonstrasjon av gettere og settere
margherita.name = "Anything but a hamburger, I mean wtf ?";

console.log(`Dish: ${suppe.name}, Price: ${suppe.price}`);
console.log(`Dish: ${brod.name}, Price: ${brod.price}`);

console.log(`Pizza: ${margherita.name}, Price: ${margherita.price}, Ingredients: ${margherita.getIngredients()}`);
console.log(`Pizza: ${skinke.name}, Price: ${skinke.price}, Ingredients: ${skinke.getIngredients()}`);

console.log(`Pancake: ${ronnie.name}, Price: ${ronnie.price}, Sweet: ${ronnie.isSweet()}`);
console.log(`Pancake: ${calimero.name}, Price: ${calimero.price}, Sweet: ${calimero.isSweet()}`);

console.log(`Pasta: ${bolognese.name}, Price: ${bolognese.price}, IsVegetarian: ${bolognese.isVegetarian}`);
console.log(`Pasta: ${carbonara.name}, Price: ${carbonara.price}, IsVegetarian: ${carbonara.isVegetarian}`);

/*
Gettere og settere gir betre kontroll og validering av data, som er essensielt for objektorientert programmering. Dei sikrar at:
ved å bruke settere kan vi validere inndata før vi oppdaterer ein eigenskap, sikrande at objekta våre forblir i ein gyldig tilstand. Og ved å gjere eigenskapar private (#namn, #pris, osv.) og kun tilgjengelege via gettere og settere, kontrollerer vi tilgangen til sensitiv informasjon og behaldar kontrollen med korleis verdiar blir sett og henta.
Dersom vi skulle vi trenge å endre logikken for korleis ein eigenskap blir behandla, kan dette enkelt gjerast i setteren utan å påverke andre delar av koden. Dette gjer koden vår meir vedlikehaldsvennleg og framtidssikker.
Ved å implementere denne praksisen i meny-modellen vår, sikrar vi ein robust og godt strukturert kodebase som er lett å vedlikehalde og utvide i framtida.
*/
