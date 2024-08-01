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
    this.data[this.length] = inputData; // Add the new element at the end of the data object
    this.length++; // Increase the length of the array
    return this.length; // Return the new length of the array
  }

  // Method to get an element by index
  myGetMethod(index) {
    return this.data[index]; // Return the element at the specified index
  }

  // Method to remove the last element of the array
  pop() {
    delete this.data[this.length - 1]; // Remove the last element from the data object
    return this.length--; // Decrease the length of the array and return the new length
  }

  // Method to remove the first element of the array
  shift() {
    // Shift all elements one position to the left
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]; // Remove the last element, which is now a duplicate
    this.length--; // Decrease the length of the array
    return this.data; // Return the updated data object
  }

  // Method to remove an element by index
  deleteByIndex(index) {
    if (index >= 0 && index < this.length) {
      // Check if index is within valid range
      // Shift all elements after the specified index one position to the left
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1]; // Remove the last element, which is now a duplicate
      this.length--; // Decrease the length of the array
    }
    return this.data; // Return the updated data object
  }
}

// Create an instance of MyArr
const myNewArray = new MyArr();

// Add elements to the array
myNewArray.push("banana"); // Add "banana" to the array
myNewArray.push("apple"); // Add "apple" to the array
myNewArray.push("mango"); // Add "mango" to the array
myNewArray.push("pineapple"); // Add "pineapple" to the array

// Remove the last element from the array
myNewArray.myPopMethod();

// Get the element at index 0
myNewArray.myGetMethod(0);

// Remove the first element from the array
myNewArray.myShiftMethod();

// Delete element at index 0 and log the result
console.log(myNewArray.myDeleteByIndexMethod(0));

// Delete element at index 1 and log the result
console.log(myNewArray.myDeleteByIndexMethod(1));
