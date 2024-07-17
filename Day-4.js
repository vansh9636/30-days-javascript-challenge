// Day-4 : Loops

// Task 1: write a program to print numbers form 1 to 10 using a for loop 

for (let count = 1; count <= 10; count++) {
    console.log(count);
}

// Task 2: write a program to print the multiplication table of 5  using a for loop 

let tab = 5;

for (let index = 1; index <= 10; index++) {
    console.log(`${tab} X ${index} = `, tab * index);
}

// Task 3: write a program to calculate the sum of numbers form 1 to 10 using a while loop ;

let num = 1;
let sumNumbers = 0;
while (num <= 10) {
    sumNumbers += num;
    num++;
}
console.log("sum of 1 to 10 = ", sumNumbers);

// Task 4: write a program to print numbers form 10 to 1 using a while loop.

let rev = 10;
while (rev > 0) {
    console.log(rev);
    rev--;
}

// Task 5: write a program to print numbers from 1 to 5 using a do... while loop 

let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 5);

// Task 6 :  write a program to calculate the factorial of a number using a do... while loop 

let facNum = 5;
let factorial = 1;
do {
    factorial *= facNum;
    facNum--;

} while (facNum > 0);

console.log(factorial);

// Task 7: write a program to print pettern using nested for loops 

let char = "";
for (let i = 1; i <= 5; i++) {
    char = "";
    for (let j = 1; j <= i; j++) {
        char += ("*");
    }
    console.log(char)
}
// Task 8 :write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let index = 1; index <= 10; index++) {
    if (index == 5) {

        continue;//5 is skiped
    }
    console.log(index);
}

// Task 9: write a program to print numbers form 1 to 10 , but stop the loop when the number is 7 using the break statement.
for (let index2 = 1; index2 < 10; index2++) {
    if (index2 == 7) {
        break;// loop is stoped
    }
    console.log(index2);
}