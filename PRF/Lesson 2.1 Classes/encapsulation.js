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

console.log(); // added to get a break in the output

class Truck {
    #_years
    constructor(name, years) {
        this.name = name;
        this.years = years;
    }
    set years(newYears) {
        let date = new Date();
        if (newYears > date.getFullYear()) {
            this.#_years = date.getFullYear();
            }
            else {
                this.#_years = newYears;
            }
        }
    get years() {
        return this.#_years;
        }
    age() {
        let date = new Date();
        return date.getFullYear() - this.#_years;
    }
}
let newTruck = new Truck("Nissan", 2221);// Sets the year to 2221
console.log(newTruck.years); // Logs the current year
console.log(newTruck._years); // undefined
newTruck._years = 2221; //Setting the year value
console.log(newTruck.years); //Logs current year
console.log(newTruck._years); //This value changes but, the year does not.