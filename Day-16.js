// Day 16: Recursion 

// Task 1: write a recursive function to calculate the factorial of a number .log the result for test cases.

function fectorial(num) {
    if (num == 1 || num == 2) return num;
    return num * fectorial(num - 1);
}

console.log(fectorial(5));//120

// Task 2: write a recursive function to  calculate the nth fibonacci number .log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(6)); // 8

// Task 3:wrie a recursive function to find the sum of all elements in an array .log the result for a few test cases.

let arr=[1,2,3,4,5,6];

function sumArr(arr){
   if(arr.length == 0){
    return 0;
   }
   return arr[0] + sumArr(arr.slice(1));
}
console.log(sumArr(arr));

// Task 4: write a recursive function to find the meximum element in an array .log the result

let newarr=[1, 5, 3, 9, 2];

function maxarr(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxRest = maxarr(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
}


console.log(maxarr(newarr)); // 9

//Task-5:Write a recursive function to reverse a string.Log the result for a few test cases.

function revstr(str) {
    if (str === "") {
        return "";
    }
    return revstr(str.substr(1)) + str[0];
}


console.log(revstr("hello")); // "olleh"

//Task-8:Write a recursive function to count the occurrences of the target element in an array.Log the result for a few test cases.

function countOccrr(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    return (arr[0] === target ? 1 : 0) + countOccrr(arr.slice(1), target);
}


console.log(countOccrr([1, 2, 3, 4, 3, 3], 3)); // 3

