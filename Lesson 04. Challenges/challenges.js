/*
PROBLEM 1
Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents , studentName),
iterate over all students and find that specific user "studentName"


// My solution
const studentList = ["Keandre", "Jalen", "Chris", "Victoria", "Valerie"];

const findStudent = function (allStudents, studentName) {
  return allStudents.find((student) => student === studentName);
};

console.log(findStudent(studentList, "Keandre"));

// -------------------------------------------------------

// Teacher Solution
const studentsDatabase = ["Jordan", "Erick", "John", "Michael", "Peter"];

const searchStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (studentName === allStudents[i])
      return console.log(`Found ${studentName}`);
  }
};

searchStudent(studentsDatabase, "John");

*/

/*
PROBLEM 2
Reverse a String - Hello -> olleH


// My solution
const reverseString = function (str) {
  if (str.includes(" ")) console.log (str.split(" ").reverse().join(" "))
  else console.log(str.split("").reverse().join(""))
};

reverseString('hello world')
reverseString('hello')

// -------------------------------------------------------

// Teacher Solution
const reverseString = str => str.split('')reverse().jon(')
console.log(reverseString('hello'))
console.log(reverseString('apple'))

/*
PROBLEM 3
Check if a String is a Palindromes - cddc -> cddc ✅    hello -> olleh 👎


// My solution
const palindromes = function (string) {
  const orginalString = string;
  const reverseString = orginalString.split("").reverse().join("");

  if (orginalString === reverseString) return true;
  else return false;
};

console.log(palindromes("cddc"));
console.log(palindromes("hello"));

// -------------------------------------------------------

// Teacher Solution
const palindrome = str -> str.split('').reverse().join('') === str
console.log(palindrome('huxn'))
console.log(palindrome('cddc'))

*/

/*
PROBLEM 4
Reverse a integer - 1234 -> 4321

// My solution
const intReversal = function (integer) {
  return parseInt((integer + "").split("").reverse().join(""))
};

console.log(intReversal(234))
console.log(intReversal(5678));

// -------------------------------------------------------

// Teacher Solution
const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
};

console.log(reverseInt(-123))
console.log(reverseInt(123))

*/

/*
PROBLEM 5
Sentence Capitalization - hello world -> Hello World \ huxn webdev -> HuXn WebDev


// My solution
const capitalization = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .forEach((word) => console.log(word.at(0).toUpperCase() + word.slice(1)));
};

capitalization("hello world!");


// -------------------------------------------------------

// Teacher Solution
const capitalize = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalize("hello world"));

*/

/*
PROBLEM 6
FizzBuzz - Print numbers from 1 to n, if number is dvisible by 3, print 'Fizz', if number is divisible by 5, print "Buzz", if number is divisble by 3 and 5 print "FizzBuzz", else print number


// My solution
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
};

fizzBuzz(100);

// -------------------------------------------------------

// Teacher Solution
const fizzBuzz = (n) => {
  for let(i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
      if(i % 3 === 0) console.log('Fizz')
        if (i % 5 === 0) console.log('Buzz')
          else console.log(i)
  }
}

fizzBuzz(15)

*/

/*
PROBLEM 7
MaxProfit - Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once

Here's what you're given
  A list of stock prices for each day -> [7,1,5,3,6,4]

  Here's what you need to find
    The difference between the cheapest price you could have bought
    the stock and the most expensive price you could have sold it later on

// My solution
const prices = [7, 1, 5, 3, 6, 4];

let minPrice = prices[0];
let maxPrice = 0;
let currentProfit;

for (let i = 1; i < prices.length; i++) {
  minPrice = Math.min(minPrice, prices[i]);
  currentProfit = prices[i] - minPrice;
  maxPrice = Math.max(maxPrice, currentProfit);
}

console.log(`Maximum Profit: ${maxPrice}`);

// -------------------------------------------------------

// Teacher Solution
const prices = [7,1,5,3,6,4]
const maxProfit = prices => {
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    minPrice = Math.min(minPrice, prices[i])
    const potentialProfit = currentPrice - minPrice
    maxPrice = Math.max(maxPrice, potentialProfit)
}

}
console.log(`Maximum profit: ${profit`})

*/

/*
PROBLEM 8
Array Chunk - Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunnks of the specified size.

chunk([1,2,3,4,5,6,7,8])      [[1,2,3], [4,5,6,], [7,8]]

chunkArray                            // Output: [[1,2], [3,4]]

// My solution
const arrayChunk = function (arr, num) {
  const results = [];
  const chunkSize = Math.ceil(arr.length / num);
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    results.push([...chunk]);
  }

  return results;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

// -------------------------------------------------------

// Teacher Solution
const = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    const chunk = array.slice(index, index + size)
    chunked.push(chunk)
    index += size
  }

  return chunked
}

console.log(chunk([1,2,3,4,5,6,,7,8], 3))

*/

/*
PROBLEM 9
Two Sum - Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers at  in the list


Example 

if the list is [2,7,11,15] and the target is 9, then the answer wold be [0,1] because 2 (at index 0) plus 7 at (index 1) equals 9.

// My solution
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

console.log(twoSum([8, 10, 20, 5, 3, 2], 30));

// -------------------------------------------------------

// Teacher Solution
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

const res = twoSum([2,7,11,15], 9)
console.log(res)

*/

/*
PROBLEM 10



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 11



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 12



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 13



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 14



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 15



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 16



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 17



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 18



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 19



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 20



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 21



// My solution


// -------------------------------------------------------

// Teacher Solution

*/

/*
PROBLEM 22



// My solution


// -------------------------------------------------------

// Teacher Solution

*/
