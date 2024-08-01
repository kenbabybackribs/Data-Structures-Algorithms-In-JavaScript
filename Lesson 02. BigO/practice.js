// O(n) Example
const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

// Function to search for an item in the groceries array
const search = (item) => {
  // TODO: Implement the logic to search for an item in the groceries array.
  // Iterate through the array and check if each element matches the item.
  // If a match is found, print a message.
  // You can use a loop to accomplish this task.
  // TODO: Implement the second search loop if necessary.
  // Note: This is redundant and should be avoided. One search loop is sufficient.
};

// Call the search function to find "eggs"
search("eggs");

// O(1) Example
const numberList = [1, 2, 3, 4, 5]; // Renamed variable to avoid conflict

// Function to get an element from an array by index
const getElement = (arr, index) => {
  // TODO: Implement the logic to return an element from the array at the given index.
  // Use the index to access the element in the array and return it.
};

// Print the element at index 0 of the numberList array
console.log(getElement(numberList, 0));

// O(n^2) Example
function findPairs(arr) {
  // TODO: Implement the logic to find all pairs in the array.
  // Use nested loops to iterate through the array and print each unique pair.
  // The outer loop iterates through each element, and the inner loop finds pairs with the remaining elements.
  // TODO: Implement the single loop if necessary.
  // This loop is used to print a separator or perform another task.
  // Note: This loop has a different time complexity (O(n)).
}

// Call the findPairs function to find pairs in the numberList array
findPairs(numberList);
