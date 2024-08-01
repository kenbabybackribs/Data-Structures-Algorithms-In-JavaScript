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
    let newNode = new SingleNode(value); // Create a new node
    this.tail.next = newNode; // Link the current tail to the new node
    this.tail = newNode; // Update the tail to the new node
    this.length++; // Increment the length of the list
  }

  // Method to remove a node from the end of the list
  pop() {
    if (!this.head) {
      return null; // If the list is empty, return null
    }
    let temp = this.head; // Temp pointer to traverse the list
    let prev = this.head; // Previous pointer to keep track of the node before temp

    while (temp.next) {
      // Traverse the list until the last node
      prev = temp; // Update prev to the current temp
      temp = temp.next; // Move temp to the next node
    }
    this.tail = prev; // Update the tail to the second last node
    this.tail.next = null; // Remove reference to the last node
    this.length--; // Decrement the length of the list
  }

  // Method to add a node to the beginning of the list
  unshift(value) {
    let newNode = new SingleNode(value); // Create a new node
    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set head to the new node
      this.tail = this.head; // Set tail to the new node as well
    } else {
      // If the list is not empty
      let prevHead = this.head; // Save the current head
      this.head = newNode; // Update head to the new node
      this.head.next = prevHead; // Link the new head to the previous head
    }
    this.length++; // Increment the length of the list
  }

  // Method to remove a node from the beginning of the list
  shift() {
    if (!this.head) return null; // If the list is empty, return null
    let previousHead = this.head; // Save the current head
    let newHead = previousHead.next; // Get the second node
    this.head = newHead; // Update head to the second node
    this.length--; // Decrement the length of the list
    if (this.length === 0) this.tail = null; // If the list is now empty, set tail to null
    return previousHead; // Return the removed node
  }

  // Method to get the first node (head) of the list
  getFirstNode() {
    return this.head; // Return the head of the list
  }

  // Method to get the last node (tail) of the list
  getLastNode() {
    return this.tail; // Return the tail of the list
  }

  // Method to get a node by its index in the list
  getIndex(index) {
    if (index < 0 || index >= this.length) return null; // If index is out of bounds, return null
    let node = this.head; // Start from the head
    for (let i = 0; i < index; i++) {
      // Traverse the list to the desired index
      node = node.next; // Move to the next node
    }
    return node; // Return the node at the given index
  }

  // Method to update the value of a node at a given index
  set(index, value) {
    let node = this.getIndex(index); // Get the node at the index
    if (!node) return null; // If the node doesn't exist, return null
    node.data = value; // Update the node's data
    return node; // Return the updated node
  }

  // Method to insert a node at a given index
  insert(value, index) {
    if (index < 0 || index >= this.length) return null; // If index is out of bounds, return null
    let newNode = new SingleNode(value); // Create a new node
    if (index === 0) {
      // If inserting at the head
      newNode.next = this.head; // Link new node to the current head
      this.head = newNode; // Update head to the new node
      this.length++; // Increment the length
      return newNode; // Return the new node
    }
    let prevNode = this.getIndex(index - 1); // Get the node before the desired index
    newNode.next = prevNode.next; // Link new node to the next node
    prevNode.next = newNode; // Link the previous node to the new node
    this.length++; // Increment the length
    return newNode; // Return the new node
  }

  // Method to get the size of the list
  getSize() {
    return `${this.length} Nodes in this Linked List`; // Return the size of the list
  }

  // Method to clear the list
  clear() {
    this.head = null; // Set head to null
    this.tail = null; // Set tail to null
    this.length = 0; // Reset length to 0
  }

  // Method to reverse the list
  reverseLinkedList() {
    let temp = this.head; // Temp pointer to traverse the list
    let prev = null; // Previous pointer
    let next = null; // Next pointer
    this.tail = this.head; // Set tail to the current head

    while (temp !== null) {
      // Traverse the list
      next = temp.next; // Save the next node
      temp.next = prev; // Reverse the current node's next pointer
      prev = temp; // Move previous to current node
      temp = next; // Move to the next node
    }
    this.head = prev; // Set head to the last non-null node
  }
}

const mySinglyLinkedList = new SinglyLinkedList("node 1"); // Create a new singly linked list with initial node "node 1"

mySinglyLinkedList.push("node 2"); // Add node "node 2" to the end of the list
mySinglyLinkedList.push("node 3"); // Add node "node 3" to the end of the list
mySinglyLinkedList.push("node 4"); // Add node "node 4" to the end of the list

console.log(mySinglyLinkedList); // Log the list to the console

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
    return new DoubleNode(node); // Return a new DoubleNode
  }

  // Method to add a node to the end of the list
  push(node) {
    const newNode = this.createNewNode(node); // Create a new node

    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set head to the new node
      this.tail = newNode; // Set tail to the new node
      this.length++; // Increment the length
      return newNode; // Return the new node
    }

    let previousNode = this.tail; // Get the current tail
    previousNode.next = newNode; // Link current tail to the new node
    newNode.prev = previousNode; // Link new node to the previous tail
    this.tail = newNode; // Update the tail to the new node
    this.length++; // Increment the length
  }

  // Method to remove a node from the end of the list
  pop() {
    if (!this.head) return null; // If the list is empty, return null
    let removedNode = this.tail; // Save the current tail

    if (this.length === 1) {
      // If there's only one node
      this.head = null; // Set head to null
      this.tail = null; // Set tail to null
    } else {
      // If there are multiple nodes
      this.tail = removedNode.prev; // Update tail to the previous node
      this.tail.next = null; // Remove reference to the removed node
    }
    this.length--; // Decrement the length
    return removedNode; // Return the removed node
  }

  // Method to add a node to the beginning of the list
  unshift(node) {
    const newNode = this.createNewNode(node); // Create a new node

    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set head to the new node
      this.tail = newNode; // Set tail to the new node
    } else {
      // If the list is not empty
      this.head.prev = newNode; // Link current head to the new node
      newNode.next = this.head; // Link new node to the current head
      this.head = newNode; // Update head to the new node
    }
    this.length++; // Increment the length
  }

  // Method to remove a node from the beginning of the list
  shift() {
    if (!this.head) return null; // If the list is empty, return null
    let removedNode = this.head; // Save the current head

    if (this.length === 1) {
      // If there's only one node
      this.head = null; // Set head to null
      this.tail = null; // Set tail to null
    } else {
      // If there are multiple nodes
      this.head = removedNode.next; // Update head to the next node
      this.head.prev = null; // Remove reference to the removed node
    }
    this.length--; // Decrement the length
    return removedNode; // Return the removed node
  }

  // Method to reverse the list
  reverseLinkedList() {
    let temp = this.head; // Temp pointer to traverse the list
    this.head = this.tail; // Swap head and tail
    this.tail = temp; // Swap tail and temp
    let next = null; // Next pointer
    let prev = null; // Previous pointer

    while (temp !== null) {
      // Traverse the list
      next = temp.next; // Save the next node
      temp.next = prev; // Reverse the current node's next pointer
      temp.prev = next; // Reverse the current node's prev pointer
      prev = temp; // Move previous to current node
      temp = next; // Move to the next node
    }
  }
}

const myDoublyLinkedList = new DoublyLinkedList("node 1"); // Create a new doubly linked list with initial node "node 1"
myDoublyLinkedList.push("node 2"); // Add node "node 2" to the end of the list
myDoublyLinkedList.push("node 3"); // Add node "node 3" to the end of the list
myDoublyLinkedList.push("node 4"); // Add node "node 4" to the end of the list
