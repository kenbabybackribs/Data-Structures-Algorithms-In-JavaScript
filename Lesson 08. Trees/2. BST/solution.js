class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the tree is empty (i.e., the root is null), make the new node the root
    if (!this.root) return (this.root = newNode);

    // Start traversing the tree from the root
    let temp = this.root;

    // Infinite loop to find the correct spot for the new node
    while (true) {
      // Check if the new node's value is equal to the current node's value
      if (newNode.value === temp.value) {
        // Value already exists in the tree; return false to indicate no insertion
        return false;
      }

      // If the new node's value is less than the current node's value
      if (newNode.value < temp.value) {
        // Check if there is no left child
        if (temp.left === null) {
          // Insert the new node as the left child and exit the loop
          return (temp.left = newNode);
        } else {
          // Move `temp` to the left child and continue searching
          temp = temp.left;
        }
      } else {
        // If the new node's value is greater than or equal to the current node's value
        // Check if there is no right child
        if (temp.right === null) {
          // Insert the new node as the right child and exit the loop
          return (temp.right = newNode);
        } else {
          // Move `temp` to the right child and continue searching
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    // If the tree is empty (i.e., the root is null), return null
    if (!this.root) return null;

    // Start traversing the tree from the root
    let temp = this.root;

    // Traverse the tree until `temp` is null (end of the tree)
    while (temp) {
      // If the value to find is less than the current node's value, move to the left child
      if (value < temp.value) {
        temp = temp.left;
        // If the value to find is greater than the current node's value, move to the right child
      } else if (value > temp.value) {
        temp = temp.right;
        // If the value matches the current node's value, return true (value found)
      } else if (value === temp.value) return true;
    }
    // If the value is not found after traversing the tree, return false
    return false;
  }

  bfs() {
    // Initialize the current node to the root of the tree
    let current = this.root;

    // Check if the root is undefined; if so, return a message indicating that the root is missing
    if (!current) return `Root ${undefined}`;

    // Create a queue to manage nodes to be explored
    let queue = [];
    // Create an array to store the values of nodes in BFS order
    let data = [];

    // Add the root node to the queue to start the BFS traversal
    queue.push(current);

    // Continue processing nodes while the queue is not empty
    while (queue.length) {
      // Dequeue the front node from the queue
      current = queue.shift();
      // Add the node's value to the data array
      data.push(current.value);

      // If the current node has a left child, add it to the queue for later exploration
      if (current.left) queue.push(current.left);
      // If the current node has a right child, add it to the queue for later exploration
      if (current.right) queue.push(current.right);
    }

    // Return the array containing the values of nodes in BFS order
    return data;
  }
}

// Create a new binary search tree (BST)
const tree = new BST();

// Insert nodes into the tree
tree.insert(5); // Insert root node with value 5
tree.insert(8); // Insert right child of 5 with value 8
tree.insert(3); // Insert left child of 5 with value 3
tree.insert(1); // Insert left child of 3 with value 1
tree.insert(7); // Insert left child of 8 with value 7

// Output the structure of the tree to the console
console.log(tree);

console.log(tree.bfs());
