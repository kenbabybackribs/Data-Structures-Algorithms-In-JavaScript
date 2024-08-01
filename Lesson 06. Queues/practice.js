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
    // Implement enqueue
  }

  // Method to remove a node from the beginning of the queue
  dequeue() {
    // Implement dequeue
  }
}

// Create a new queue with initial node "person 1"
const queue = new Queue(1);
