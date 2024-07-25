// Day 13 : MOdules 

// Task 1: Create a module that exports that exports a function to add two numbers. import and use this module in another script .

export function addtwoNum(num1, num2) {
    return num1 + num2;
}

// Task 2: create a module that exports an object representing a person with properties and methods. import and use theis module in another script.

export const personDets = {
    name: "vansh kumawat",
    age: 19,
    state: "Rajasthan",
    innerdets: () => {
        console.log("this is details for a person ", 2 + 2);
    }
}

// Task 3: create a module that exports muliple functions using named export . import and use these functions in another script .

export function returnstring(string) {
    return string;
}

export function returncalc(num1, num2) {
    return num1 - num2;
}

// Task 4: create a module that export a single function using default export .import and use this function in another script

export default function () {
    console.log("this is default export fun.");
}

// Task 5 create a module that exports multiple constants and functions .import the entire module as an object in another script and use its properties.

function fun1() {
    console.log("this is task 5 fun");
}

const arr=[1,2,3,4];

const objj={
    first:1,
    sec:2,
}

export {fun1,arr,objj};

