// Sets are perfect when we don’t want our collection to contain duplicates or elements to be in order.
// We must pass an array as a parameter to create a new set
const fruits = new Set(["apple", "banana", "orange"]);


// We can also create an empty set and then add new elements one by one
// Create a Set
const fruits1 = new Set();
// Add Values to the Set
fruits1.add("apple");
fruits1.add("banana");
fruits1.add("orange");


/* Remember, all elements within the set should be unique. For example, nothing will happen when we try to add the element “apple” to our fruits set again. As we can see, we can add new elements with the method add(). We can also remove them with the method delete() or check if our set already contains a certain element with the has() method. To check the current size of our set, we can use the size property: */
const fruits2 = new Set();
// Add Values to the Set
fruits2.add("apple");
fruits2.add("banana");
fruits2.add("orange");

// Let's access "banana" via variable
const fruitToRemove = "banana";

// Remove the specified fruit from the Set
fruits2.delete(fruitToRemove);

// Check if our set contains "banana"
console.log(fruits2.has("banana")); // Output: false

// Check the size of our set
console.log(fruits2.size); // Output: 2


// Like with arrays, we can use iteration methods on sets! Let’s print all elements from our set in the console:
const fruits3 = new Set(["apple", "banana", "orange"]);
// Iterate through the Set using forEach
fruits3.forEach(function (value) {
    console.log(value);
});


// We can also access all values from the set with the set iterator. We can get it from the values() method. Let’s use the for-of loop and the set iterator to do the same thing as in the previous exercise:
const fruits4 = new Set(["apple", "banana", "orange"]);
for (const x of fruits4.values()) {
    console.log(x);
}