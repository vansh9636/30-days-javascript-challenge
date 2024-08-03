// Day 22:leetcode Medium 

// Task 1: soslve the add two numbers problem on leetcode.
// write a funtion that takes two nom-empty linked list representing  two non -negative integers. the digits are stored in reverse order, and each node contains a single digit add the tw onumbers and return the sum as linked list 
//  creata a few test cases with linked list and log the sumas a linked list .


class Nodelist {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const addtwonum = function (l1, l2) {
    let head = new Nodelist(0);
    let p = l1, q = l2, current = head;
    let carry = 0;
  
    while (p !== null || q !== null) {
      let x = p !== null ? p.val : 0;
      let y = q !== null ? q.val : 0; // Use 'y' instead of redeclaring 'q'
  
      let sum = carry + x + y;
  
      carry = Math.floor(sum / 10);
      current.next = new Nodelist(sum % 10);
      current = current.next;
  
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
    }
  
    if (carry > 0) {
      current.next = new Nodelist(carry);
    }
  
    return head.next;
  };
  
  const lineed = (arr) => {
    let head = new Nodelist(0);
    let current = head;
    for (let num of arr) {
      current.next = new Nodelist(num);
      current = current.next;
    }
    return head.next;
  };
  
  let l1 = lineed([2, 4, 3]); // represents the number 342
  let l2 = lineed([5, 6, 4]); // represents the number 465
  
  let result = addtwonum(l1, l2);
  
  const printLinkedList = (node) => {
    let arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr.reverse().join(""));
  };
  
  printLinkedList(result); // Output  the number 807
  

// Task 2: solve the longest substring without repeating characters problem on leetcode 
// write a funciton that takes a string and returns the length of the longest substring witout repeating characters.
//log the length for a few test cases 


function lengthofStr(s) {
    let n = s.length;
    let maxLength = 0;
    let start = 0;
    let charMap = new Map();

    for (let end = 0; end < n; end++) {
        if (charMap.has(s[end])) {
            start = Math.max(charMap.get(s[end]) + 1, start);
        }
        charMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
// Test Case 1
let s1 = "abcabcbb";
console.log(lengthofStr(s1)); // Output: 3 ("abc")

// Test Case 2
let s2 = "bbbbb";
console.log(lengthofStr(s2)); // Output: 1 ("b")

// Test Case 3
let s3 = "pwwkew";
console.log(lengthofStr(s3)); // Output: 3 ("wke")


/*
Activity-3[Container with most water]
Task-3:Solve the "Container With Most Water" problem on Leetcode.
Write a function that takes an array of non-negative intergers where each integer represents the height of a line drawn at each point.Find two lines that holds together with the x-axis form a container, such that the container holds the most water.
Log the maximum amount of water for a few test cases. 
*/

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
// Test Case 1
let heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights1)); // Output: 49

// Test Case 2
let heights2 = [1, 1];
console.log(maxArea(heights2)); // Output: 1

// Test Case 3
let heights3 = [4, 3, 2, 1, 4];
console.log(maxArea(heights3)); // Output: 16
