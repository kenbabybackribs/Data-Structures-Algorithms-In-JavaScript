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
    // TODO: Create a new node with the given value
    // TODO: If the list is empty, set head and tail to the new node
    // TODO: Otherwise, link the current tail node to the new node
    // TODO: Update the tail to the new node
    // TODO: Increment the length of the list
  }

  // Method to remove a node from the end of the list
  pop() {
    // TODO: If the list is empty, return null
    // TODO: If there's only one node, set head and tail to null
    // TODO: Otherwise, iterate to find the second-to-last node
    // TODO: Update the tail to the second-to-last node
    // TODO: Set the new tail's next to null
    // TODO: Decrement the length of the list
  }

  // Method to add a node to the beginning of the list
  unshift(value) {
    // TODO: Create a new node with the given value
    // TODO: If the list is empty, set head and tail to the new node
    // TODO: Otherwise, link the new node to the current head
    // TODO: Update head to the new node
    // TODO: Increment the length of the list
  }

  // Method to remove a node from the beginning of the list
  shift() {
    // TODO: If the list is empty, return null
    // TODO: If there's only one node, set head and tail to null
    // TODO: Otherwise, update head to the next node
    // TODO: Decrement the length of the list
  }

  // Method to get the first node (head) of the list
  getFirstNode() {
    // TODO: Return the head node
  }

  // Method to get the last node (tail) of the list
  getLastNode() {
    // TODO: Return the tail node
  }

  // Method to get a node by its index in the list
  getIndex(index) {
    // TODO: Check if the index is out of bounds; if so, return null
    // TODO: Iterate through the list to find the node at the given index
    // TODO: Return the node at the given index
  }

  // Method to update the value of a node at a given index
  set(index, value) {
    // TODO: Check if the index is out of bounds; if so, return null
    // TODO: Iterate through the list to find the node at the given index
    // TODO: Update the node's data to the new value
  }

  // Method to insert a node at a given index
  insert(value, index) {
    // TODO: Check if the index is out of bounds; if so, return null
    // TODO: If inserting at the beginning, use unshift
    // TODO: If inserting at the end, use push
    // TODO: Otherwise, iterate to find the position before the given index
    // TODO: Create a new node with the given value
    // TODO: Link the new node between the previous node and the next node
    // TODO: Increment the length of the list
  }

  // Method to get the size of the list
  getSize() {
    // TODO: Return the length of the list
  }

  // Method to clear the list
  clear() {
    // TODO: Set head and tail to null
    // TODO: Set length to 0
  }

  // Method to reverse the list
  reverseLinkedList() {
    // TODO: Initialize previous and current pointers
    // TODO: Iterate through the list, reversing the direction of each node's `next` reference
    // TODO: Update head and tail references to point to the new head and tail
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
    // TODO: Create and return a new DoubleNode with the provided data
  }

  // Method to add a node to the end of the list
  push(node) {
    // TODO: Create a new node with the provided data
    // TODO: If the list is empty, set head and tail to the new node
    // TODO: Otherwise, link the current tail node to the new node
    // TODO: Link the new node back to the current tail node
    // TODO: Update tail to the new node
    // TODO: Increment the length of the list
  }

  // Method to remove a node from the end of the list
  pop() {
    // TODO: If the list is empty, return null
    // TODO: If there's only one node, set head and tail to null
    // TODO: Otherwise, update tail to the previous node
    // TODO: Update the new tail's next to null
    // TODO: Remove the link from the previous node to the removed node
    // TODO: Decrement the length of the list
  }

  // Method to add a node to the beginning of the list
  unshift(node) {
    // TODO: Create a new node with the provided data
    // TODO: If the list is empty, set head and tail to the new node
    // TODO: Otherwise, link the new node to the current head node
    // TODO: Link the current head node back to the new node
    // TODO: Update head to the new node
    // TODO: Increment the length of the list
  }

  // Method to remove a node from the beginning of the list
  shift() {
    // TODO: If the list is empty, return null
    // TODO: If there's only one node, set head and tail to null
    // TODO: Otherwise, update head to the next node
    // TODO: Update the new head's previous to null
    // TODO: Remove the link from the new head to the old head
    // TODO: Decrement the length of the list
  }

  // Method to reverse the list
  reverseLinkedList() {
    // TODO: Initialize previous and current pointers
    // TODO: Iterate through the list, reversing the direction of each node's `next` and `prev` references
    // TODO: Update head and tail references to point to the new head and tail
  }
}

const myDoublyLinkedList = new DoublyLinkedList("node 1"); // Create a new doubly linked list with initial node "node 1"
