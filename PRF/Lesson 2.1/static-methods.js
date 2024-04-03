class House {
    constructor(name) {
        this.name = name;
    }
    info() {
        return "This house is the: " + this.name + ". ";
    }
    static greetings() {
        return "Hello, my dear landlord.";
    }
}
let house = new House("My house");
console.log(House.greetings()); // Hello, my dear landlord.
console.log(house.greetings()); // Uncaught TypeError: house.greetings is not a function
