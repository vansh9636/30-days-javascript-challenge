// // Day 21: leetcode Easy

// // Task:1 solve the "two sum" problem on leetcode .
// // 1) write a function that takes an array of numbers and a target number, adn returns the indices of the two numbers that add up t othe target .
// // 2) log the indices for a few test cases.

function twosum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return `index of numbers that add upto ${target} are ${i} and ${j}`;
        }
      }
    }
    return `No two numbers add upto ${target}`;
  }
   console.log(twosum([2, 7, 11, 15], 9));


//   Task 2: solve the "reverse integer " problem on leetcode
// 1) write a function that takes an integer and returns it with its digits reversed. 
// 2) handle edge cases like negative numbers and numbers ending in zero 
// 3) log the reversed integers for a few test cases.


function reverse(n) {
    const isNegative = n < 0;
    let num = Math.abs(n);
    let reversed = 0;
  
    while (num > 0) {
      const digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10);
    }
  
    if (reversed > 2 ** 31 - 1) {
      return 0;
    }
  
    return isNegative ? -reversed : reversed;
  }
  
  console.log(reverse(-654897321));

//  Task 3: Solve the "Palindrome Number" problem on LeetCode
//   1) Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
//  2) Log the result for a few test cases, including edge cases like negative numbers.


function palindrome(str) {
    let isPalindrome = true;
    if (str.length < 2) {
      return isPalindrome;
    }
    let i = 0,
      j = str.length - 1;
  
    while (i < j) {
      if (str[i] === str[j]) {
        isPalindrome = true;
      } else {
        isPalindrome = false;
      }
      i++;
      j--;
    }
  
    return isPalindrome;
  }
  
  console.log(palindrome("abcba"));
  console.log(palindrome("abcbaab"));

  
