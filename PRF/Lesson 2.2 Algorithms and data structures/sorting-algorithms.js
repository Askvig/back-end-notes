// Method which swaps two elements within an array
/* function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
} */

// Bubble sort
/* The general idea of the bubble sort is to check every pair of adjacent elements and swap their places if they’re not in the correct order.
This strategy seems very logical. With each iteration, we are closer to the solution even though each swap makes us only one step closer to the final result. */
let arr = [4, 7, 3];
console.log(arr); // 4, 7 , 3
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <= arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}
bubbleSort(arr); console.log(arr); // 3, 4, 7


// Insertion sort
let arr1 = [4, 7, 3];
console.log(arr1); // 4, 7 , 3
function insertionSort(arr1) {
    let temp;
    for (let i = 1; i < arr1.length; i++) {
        let j = i; temp = arr1[i];
        while (j > 0 && arr1[j - 1] > temp) {
            arr1[j] = arr1[j - 1];
            j--;
        }
        arr1[j] = temp;
    }
    return arr1;
}
insertionSort(arr1);
console.log(arr1); // 3, 4, 7

