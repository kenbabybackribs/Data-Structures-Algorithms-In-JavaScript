// Class representing a node in the stack
class Node {
  constructor(data) {
    this.data = data; // The data the node holds
    this.next = null; // Reference to the next node, initially null
  }
}

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
    // Implement push
  }

  // Custom pop method to remove a node from the top of the stack
  pop() {
    // Implement pop
  }

  // Custom min method to find the minimum value in our stack
  min() {
    // Implement min
  }
}

// Create a new stack with initial node "book 1"
const stack = new Stack(1);
