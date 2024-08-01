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
    const newNode = new Node(data); // Create a new node with the given data
    if (!this.first) {
      // If the queue is empty
      this.first = newNode; // Set first to the new node
      this.last = newNode; // Set last to the new node
      this.length++; // Increment the length of the queue
      return this; // Return the updated queue
    }
    this.last.next = newNode; // Link the current last node to the new node
    this.last = newNode; // Update last to the new node
    this.length++; // Increment the length of the queue
    return this; // Return the updated queue
  }

  // Method to remove a node from the beginning of the queue
  dequeue() {
    if (!this.first) return null; // If the queue is empty, return null
    this.first = this.first.next; // Update first to the next node
    this.length--; // Decrement the length of the queue
    if (this.length === 0) {
      // If the queue is now empty
      this.last = null; // Set last to null
    }
    return this; // Return the updated queue
  }
}

const queue = new Queue(1); // Create a new queue with initial node "person 1"
queue.enqueue(2); // Add node "person 2" to the end of the queue
queue.enqueue(3); // Add node "person 3" to the end of the queue
queue.enqueue(4); // Add node "person 4" to the end of the queue
queue.dequeue(); // Remove the first node from the queue
console.log(queue); // Log the queue to the console
