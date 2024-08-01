// Array Example

// Array of strings
const arrOfStrings = ["a", "b", "c", "d"];

// Array of numbers
const arrOfNumbers = [1, 2, 3, 4];

// Array of boolean values
const boolArr = [true, false];

// Mixed array with various types of elements
const mixed = ["a", 2, true, undefined, null, { a: "a" }, ["b"]];

// Custom Array class
class MyArr {
  constructor() {
    this.length = 0; // Initialize the length of the array
    this.data = {}; // Initialize an object to store the array elements
  }

  // Method to add an element to the end of the array
  push(inputData) {
    // TODO: Add the new element at the end of the data object
    // TODO: Increase the length of the array
    // TODO: Return the new length of the array
  }

  // Method to get an element by index
  myGetMethod(index) {
    // TODO: Return the element at the specified index
  }

  // Method to remove the last element of the array
  pop() {
    // TODO: Remove the last element from the data object
    // TODO: Decrease the length of the array
    // TODO: Return the new length of the array
  }

  // Method to remove the first element of the array
  shift() {
    // TODO: Shift all elements one position to the left
    // TODO: Remove the last element, which is now a duplicate
    // TODO: Decrease the length of the array
    // TODO: Return the updated data object
  }

  // Method to remove an element by index
  deleteByIndex(index) {
    // TODO: Check if the index is within valid range
    // TODO: Shift all elements after the specified index one position to the left
    // TODO: Remove the last element, which is now a duplicate
    // TODO: Decrease the length of the array
    // TODO: Return the updated data object
  }
}

// Create an instance of MyArr
const myNewArray = new MyArr();
