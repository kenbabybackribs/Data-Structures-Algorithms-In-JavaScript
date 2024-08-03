const insertionSort = function (arr) {
  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to be inserted in the sorted portion
    let current = arr[i];
    // Initialize `j` to be the index of the previous element
    let j = i - 1;

    // Move elements of the sorted portion that are greater than `current`
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the `current` element into its correct position
    arr[j + 1] = current;
  }

  // Return the sorted array
  return arr;
};

const unsortedArray = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(unsortedArray));
