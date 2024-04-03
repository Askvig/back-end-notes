class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this._year = date.getFullYear();
        } else {
            this._year = newYear;
        }
    }
    get year() {
        return this._year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this._year;
    }
}
let newCar = new Car("Nissan", 2221); // Sets the year to 2221
console.log(newCar.year); // Logs the current year
console.log(newCar._year); // Logs the current year
newCar._year = 2221; //Setting the year value
console.log(newCar.year); //2221
console.log(newCar._year); //2221


class Truck {
    #_year
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this.#_year = date.getFullYear();
            }
            else {
                this.#_year = newYear;
            }
        }
    get year() {
        return this.#_year;
        }
    age() {
        let date = new Date();
        return date.getFullYear() - this.#_year;
    }
}
let newTruck = new Truck("Nissan", 2221);// Sets the year to 2221
console.log(newTruck.year); // Logs the current year
console.log(newTruck._year); // undefined
newTruck._year = 2221; //Setting the year value
console.log(newTruck.year); //Logs current year
console.log(newTruck._year); //This value changes but, the year does not.