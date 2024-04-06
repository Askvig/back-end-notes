const cars = ["Audi", "Volkswagen", "BMW", "Ford"];
cars.sort();
console.log(cars); // ["Audi", "BMW", "Ford", "Volkswagen"]

/* The sort() method sort all elements starting from the smallest.
To change this order, we can first sort all the elements and then use the reverse() method: */

const cars1 = ["Audi", "Volkswagen", "BMW", "Ford"];
cars1.sort();
console.log(cars1); // ["Audi", "BMW", "Ford", "Volkswagen"]
cars1.reverse();
console.log(cars1); // ["Volkswagen", "Ford", "BMW", "Audi"]

/* By default, the sort method sorts values as strings – alphabetically.
So if we want to sort the numbers array, we get the following result: */

const numbers = [0, 1, 11, 12, 2, 55, 4];
numbers.sort();
console.log(numbers); // [0, 1, 11, 12, 2, 4, 55]

/* We can fix this by passing our own compare function.
The compare function should take two input parameters and return the number.
From the returned value, we can estimate the relation between input parameters:

- Negative value: The first parameter will be sorted before the second.
- Positive value: The second parameter will be sorted before the first.
- Zero: No changes will be made to these two elements (elements are equal).
*/

const numbers1 = [0, 1, 11, 12, 2, 55, 4];
numbers1.sort((a, b) => a - b);
console.log(numbers1); // [0, 1, 2, 4, 11, 12, 55]