class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    age() {
        let currentDate = new Date();
        return currentDate.getFullYear() - this.publicationYear;
    }
}

let newBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(newBook.title); // The Great Gatsby
console.log(newBook.age());  // Age of the book in years
console.log(newBook.publicationYear); // 1925


// Activity
/* Create a class named Student. It should have the properties: name, surname and age. It should also have two methods: the first one - greetings(), should return a string: “Hello my name is _insert_name_property_ _insert_surname_property_”.
The second one should be called birthYear() and return the student’s year of birth.

Ask three classmates for the necessary data (or create dummy data if you prefer) and create four objects of the Student class. The data of the fourth object should be your own. Print the results of greetings() and birthYear() methods for every object.
*/

class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greetings() {
        return `Hello my name is ${this.name} ${this.surname}.`;
    }
    birthYear() {
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

const Sigrunn = new Student("Sigrunn", "Kloppstad", 23);
console.log(Sigrunn.greetings(), Sigrunn.birthYear());

const Olaf = new Student('Olaf', 'Nygaard', 41);
console.log(Olaf.greetings(), Olaf.birthYear());

const Ingrid = new Student("Ingrid", "Oppedal", 15);
console.log(Ingrid.greetings(), Ingrid.birthYear());

const Arne = new Student("Arne", "Askvig", 25);
console.log(Arne.greetings(), Arne.birthYear());

