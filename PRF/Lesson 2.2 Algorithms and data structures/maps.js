// We need to specify the key and tell what value is behind it. Remember, the keys need to be unique, while values don’t have to.
const menu = new Map([
    ["Margarita", 9],
    ["Pepperoni", 10],
    ["Salami", 10],
]);


// The new price should temporarily change to 9.5. We can easily do this with the set() method:
menu.set("Pepperoni", 9.5);


// To get our price, we can use the get() method and pass our key name as the parameter:
menu.get("Pepperoni"); //9.5


// We can also delete elements from the menu with the delete() method, check our map size with the size property or whether a position is already in our menu with the has() method.


// The for-each method also works similarly, but we have access to the key this time.
const menu1 = new Map([
    ["Margarita", 9],
    ["Pepperoni", 10],
    ["Salami", 10],
]);
menu1.forEach(function (value, key) {
    console.log("Dish: " + key + ", Price: " + value);
});


// Instead of values() method, we have entries() method. This method provides access to the array containing keys and values from the map. Let’s store all that information in a string:
// List all entries
let text = "";
for (const x of menu.entries()) {
    text += x;
}
