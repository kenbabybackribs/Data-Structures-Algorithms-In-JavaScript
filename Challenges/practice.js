// PROBLEM 1
const findStudent = function (allStudents, studentName) {
  // Step-by-step instructions:
  // 1. Iterate over the array of students.
  // 2. Check if the current student matches the given studentName.
  // 3. Return the studentName if found, otherwise return undefined.
};

// PROBLEM 2
const reverseString = function (str) {
  // Step-by-step instructions:
  // 1. Check if the string includes a space.
  // 2. If it does, split the string by spaces, reverse the array, and join it back with spaces.
  // 3. If it does not, split the string into characters, reverse the array, and join it back without spaces.
};

// PROBLEM 3
const palindromes = function (string) {
  // Step-by-step instructions:
  // 1. Reverse the string.
  // 2. Compare the original string with the reversed string.
  // 3. Return true if they are the same, otherwise return false.
};

// PROBLEM 4
const intReversal = function (integer) {
  // Step-by-step instructions:
  // 1. Convert the integer to a string.
  // 2. Split the string into characters.
  // 3. Reverse the array of characters.
  // 4. Join the characters back into a string.
  // 5. Convert the reversed string back to an integer and return it.
};

// PROBLEM 5
const capitalization = function (str) {
  // Step-by-step instructions:
  // 1. Convert the string to lowercase.
  // 2. Split the string into an array of words.
  // 3. Capitalize the first letter of each word.
  // 4. Join the words back into a single string with spaces.
};

// PROBLEM 6
const fizzBuzz = function (n) {
  // Step-by-step instructions:
  // 1. Create a loop from 1 to n.
  // 2. For each number, check if it is divisible by 3 and 5, only 3, or only 5.
  // 3. Print "FizzBuzz", "Fizz", "Buzz", or the number itself based on the conditions.
};

// PROBLEM 7
const prices = [7, 1, 5, 3, 6, 4];
let minPrice = prices[0];
let maxPrice = 0;
let currentProfit;

// Step-by-step instructions:
// 1. Initialize minPrice with the first price.
// 2. Loop through the array starting from the second price.
// 3. Update minPrice with the minimum value between the current minPrice and the current price.
// 4. Calculate the profit by subtracting minPrice from the current price.
// 5. Update maxPrice with the maximum value between the current maxPrice and the calculated profit.
// 6. Print maxPrice.

// PROBLEM 8
const arrayChunk = function (arr, num) {
  // Step-by-step instructions:
  // 1. Create an empty results array.
  // 2. Determine the size of each chunk.
  // 3. Loop through the array in steps of the chunk size.
  // 4. Slice the array to get each chunk and add it to the results array.
  // 5. Return the results array containing chunks.
};

// PROBLEM 9
const twoSum = function (arr, target) {
  // Step-by-step instructions:
  // 1. Create a nested loop to iterate through the array.
  // 2. For each pair of elements, check if their sum equals the target.
  // 3. Return the indices of the two elements if their sum matches the target.
  // 4. If no such pair is found, return an empty array.
};

// PROBLEM 10
const isValidParenthesis = function (str) {
  // Step-by-step instructions:
  // 1. Initialize a stack to keep track of opening parentheses.
  // 2. Loop through each character in the string.
  // 3. If the character is an opening parenthesis, push it onto the stack.
  // 4. If the character is a closing parenthesis, check if it matches the top of the stack.
  // 5. Return true if the stack is empty after processing all characters, otherwise return false.
};

// PROBLEM 11
const stackReverseString = function (str) {
  // Step-by-step instructions:
  // 1. Create an empty stack.
  // 2. Push each character of the string onto the stack.
  // 3. Initialize an empty string for the reversed result.
  // 4. Pop characters from the stack and append them to the reversed string.
  // 5. Return the reversed string.
};

// PROBLEM 12
const wordCounter = function (str) {
  // Step-by-step instructions:
  // 1. Convert the string to lowercase and split it into an array of words.
  // 2. Create an empty object to store word counts.
  // 3. Loop through each word in the array.
  // 4. Update the count for each word in the object.
  // 5. Return the object with word counts.
};

// PROBLEM 13
const twoSumRefactor = function (nums, target) {
  // Step-by-step instructions:
  // 1. Create an empty object to store indices of numbers.
  // 2. Loop through the array.
  // 3. For each number, calculate its complement (target - current number).
  // 4. Check if the complement exists in the object and is not the current index.
  // 5. Return the indices if a match is found.
  // 6. Update the object with the current number and its index.
  // 7. Return an empty array if no match is found.
};
