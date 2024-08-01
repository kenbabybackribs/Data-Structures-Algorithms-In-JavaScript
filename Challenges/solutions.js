/*
 PROBLEM 1
Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents , studentName),
iterate over all students and find that specific user "studentName"
*/

const studentList = ["Keandre", "Jalen", "Chris", "Victoria", "Valerie"];
// student database

const findStudent = function (allStudents, studentName) {
  return allStudents.find((student) => student === studentName);
}; // find method loops through each student  in our database then finds that student that is equal to the student name that was  passed in

console.log(findStudent(studentList, "Keandre")); // returns "Keandre"
// passes a student database and student name as arguemnt

// --------------------------------------------------------------------------------

/* 
PROBLEM 2
Reverse a String - Hello -> olleH
*/

const reverseString = function (str) {
  if (str.includes(" ")) console.log(str.split(" ").reverse().join(" "));
  else console.log(str.split("").reverse().join(""));
};

/*
  if a string INCLUDES A SPACE like "hello wold" split the string into a array based on the space  ["hello", "world"] 
  then reverse it  ["world", "hello"] then join it together with spaces "world hello" 
  */

/* 
  if a string DOES NOT INCLUDE A SPACE like split the string into a array with no spaces ['h', 'e', 'l', 'l', 'o']  
  then reverse it ['o' ,'l', 'l', 'e', 'h'] then join it together with no spaces "olleh"
};
*/

reverseString("hello world"); // returns ---> "world hello"
reverseString("hello"); // returns ---> "olleh"

// --------------------------------------------------------------------------------

/* 
PROBLEM 3
Check if a String is a Palindromes - cddc -> cddc ✅    hello -> olleh 👎
*/

const palindromes = function (string) {
  const orginalString = string; // copy of passed in string
  const reverseString = orginalString.split("").reverse().join(""); // passed in string reversed ex. top is now reversed to pot

  if (orginalString === reverseString) return true;
  // if the string passed in is the same reversed return true
  else return false;
  // if the string passed in is not the same reversed return false
};

console.log(palindromes("cddc")); // returns ---> true
console.log(palindromes("hello")); // returns ---> false

// --------------------------------------------------------------------------------

/* 
PROBLEM 4
Reverse a integer - 1234 -> 4321
*/

const intReversal = function (integer) {
  return parseInt((integer + "").split("").reverse().join(""));

  /*
  We pass in a integer as a argument then transform that number into a string (1234 + "" = '1234) so we can split it into an array ['1', '2', '3', 4'] 
  then reverse it ['4', '3', '2', '1'] then join it back into a string '4321', and then after all of that we then take our newly created string
  and pass it into parseInt which takes a string and converts it to a number parseInt('4321') ---> 4321
  */
};

console.log(intReversal(234)); // returns 432
console.log(intReversal(5678)); // returns 8765

// --------------------------------------------------------------------------------

/* 
PROBLEM 5
Sentence Capitalization - hello world -> Hello World \ keandre miller -> Keandre Miller
*/

const capitalization = function (str) {
  return str
    .toLowerCase() // sets string to lowercase
    .split(" ") // splits string into array based on space ['hello', 'world']
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");
  /*
  1. map is going to create a new array based on our current array
  2. we take the letter at the first position then set it to uppercase
  3. we then slice part of the word starting from the second position 'ello'
  4. we add our newly uppercase word to our sliced word ['Hello World']
  5. we then finally join them together into a string with a space 'Hello World'
  */
};

capitalization("hello world!"); // returns Hello World

// --------------------------------------------------------------------------------

/* 
PROBLEM 6
FizzBuzz - Print numbers from 1 to n, if number is dvisible by 3, print 'Fizz', if number is divisible by 5, print "Buzz", if number is divisble by 3 and 5 print "FizzBuzz", else print number
*/

const fizzBuzz = function (n) {
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      console.log(
        i % 3 === 0 && i % 5 === 0
          ? `FizzBuzz `
          : i % 3 === 0
          ? `Fizz `
          : i % 5 === 0
          ? `Buzz`
          : i
      );
    }
  }

  /*
  1. If the number passed is greater than one create a for loop

  2. In our for loop i starts at 1 and is true as long as it's less than our number

  3. In each iteration check if i is divisible by 3 and 5 if so print FizzBuzz
                                            i % 3 === 0 && i % 5 === 0
                                            
  4. In each interation check if i is only divisible by 3 if so print Fizz, 
                                                  i % 3=== 0

  5. In each iteration check if i is only divisible by 5 if so print Buzz
                                                  i % 5=== 0

  6. At the end of the loop is i isn't divisible by anything just return i
                                                            i      
  */
};

fizzBuzz(15);

// --------------------------------------------------------------------------------

/* 
PROBLEM 7
MaxProfit - Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once

Here's what you're given
  A list of stock prices for each day -> [7,1,5,3,6,4]

  Here's what you need to find
    The difference between the cheapest price you could have bought
    the stock and the most expensive price you could have sold it later on
*/

const prices = [7, 1, 5, 3, 6, 4]; // prices each day

let minPrice = prices[0]; // assuming the first day is the minimum to buy
let maxPrice = 0;
let currentProfit;

for (let i = 1; i < prices.length; i++) {
  minPrice = Math.min(minPrice, prices[i]); // returns 1
  currentProfit = prices[i] - minPrice; // returns 6
  maxPrice = Math.max(maxPrice, currentProfit); // returns 5
}

/*
  1. In our loop we set i to 1 and the condition is true as long as i is less than prices.length

  2.  we set the min price to be the minimum value the Math.min returns from our current minPrice which is and our prices array at each iteration so because we set i to be at 1 it would look something like 

  prices[i] ---> 1,5,3,6,4

  And between 7 and these numbers the new minPrice would be 1 because it is the lowest value of the others


  3. We set our current profit to be prices[i] at each iteration - minPrice, and we do this so we can find the maximum profit we can get from selling the lowest price, and that would look something like

                prices[i]            minPrice          equals
                    1           -             1                        = 0
                    5           -             1                        = 4
                    3           -             1                        = 2
                    6           -             1                        = 5
                    4           -             1                         = 3 
                                            
  4.  We then set our maxPrice  to take the maximum value between our maxPrice which is currently 0, and our currentProfit and this should give us 5 because 5 is the most profit that we can get back  because we bought in for 1 and then we sell for 6 which means we made 5 back

  */

console.log(`Maximum Profit: ${maxPrice}`);

// --------------------------------------------------------------------------------

/* 
PROBLEM 8
Array Chunk - Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunnks of the specified size.

chunk([1,2,3,4,5,6,7,8])      [[1,2,3], [4,5,6,], [7,8]]

chunkArray                            // Output: [[1,2], [3,4]]
*/

const arrayChunk = function (arr, num) {
  const results = [];
  const chunkSize = Math.ceil(arr.length / num);
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    results.push([...chunk]);
  }

  return results;
};

/*
1. We create a empty results array

2. We then divide our array based on the number that was passed in, so lets say we pass in a 2, and our array length is 10 we are doing

10 / 2 --> 5

We do this because when we then loop over our array we now know 2 arrays will be created, and each array will contain 5 elements

3.  A for loop is created, it starts at 0, and in each iteration we take the current iteration + the chunkSize

Why do we do this?,  just wait till step 4. then i'll explain everything

4. We then use the slice method which starts at i, and ends at the chunkSize

What we are essentially doing here is in each iteration of our loop we add the current iteration + the chunkSize which means lets say our  

chunkSize = 5, since in the beginning i = 0 

in the next iteration i = 5
                                 
 And we do this because it allows us to the slice part of the array starting from i, and ending at our chunkSize 

  first iteration arr.slice(i=0, i=0 +chunkSize=5)

 last iteration arr.slice(i=5, i=5 + chunkSize=5)

 This allows us to extract different parts of the array

 5. We then finally push the chunk into array

 first iteration -> results = [[1,2,3,4,5]]

 second iteration -> results = [[1,2,3,4,5], [,6,7,8,9,10]]

*/

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// returns [[1,2,3,4], [5,6,7,8]]

// --------------------------------------------------------------------------------

/* 
PROBLEM 9
Two Sum - Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers at  in the list

Example 

if the list is [2,7,11,15] and the target is 9, then the answer wold be [0,1] because 2 (at index 0) plus 7 at (index 1) equals 9.
*/

const twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/*
1. Create a function that takes an array and a target number

2. Create a outer for loop and set it to 0

3. Create a inner for loop and set it to 1

4. We are using an if statement to check if outer loop at the current iteration, and our inner loop at the current iteration equal each other, if so return i, and j

Here's why it makes sense we set our outer loop to 0 and our inner loop to 1
So here's what's happening each iteration

Lets say our array is [15, 5,  25, 10, 55] 

and our target is 60 

which means that we  need to find the 5 and 55

How this works is our outer loop get the first position of our array

arr[i] --> 15

Then our inner loop goes through every possible combination starting at the second position to find the number that plus our outer loop number which is 15 equals our target which is 60 so here's how that would look

15 + 5 = 60 ---> NO

15 + 25 = 60 ---> NO

15 + 10 = 60 ---> NO

15 + 55 = 60 ---> NO

The inner loop has finished execution, and could not match the number to equal the target so the outer loop restarts and is now incremented + 1

So now  arr[i] doesn't point at 15 anymore it now points at 5 because i used to be 0 now its 1 so it takes the second element from the array, and the we restart the inner loop

5 + 5 = 60 ---> NO

5 + 25 = 60 ---> NO

5 + 10 = 60 ---> NO

5 + 55 = 60 ---> YES

We have now found our match which now allows us to return i, and j 

i = 0
j = 4 

So the index is of the matches are [0, 4]

*/

console.log(twoSum([15, 5, 25, 10, 55], 60)); // returns [0, 4]

// --------------------------------------------------------------------------------

/* 
PROBLEM 10
isValidParenthesis- Check if a string parenthesis is valid


Example 

isValidParenthesis("(){}[]") // true
isValidParenthesis("([)]") // false
isValidParenthesis("()") // true
isValidParenthesis("(")) // false
*/

const isValidParenthesis = function (str) {
  if (str.includes("()") || str.includes("[]") || str.includes("{}"))
    // Check if the string includes any of the valid pairs of parentheses
    return true; // If any valid pair is found, return true
  else return false; // If no valid pair is found, return false
};

// USING A STACK

const stackValidParenthesis = function (str) {
  const stack = []; // Initialize an empty stack to keep track of opening brackets.
  const brackets = {
    // Define a map of opening brackets and their corresponding closing brackets.
    "{": "}", // Opening curly brace maps to closing curly brace.
    "[": "]", // Opening square bracket maps to closing square bracket.
    "(": ")", // Opening parenthesis maps to closing parenthesis.
  };

  // Iterate over each character in the input string.
  for (let char of str) {
    if (brackets[char]) {
      // Check if the character is an opening bracket (i.e., exists in the brackets map).
      stack.push(char); // If it is, push the opening bracket onto the stack.
    } else {
      // If the character is not an opening bracket, it must be a closing bracket.
      const top = stack.pop(); // Remove the top element from the stack (the most recent opening bracket).
      // Check if the stack is empty (which means there was no matching opening bracket)
      // or if the removed bracket does not match the current closing bracket.
      if (!top || brackets[top] !== char) {
        return false; // If either condition is true, return false as the brackets are not properly matched.
      }
    }
  }
  // After processing all characters, check if the stack is empty.
  return stack.length === 0; // Return true if the stack is empty (all opening brackets were matched),
  // otherwise return false (there are unmatched opening brackets).
};

console.log(isValidParenthesis("()")); // returns true
console.log(isValidParenthesis(")")); // returns false
console.log(stackValidParenthesis("()")); // returns true
console.log(stackValidParenthesis(")")); // returns false

// --------------------------------------------------------------------------------

/* 
PROBLEM 11
Reverse String Using Stack - hello world ---> dlrow olleh
*/

const stackReverseString = function (str) {
  // Define a function to reverse a string using a stack.
  const stack = []; // Initialize an empty stack to hold characters of the string.
  for (let char of str) {
    // Iterate over each character in the input string.
    stack.push(char); // Push each character onto the stack.
  }
  let reversedString = ""; // Initialize an empty string to hold the reversed result.
  while (stack.length > 0) {
    // Continue while there are characters in the stack.
    reversedString += stack.pop(); // Remove the top character from the stack and append it to reversedString.
  }

  return reversedString; // returns the orginal string but reversed
};

console.log(stackReverseString("keandre miller"));

// --------------------------------------------------------------------------------

/* 
PROBLEM 12
Word Counter - Create a function that tells you how many times a certain word appears inside of a string

Example.

"Hello my name name name is keandre"

return {    hello: 1,   my: 1,    name: 3,   is: 1,    keandre: 1}
*/

const wordCounter = function (str) {
  const strArr = str.toLowerCase().split(" "); // Split the input string into an array of words
  const wordCheck = {}; // Use an object to store the occurrences of each word
  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i]; // Get the current word

    if (wordCheck[word]) {
      wordCheck[word]++; // Increment the count if the word already exists in the object
    } else {
      wordCheck[word] = 1; // Initialize the count to 1 if it's the first occurrence of the word
    }
  }
  return wordCheck; // Return the object containing word counts
};

console.log(wordCounter("hello my name name name is keandre"));

// returns  { hello: 1, my: 1, name: 3, is: 1, keandre: 1 }

// USING A HASH TABLE

const hashWordCounter = function (text) {
  // Define a function to count word occurrences in a text
  const lowerText = text.toLowerCase(); // Convert the entire text to lowercase for case-insensitive counting
  const wordMap = {}; // Initialize an empty object to store word counts
  const words = lowerText.split(" "); // Split the text into an array of words based on spaces

  for (const word of words) {
    // Iterate over each word in the array
    if (word in wordMap) {
      // Check if the word is already a key in the wordMap object
      wordMap[word]++; // If it exists, increment the count of that word
    } else {
      wordMap[word] = 1; // If it does not exist, add the word to the object with a count of 1
    }
  }

  return wordMap; // Return the object containing words and their respective counts
};

console.log(hashWordCounter("hello my name name name is keandre"));

//--------------------------------------------------------------------------------

/* 
PROBLEM 13
Two Sum Refactored

*/

const twoSumRefactor = function (nums, target) {
  const numMap = {}; // Initialize an empty object to store the indices of the numbers in the array

  for (let i = 0; i < nums.length; i++) {
    // Loop through each element in the nums array
    const compliment = target - nums[i]; // Calculate the compliment by subtracting the current element from the target
    console.log(compliment); // Print the compliment to the console for debugging purposes

    if (compliment in numMap && numMap[compliment] !== i) {
      // Check if the compliment exists in numMap and is not the same as the current index
      return [numMap[compliment], i]; // If found, return the indices of the compliment and the current element as a pair
    }

    numMap[nums[i]] = i; // Store the index of the current element in numMap
  }

  return []; // If no pair is found, return an empty array
};
