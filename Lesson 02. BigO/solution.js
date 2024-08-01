// O(n) Example
const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

// Function to search for an item in the groceries array
const search = (item) => {
  // First loop to search for the item
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      // Print a message if the item is found
      console.log(`Found: ${item}`);
    }
  }

  // Second loop to search for the item again (redundant)
  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      // Print a message if the item is found
      console.log(`Found: ${item} 2`);
    }
  }

  // O(n) + O(n) = O(2n) which simplifies to O(n)
  // The second loop is redundant and does not add any additional value
};

// Call the search function to find "eggs"
search("eggs");

// O(1) Example
const numberList = [1, 2, 3, 4, 5]; // Renamed variable to avoid conflict

// Function to get an element from an array by index
const getElement = (arr, index) => arr[index];
// Print the element at index 0 of the numberList array
console.log(getElement(numberList, 0));

// O(n^2) Example
function findPairs(arr) {
  // O(n^2) - Nested loops to find all pairs in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Print each pair of elements
      console.log(`Pairs: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n) - Single loop to print a separator
  for (let q = 0; q < arr.length; q++) {
    console.log(`---------------`, q);
  }
}

// Call the findPairs function to find pairs in the numberList array
findPairs(numberList);
