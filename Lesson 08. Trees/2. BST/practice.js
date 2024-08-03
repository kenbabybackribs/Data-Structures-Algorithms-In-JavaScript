// Node class represents a single node in the binary search tree
class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.left = null; // Pointer to the left child node
    this.right = null; // Pointer to the right child node
  }
}

// BST class represents the binary search tree itself
class BST {
  constructor() {
    this.root = null; // Initialize the tree with no nodes (root is null)
  }

  // TODO: Implement the insert method to add a new value to the BST
  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // TODO: Insert logic to place the new node in the correct location
  }

  // TODO: Implement the includes method to check if a value exists in the BST
  includes(value) {
    // TODO: Add logic to search for the value in the BST
  }

  // TODO: Implement the BFS method for breadth-first search traversal
  bfs() {
    // TODO: Add logic for BFS traversal and return values in level-order
  }

  // TODO: Implement the DFS Pre-order method
  dfsPreOrder(node = this.root, data = []) {
    // TODO: Add logic for DFS Pre-order traversal (Root-Left-Right)
  }

  // TODO: Implement the DFS Post-order method
  dfsPostOrder(node = this.root, data = []) {
    // TODO: Add logic for DFS Post-order traversal (Left-Right-Root)
  }

  // TODO: Implement the DFS In-order method
  dfsInOrder(node = this.root, data = []) {
    // TODO: Add logic for DFS In-order traversal (Left-Root-Right)
  }
}

// Create a new binary search tree (BST)
const tree = new BST();

// Insert nodes into the tree
tree.insert(5); // TODO: Insert additional nodes to test the tree

// Output the results of various traversals
console.log(tree.bfs()); // TODO: Verify BFS output
console.log(tree.dfsPreOrder()); // TODO: Verify DFS Pre-order output
console.log(tree.dfsPostOrder()); // TODO: Verify DFS Post-order output
console.log(tree.dfsInOrder()); // TODO: Verify DFS In-order output
