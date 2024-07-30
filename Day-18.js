// Day 18:  Algorithms 

// Task 1: Implement the bubble sort alogrithm to sort an array of numbers in ascending order.log the sorted array .

let array = [12, 11, 2, 43, 4, 66, 32, 23];

function bubbleSort(arr) {
    let temp;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }

        }

    }
    console.log(arr);
}

bubbleSort(array);

// Task 2: implement the selection sort algorithm to sort an array of numbers in asecnding order.log the sorted array.

let array2 = [12, 11, 2, 66, 32, 23];
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.log("Selection Sort: ", arr);
}

selectionSort(array2)

// Task 4: implement the linear search algorithm to find a target value in an array .log the index of the target value.

let array3 = [11, 37, 34, 67, 54, 32, 43];
let target = 32;

function linearSearch(array3, target) {

    for (let i = 0; i < array3.length; i++) {
        if (array3[i] == target) {
            console.log("element if found at the position :", i + 1);
        }

    }
}

linearSearch(array3,target);

// Task 5: implement the binary search algorithm to find target value in a sorted array.log the index of target value

let array4 = [2, 4, 8, 12, 15, 23, 25];
let find = 23;

function binarySearch(array, find){
    let left = 0;
    let right = array4.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] == find){
            console.log("element is found at :", mid + 1)
        }
        else if (array[mid] > find) {
            right = mid - 1;
        }
        else(array[mid] < find)
            left = mid + 1;
    }


}
binarySearch(array4, find);

// Task 6: write a function to coundt the occurrences of each charcacter in a string .log the character counts.
function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return counts;
}

let str1 = "hello world";
console.log("Character Counts: ", countOccurrences(str1));

// Task 8 Write a function to rotate an array by k positions.Log the rotated array.

let array5=[1, 2, 3, 4, 5, 6, 7];
let k=3;
let rotate=array5.slice(-k).concat(array5.slice(0,-k))

console.log(rotate);
