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
    let newNode = new Node(node); // Create a new node
    if (!this.first) {
      // If the stack is empty
      this.first = newNode; // Set first to the new node
      this.last = newNode; // Set last to the new node
    } else {
      // If the stack is not empty
      newNode.next = this.first; // Link new node to the current first node
      this.first = newNode; // Update first to the new node
      this.length++; // Increment the length of the stack
      return this; // Return the updated stack
    }
  }

  // Custom pop method to remove a node from the top of the stack
  pop() {
    if (this.length === 0) return null; // If the stack is empty, return null
    let temp = this.first; // Save the current first node
    this.first = temp.next; // Update first to the next node
    this.length--; // Decrement the length of the stack
    return this; // Return the updated stack
  }

  // Custom min method to find the minimum value in our stack
  min() {
    if (this.length === 0) return null;
    let minValue = this.first.data; // Initialize minValue with the data of the first node in the stack
    let currentNode = this.first; // Initialize currentNode to start at the first node
    while (currentNode !== null) {
      // Traverse the stack until the current node is null (end of the stack)
      if (currentNode.data < minValue) {
        // If the current node's data is less than minValue, update minValue
        minValue = currentNode.data; // Update minValue to the current node's data
      }
      currentNode = currentNode.next; // Move to the next node in the stack
    }
    return minValue; // Return the minimum value found in the stack
  }
}

const stack = new Stack(1); // Create a new stack with initial node "book 1"
stack.push(2); // Add node "book2" to the top of the stack
stack.push(3); // Add node "book3" to the top of the stack
stack.push(4); // Add node "book4" to the top of the stack
stack.pop(); // Remove the top node from the stack
stack.min(); // Log the minimum value in the stack
