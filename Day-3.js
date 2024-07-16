// Day-3: Control Structures

// Task 1: write a program to check if a number is positve,negative or zero and log the result to the console.
let num = 0;

if (num > 0) {
    console.log(num, "is positive");
} else if (num < 0) {
    console.log(num, "is negative");
} else {
    console.log("num is zero");
}

// Task 2: write a program to check if a person is eligible to vote (age >=18) and log the result to the console.

let age = 17;

if (age >= 18 && age <= 100) {
    console.log("you are eligible to vote");
} else if (age < 18) {
    console.log("you not eligible to vote");
}
else {
    console.log("enter valid age (age > 0)*");
}
// Task 3: write a program to find the largest of three numbers using nested if-else statements.
 
let cheNum1 = 44;
let cheNum2 = 21;
let cheNum3 = 17;
if( cheNum1 >= cheNum2 && cheNum1 >= cheNum3){
    console.log(cheNum1," is largest");
}
else if( cheNum2 >= cheNum1 && cheNum2 >= cheNum3){
    console.log(cheNum2," is largest");
}
else{
    console.log(cheNum3,"is largest");
}


// Task 4: write a program that uses a switch case to determine the day of the week based on a number(1-7)and log the day name to console.

let day = 8;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default: console.log("enter valid number");
        break;
}

// Task 5: write a program that uses a switch case to assign a grade ('A','B','C','D','F') bassed on a score and log the grade to the console.


let score = 32;
switch (true) {
    case (score >= 90):
        console.log("grade is A ");
        break;
    case (score >= 80):
        console.log("grade is B ");
        break;
    case (score >= 65):
        console.log("grade is C");
        break;
    case (score >= 33):
        console.log("grade is D ");
        break;
    case (score < 33):
        console.log("grade is F ");
        break;
    default:
        break;
}

// Task 6: write a program that uses the ternary operator to ckeck if a number is even or odd and log te result ot the console 

let terNum = 5;
let terResult = (terNum % 2 == 0) ? `${terNum}: is even` : `${terNum}: is odd`;
console.log(terResult);

// Task 7:Write a program to check if a year is a leap year using multiple consitions (divisible by 4, butnot 100 unless also divisible by 400) and log the result to the console.
let year = 2025;

if (year % 4 == 0){
    console.log(year,"is  leap year");
} else if (year % 100 == 0) {
    console.log( year,"not leap year");
} else if (year % 400 == 0) {
    console.log(year,"is leap year");
} else{
    console.log(year," is not  leap year.");
}

