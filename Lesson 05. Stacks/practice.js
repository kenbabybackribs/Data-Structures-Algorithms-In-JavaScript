// Class representing a node in the stack
class Node {
  constructor(data) {
    this.data = data; // The data the node holds
    this.next = null; // Reference to the next node, initially null
  }
}

// Class representing the stack
// Class representing the stack
class Stack {
  constructor(node) {
    let newNode = new Node(node); // Create a new node
    this.first = newNode; // Set the first node to the new node
    this.last = newNode; // Since there's only one node, last is also the first node
    this.length = 1; // Length of the stack is initially 1
  }

  // Custom push method to add a node to the top of the stack
  push(node) {
    // TODO: Create a new node with the provided data
    // TODO: Set the new node's next reference to the current first node
    // TODO: Update the first node to the new node
    // TODO: Increment the length of the stack
    // TODO: Return the updated stack (optional)
  }

  // Custom pop method to remove a node from the top of the stack
  pop() {
    // TODO: Check if the stack is empty; if so, return null
    // TODO: Update the first node to the next node
    // TODO: Decrement the length of the stack
    // TODO: If the stack is now empty, update the last node to null
    // TODO: Return the removed node's data (optional)
  }

  // Custom min method to find the minimum value in the stack
  min() {
    // TODO: Initialize a variable to track the minimum value, starting with the first node's data
    // TODO: Iterate through the stack, updating the minimum value if a smaller value is found
    // TODO: Return the minimum value
  }
}

// Create a new stack with initial node "book 1"
const stack = new Stack(1);
