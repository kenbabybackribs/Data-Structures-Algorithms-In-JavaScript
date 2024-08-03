// Class representing a node in the queue
class Node {
  constructor(data) {
    this.data = data; // The data the node holds
    this.next = null; // Reference to the next node, initially null
  }
}

// Class representing the queue
class Queue {
  constructor(data) {
    let newNode = new Node(data); // Create a new node with the given data
    this.first = newNode; // Set the first node to the new node
    this.last = newNode; // Since there's only one node, last is also the first node
    this.length = 1; // Length of the queue is initially 1
  }

  // Method to add a node to the end of the queue
  enqueue(data) {
    // TODO: Create a new node with the given data
    // TODO: If the queue is empty
    // TODO: Set first to the new node
    // TODO: Set last to the new node
    // TODO: Increment the length of the queue
    // TODO: Return the updated queue
    // TODO: Link the current last node to the new node
    // TODO: Update last to the new node
    // TODO: Increment the length of the queue
    // TODO: Return the updated queue
  }

  // Method to remove a node from the beginning of the queue
  dequeue() {
    // TODO: If the queue is empty, return null
    // TODO: Update first to the next node
    // TODO: Decrement the length of the queue
    // TODO: If the queue is now empty
    // TODO: Set last to null
    // TODO: Return the updated queue
  }
}

// Create a new queue with initial node "person 1"
const queue = new Queue(1);
