/*
SINGLY LINKED LIST
*/

// Class representing a node in the singly linked list
class SingleNode {
  constructor(data) {
    this.data = data; // The data the node holds
    this.next = null; // Reference to the next node, initially null
  }
}

// Class representing the singly linked list
class SinglyLinkedList {
  constructor(value) {
    this.head = new SingleNode(value); // Create the head node with the initial value
    this.tail = this.head; // Since there's only one node, tail is also head
    this.length = 1; // Length of the list is initially 1
  }

  // Method to add a node to the end of the list
  push(value) {
    // Implement push
  }

  // Method to remove a node from the end of the list
  pop() {
    // Implement pop
  }

  // Method to add a node to the beginning of the list
  unshift(value) {
    // Implement unshift
  }

  // Method to remove a node from the beginning of the list
  shift() {
    // Implement shift
  }

  // Method to get the first node (head) of the list
  getFirstNode() {
    // Implement getFirstNode
  }

  // Method to get the last node (tail) of the list
  getLastNode() {
    // Implement getLastNode
  }

  // Method to get a node by its index in the list
  getIndex(index) {
    // Implement getIndex
  }

  // Method to update the value of a node at a given index
  set(index, value) {
    // Implement set
  }

  // Method to insert a node at a given index
  insert(value, index) {
    // Implement insert
  }

  // Method to get the size of the list
  getSize() {
    // Implement getSize
  }

  // Method to clear the list
  clear() {
    // Implement clear
  }

  // Method to reverse the list
  reverseLinkedList() {
    // Implement reverseLinkedList
  }
}

const mySinglyLinkedList = new SinglyLinkedList("node 1"); // Create a new singly linked list with initial node "node 1"

/*
  DOUBLY LINKED LIST
  */

// Class representing a node in the doubly linked list
class DoubleNode {
  constructor(data) {
    this.data = data; // The data the node holds
    this.prev = null; // Reference to the previous node, initially null
    this.next = null; // Reference to the next node, initially null
  }
}

// Class representing the doubly linked list
class DoublyLinkedList {
  constructor(node) {
    const newNode = new DoubleNode(node); // Create a new node
    this.head = newNode; // Set the head to the new node
    this.tail = this.head; // Set the tail to the new node since it's the only node
    this.length = 1; // Length of the list is initially 1
  }

  // Method to create a new node
  createNewNode(node) {
    // Implement createNewNode
  }

  // Method to add a node to the end of the list
  push(node) {
    // Implement push
  }

  // Method to remove a node from the end of the list
  pop() {
    // Implement pop
  }

  // Method to add a node to the beginning of the list
  unshift(node) {
    // Implement unshift
  }

  // Method to remove a node from the beginning of the list
  shift() {
    // Implement shift
  }

  // Method to reverse the list
  reverseLinkedList() {
    // Implement reverseLinkedList
  }
}

const myDoublyLinkedList = new DoublyLinkedList("node 1"); // Create a new doubly linked list with initial node "node 1"
