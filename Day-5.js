// Day-5 : Functions

// Task 1:write a function to check if a number is even or odd and log the result to the console.

function numcheck(num) {
    (num % 2 == 0) ? console.log("Number is even") : console.log("Number is odd");
}

numcheck(52);

// Task 2: write a function to calculate the square of number and return the result;

function CheSquare(num1) {
    let result = num1 ** 2;
    return result;
}
let squareNum = CheSquare(50);
console.log("square of number is : ", squareNum);

// Task 3: write a function expression to find the maximum of two numbers and log the result to console.

function checkMax(pera1, pera2) {
    if (pera1 > pera2) {
        console.log(pera1, "is big number");
    }
    else {
        console.log(pera2, "is big number")
    }

}
checkMax(54, 6);

// Task 4: write a function expression to concatenate two strings and return the result 

function concatestr() {
    let str1 = "Vansh";
    let str2 = "Kumawat";
    return str1 + str2;
}
let concate = concatestr();
console.log(concate);

// Task 5: write an arrow function to calculate the sum of two numbers and return the result.

let sumOfNum = (num1, num2) => {
    return num1 + num2;
};
console.log("sum of tow num :", sumOfNum(5, 6));

// Task 6: write an arrow function to check if a string contains a specific character and return a boolean value .

let charCheck = (str, char) => {
    // here is we can use includes() function to ckeck a element exits in array or not; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false;
}
console.log(charCheck("kumawat", "w"));

// Task 7: write a function that takes two perametres and returns their product. provide a defalut value for the second parameter.

function pro(val1, val2 = 12) {
    return val1 + val2;
}
console.log("here is two pera", pro(12, 5));
console.log("here is one pera", pro(12));// here is pera2 take default value for sum;

// Task 8: write a function that takes a person's name and age returns a greeting message.Provide a default value for the age.

function geetingMsg(name, age = 18) {
    return `hey ${name} your age is ${age}`;
}
console.log(geetingMsg("vansh", 19));

// Task 9: write a higher-order function that takes a function and a number. and calls the function that many times. 

function perafun() {
    console.log("hey i am  vansh")
}

function outfun(pera, num) {
    for (let i = 0; i < num; i++) {
        pera();
    }
}

outfun(perafun, 8);

// Task 10: write a higher-order function that takes two functions and value, applies the first function to the value,and them applies the second function to the  result .
let fun1 = (a) => a + a;
let fun2 = (b) => b * b;

function lastfun(fun1, fun2, value) {
    let res1 = fun1(value);
    let res2 = fun2(value);
    console.log(`fun1 value : ${res1} , fun2 value: ${res2}`)
}
lastfun(fun1, fun2, 10);
