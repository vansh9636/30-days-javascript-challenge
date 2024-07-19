// Day-6: Arrays 

// Task 1: create an array of numbers from 1 to 5 and log the array to the console.

let arr1 = [1, 2, 3, 4, 5];
console.log("Array:",arr1);

// Task 2: Access the first and last elemnts of the array and log them to the console.

let firstelem = arr1[0];
let lastelem = arr1[arr1.length - 1];
console.log("First elem :", firstelem);
console.log("last elem :", lastelem);

// Task 3: use the push method to add a new number to the end of the array and log the updated array.

arr1.push(6);
console.log("updated Array *push* : ", arr1);

// Task 4: use the pop method to remove the last element from the array and log the updated array.

arr1.pop();
console.log(" updated Array *pop* :",arr1);

// Task 5: use the shift method to remove the first element from the array and log the updated array.

arr1.shift();
console.log("updated Array *shift* :",arr1);

// Task 6: use the unshift method to add a new number to the beginning of the array and log the updated array.

arr1.unshift(78);
console.log("updated Array *shift* :", arr1);

// Task 7: use the map method to create a new array with only even mubers and log the new array.

let doubleval = arr1.map((a) => {
    return a + a;
})
console.log("double value of array :", doubleval);

// Task 8: use the filter method to create a new array wit honly even numbers and log the new array .

let evenval = arr1.filter((ev) => { return (ev % 2 == 0) });
console.log(evenval);

// Task 9: use the reduce method to calculate the sum of all numbers in the array and log the result .

let sumval = arr1.reduce((val1, val2) => { return val1 + val2 });
console.log("sum of element : ", sumval);

// Task 10: use a for loop to iterate over the array and log each element to the console.

let arr2 = [12, 23, 34, 45, 56, 67];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// Task 11: use the foreach method to iterate over the array and log each element to the console.

arr2.forEach(elem => {
    console.log("Number: ",elem);
});

// Task 12: Create a two-dimaensional array (matrix) and log the entire array to the console.

let twoDinm = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];
console.log("metrix :", twoDinm);

// Task 13: Access and log a specific element from the two-dimensional array .
let specific = twoDinm[2][2];
console.log("specific : ", specific);



