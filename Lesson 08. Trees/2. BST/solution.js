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

  // Method to insert a new value into the binary search tree
  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the tree is empty, set the new node as the root
    if (!this.root) return (this.root = newNode);

    // Start from the root node
    let temp = this.root;

    // Loop to find the correct spot to insert the new node
    while (true) {
      // If the value to insert is equal to the current node's value
      if (newNode.value === temp.value) {
        // Value already exists in the tree, do not insert it again
        return false;
      }

      // If the value to insert is less than the current node's value
      if (newNode.value < temp.value) {
        // If there's no left child, insert the new node here
        if (temp.left === null) {
          return (temp.left = newNode);
        } else {
          // Move to the left child to continue searching
          temp = temp.left;
        }
      } else {
        // If the value to insert is greater than or equal to the current node's value
        // If there's no right child, insert the new node here
        if (temp.right === null) {
          return (temp.right = newNode);
        } else {
          // Move to the right child to continue searching
          temp = temp.right;
        }
      }
    }
  }

  // Method to check if a value exists in the binary search tree
  includes(value) {
    // If the tree is empty, return null
    if (!this.root) return null;

    // Start from the root node
    let temp = this.root;

    // Loop to search for the value in the tree
    while (temp) {
      // If the value to find is less than the current node's value
      if (value < temp.value) {
        // Move to the left child
        temp = temp.left;
      } else if (value > temp.value) {
        // If the value to find is greater than the current node's value
        // Move to the right child
        temp = temp.right;
      } else if (value === temp.value) {
        // If the value matches the current node's value, return true
        return true;
      }
    }
    // If the value was not found, return false
    return false;
  }

  // Breadth-First Search (BFS) traversal of the tree
  bfs() {
    // Initialize the current node to the root
    let current = this.root;

    // If the root is null, return a message indicating the tree is empty
    if (!current) return `Root ${undefined}`;

    // Create a queue to hold nodes for BFS
    let queue = [];
    // Create an array to store the values in BFS order
    let data = [];

    // Start by adding the root node to the queue
    queue.push(current);

    // Continue processing nodes while the queue is not empty
    while (queue.length) {
      // Remove the front node from the queue
      current = queue.shift();
      // Add the node's value to the data array
      data.push(current.value);

      // If the node has a left child, add it to the queue
      if (current.left) queue.push(current.left);
      // If the node has a right child, add it to the queue
      if (current.right) queue.push(current.right);
    }

    // Return the array containing values in BFS order
    return data;
  }

  // Depth-First Search (DFS) Pre-order traversal
  dfsPreOrder(node = this.root, data = []) {
    // If the current node is null, return the accumulated data array
    if (node === null) return data;

    // Add the current node's value to the data array
    data.push(node.value);

    // Recursively traverse the left subtree
    if (node.left) this.dfsPreOrder(node.left, data);
    // Recursively traverse the right subtree
    if (node.right) this.dfsPreOrder(node.right, data);

    // Return the accumulated data array after visiting the node and its subtrees
    return data;
  }

  // Depth-First Search (DFS) Post-order traversal
  dfsPostOrder(node = this.root, data = []) {
    // If the current node is null, return the accumulated data array
    if (node === null) return data;

    // Recursively traverse the left subtree
    if (node.left) this.dfsPostOrder(node.left, data);
    // Recursively traverse the right subtree
    if (node.right) this.dfsPostOrder(node.right, data);

    // Add the current node's value to the data array after visiting the node and its subtrees
    data.push(node.value);

    // Return the accumulated data array
    return data;
  }

  // Depth-First Search (DFS) In-order traversal
  dfsInOrder(node = this.root, data = []) {
    // If the current node is null, return the accumulated data array
    if (node === null) return data;

    // Recursively traverse the left subtree
    if (node.left) this.dfsInOrder(node.left, data);
    // Add the current node's value to the data array
    data.push(node.value);
    // Recursively traverse the right subtree
    if (node.right) this.dfsInOrder(node.right, data);

    // Return the accumulated data array
    return data;
  }
}

// Create a new binary search tree (BST)
const tree = new BST();

// Insert nodes into the tree
tree.insert(5); // Insert the root node with value 5
tree.insert(8); // Insert the right child of 5 with value 8
tree.insert(3); // Insert the left child of 5 with value 3
tree.insert(1); // Insert the left child of 3 with value 1
tree.insert(7); // Insert the left child of 8 with value 7

// Output the structure of the tree to the console
console.log(tree);

// Output the results of BFS traversal
console.log(tree.bfs()); // Should print values in level-order (BFS)

// Output the results of DFS Pre-order traversal
console.log(tree.dfsPreOrder()); // Should print values in pre-order (Root-Left-Right)

// Output the results of DFS Post-order traversal
console.log(tree.dfsPostOrder()); // Should print values in post-order (Left-Right-Root)

// Output the results of DFS In-order traversal
console.log(tree.dfsInOrder()); // Should print values in in-order (Left-Root-Right)
