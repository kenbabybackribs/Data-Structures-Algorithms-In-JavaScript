class HashTable {
  constructor(size = 5) {
    // Initialize the `keyMap` array with the specified size.
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    // Compute a hash value for a given `key`.
    let sum = 0; // Initialize `sum` to 0.
    const PRIME_NUMBER = 31; // A prime number used to reduce collisions.
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // Loop through each character of the key, up to 100 characters.
      const charCode = key.charCodeAt(i) - 96; // Convert character to a number (1-based index).
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length; // Polynomial hash function with modulus.
    }
    return sum; // Return the computed hash value.
  }

  // Method to add a key-value pair to the hash table.
  set(key, value) {
    // TODO: Compute the index using `_hashFunction`.
    // TODO: Check if the array at this index is empty. If so, initialize it as an empty array.
    // TODO: Add the key-value pair to the array at this index.
    // TODO: Return `this` for method chaining.
  }

  // Method to retrieve a value by key from the hash table.
  get(key) {
    // TODO: Compute the index using `_hashFunction`.
    // TODO: Check if the array at this index is empty. If so, return `undefined`.
    // TODO: Iterate through the array at this index to find the key-value pair.
    // TODO: Return the value if the key is found, otherwise return `undefined`.
  }

  // Method to retrieve all keys from the hash table.
  getAllKeys() {
    // TODO: Initialize an empty array to store keys.
    // TODO: Iterate over each slot in the `keyMap`.
    // TODO: For each slot, iterate through its array and collect the keys.
    // TODO: Return the array of keys, or `null` if no keys are found.
  }

  // Method to retrieve all values from the hash table.
  getAllValues() {
    // TODO: Initialize an empty array to store values.
    // TODO: Iterate over each slot in the `keyMap`.
    // TODO: For each slot, iterate through its array and collect the values.
    // TODO: Return the array of values, or `null` if no values are found.
  }
}

// Create a new instance of HashTable.
const phoneBook = new HashTable();
