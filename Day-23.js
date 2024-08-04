// Day 23: Leetcode hard

// Task 1: Solve the Median of two Sorted Arrays problem on Leetcode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;
    let low = 0;
    let high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === x ? Infinity : nums1[partitionX];

        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === y ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted properly or other input constraints are violated");
}

console.log('The median is :', findMedianSortedArrays([1, 3], [2])); // Output: The median is: 2
console.log('The median is :', findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000
console.log('The median is :', findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.00000


// task 3: // Task 3: Solve the Trapping Rain Water Problem on Leetcode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining
// Log the amount of trapped water for a few test cases. 

function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

// Test cases
const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const trappedWater1 = trap(heights1);
console.log(`Amount of trapped water: ${trappedWater1}`); // Output: 6

const heights2 = [4, 2, 0, 3, 2, 5];
const trappedWater2 = trap(heights2);
console.log(`Amount of trapped water: ${trappedWater2}`); // Output: 9

const heights3 = [1, 0, 2];
const trappedWater3 = trap(heights3);
console.log(`Amount of trapped water: ${trappedWater3}`); // Output: 1

// task 4: Solve the N-Queens problem on Leetcode.
// Write a function that places in queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the in queens puzzle
// Log the distinct solutions for a few test cases

let solveNQueens = function (n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const placeQueens = (row) => {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                placeQueens(row + 1);
                board[row][col] = '.';
            }
        }
    };

    placeQueens(0);
    return solutions;
};

// Test cases
console.log(solveNQueens(4));

// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

console.log(solveNQueens(1));
// Output: [["Q"]]


// Task 5: Solve the Word Ladder problem on Leetcode.
// write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin ward to the end word such that only one letter can be changed at a time and
// each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few test cases.

let ladderLength = function (beginWord, endWord, wordList) {
    // Create a set of words for quick lookup
    const wordSet = new Set(wordList);

    // If the endWord is not in the word list, return 0
    if (!wordSet.has(endWord)) return 0;

    // Initialize the queue for BFS
    const queue = [[beginWord, 1]];

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        // If the current word is the end word, return the current level
        if (currentWord === endWord) return level;

        // Try changing each character of the current word
        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) { // 97 to 122 are ASCII values for 'a' to 'z'
                const newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);

                // If the new word is in the word set, add it to the queue
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord); // Remove the word from the set to avoid revisiting
                }
            }
        }
    }

    // If we exhaust the queue without finding the end word, return 0
    return 0;
};

// Test cases
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2