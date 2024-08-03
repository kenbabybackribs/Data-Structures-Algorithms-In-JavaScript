const selectionSort = function (arr) {
  // Iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Assume the minimum element is at the current index
    let minIndex = i;

    // Iterate over the remaining unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller element is found, update the minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the element at index `i`
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  // Return the sorted array
  return arr;
};

// Example usage:
const unsortedArray = [4, 2, 6, 5, 1, 3];
console.log(selectionSort(unsortedArray)); // Output: [1, 2, 3, 4, 5, 6]
