// Variables and Data Structures

/* Template strings */
console.log("Template strings:");
function print(firstName) {
    console.log("Hello", firstName);
}

function print1(firstName) {
    console.log("Hello" + firstName);
}

function print2(firstName) {
    console.log(`Hello ${firstName}`);
}

print("Arne");
print1("Arne");
print2("Arne");

function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
    `);
}

createEmail("Pernille", 34.9);



/* Searching strings */
console.log("");
console.log("Searching strings:");

const planet = "EarthEarth";
console.log(planet.startsWith("ear"));
console.log(planet.startsWith("Ear"));
console.log(planet.endsWith("t"));
console.log(planet.endsWith("th"));
console.log(planet.includes("Earth1"));
console.log(planet.includes("r"));
console.log(planet.search("art"));



/* Symbols */
console.log("");
console.log("Symbols:");

const id = Symbol();

const courseInfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
    id: "js-course",
};

courseInfo[id] = 41284;
console.log(courseInfo);



/* Maps */
console.log("");
console.log("Maps:");

let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course);
console.log(course.react);
console.log(course.get("react"));

let details = new Map([
    [new Date(), "today"],
    [2, { javascript: ["js", "node", "react"] }],
    ["items", [1, 2]],
]);

console.log(details);
console.log(details.size);

details.forEach(function (item) {
    console.log(item);
});



/* Sets */
console.log("");
console.log("Sets");

let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("Pride and Prejudice");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
books.forEach(function (item) {
    console.log(item);
});

console.log("has Oliver Twist", books.has("Oliver Twist"));
