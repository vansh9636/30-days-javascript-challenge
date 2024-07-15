// day-2: Operators 

// Task 1: write a program to add two numbers and log the result to the console. 
let num1 = 5;
let num2 = 6;
let sum = num1 + num2;
console.log(`sum of ${num1} + ${num2} = ${sum}`);

// Task 2: write a program to subtract two numbers and log the result to the console. 
let num3 = 15;
let num4 = 8;
let sub = num3 - num4;
console.log(`subtraction of ${num3} - ${num4} = ${sub}`);

// Task 3: write a program to multiply two numbers and log the result to the console. 
let num5 = 5;
let num6 = 8;
let mul = num5 * num6;
console.log(`multiply of ${num5} * ${num6} = ${mul}`);

// Task 4: write a program to divide two numbers and log the result to the console. 
let num7 = 27;
let num8 = 3;
let divide = num7 / num8;
console.log(`divide of ${num7} / ${num8} = ${divide}`);

// Task 5: write a program to remainder a numbers when divided to another number and log the result to the console. 
let num9 = 33;
let num10 = 5
let rem = num9 % num10;
console.log(`remainder is: ${rem}`);

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let a = 45;

a += 10;// here is use += operator and add 10 in variable "a";
console.log(a);

// Task 7: Use the -= operator to add a number to a variable and log the result to the console.

let b = 45;

b -= 10;// here is use -= operator and subtract 10 in variable "b";
console.log(b);

// Task 8: wirte a program to compare two numbers using > and < and log the result to the console.

let comNum1 = 33;
let comNum2 = 27;

console.log(`${comNum1} is less then ${comNum2} : `, comNum1 < comNum2); // false 
console.log(`${comNum1} is greater  then ${comNum2} :`, comNum1 > comNum2); // true 

// Task 9: wirte a program to compare two numbers using >= and <= and log the result to the console.

let comNum3 = 15;
let comNum4 = 23;

console.log(`${comNum3} <= ${comNum4} :`, comNum3 <= comNum4); // true 
console.log(`${comNum3} >= ${comNum4} :`, comNum3 >= comNum4); // false 

// Task 10: wirte a program to compare two numbers using == and === and log the result to the console.

let comNum5 = 34;
let comNum6 = 27;

console.log("comNum5 == comNum6 :",comNum5 == comNum6);//false
console.log("comNum5 === comNum6 :",comNum5 === comNum6);//false

// Task 11,12,13 :write a program to uses the logical operator and check 

let cheNum1=12;
let cheNum2=15;

console.log(cheNum1 < cheNum2 && cheNum1 > 20);//false
console.log(cheNum1 < cheNum2 || cheNum1 > 20);//true 
console.log(!(cheNum2 > cheNum1));//false

// Task 14: write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let posNum=5;
let terCheck= posNum >= 0 ? console.log("The posNum is positive"):console.log("The posNum is negative");



