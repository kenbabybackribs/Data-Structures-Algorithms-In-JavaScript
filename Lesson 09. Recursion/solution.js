// Define a function named countDown that takes one parameter 'number'
const countDown = function (number) {
  // Base case: If 'number' is 0, print a message and stop the recursion
  if (number === 0) {
    return console.log(`recursion has finished`);
  }
  // Recursive call: Call countDown with 'number - 1'
  // This continues the countdown process
  countDown(number - 1);
};
// Call the countDown function with an initial value of 10
countDown(10);

// A factorial is a meth function that multiples a given positive integer by the positive integers less  than it down to 1

/*
Examples

    Factorial of 5: 
                            5! = 5 x 4 x 3 x 2 x 1 = 120

    Factorial of 3: 
                            3! = 3 x 2 x1 = 0

    Factorial of 0
                            0! = 1
*/

// Define a function named factorial that takes one parameter 'number'
const factorial = function (number) {
  // Check if 'number' is 0; if true, return 1 (base case)
  return number === 0
    ? 1
    : // Otherwise, return 'number' multiplied by the factorial of 'number - 1' (recursive case)
      number * factorial(number - 1);
};

// Call the factorial function with an argument of 5 and print the result to the console
console.log(factorial(5)); // Output: 120
