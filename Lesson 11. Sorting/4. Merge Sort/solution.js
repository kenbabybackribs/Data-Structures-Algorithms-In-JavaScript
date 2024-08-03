const merge = function (left, right) {
  // Initialize an empty array to store the merged result
  const result = [];
  let i = 0; // Index for the left array
  let j = 0; // Index for the right array

  // Iterate while there are elements in both arrays
  while (i < left.length && j < right.length) {
    // Compare elements from both arrays
    if (left[i] < right[j]) {
      // If left element is smaller, add it to the result array
      result.push(left[i]);
      i++; // Move to the next element in the left array
    } else {
      // If right element is smaller or equal, add it to the result array
      result.push(right[j]);
      j++; // Move to the next element in the right array
    }
  }

  // Add any remaining elements from the left array (if any)
  result.push(...left.slice(i));
  // Add any remaining elements from the right array (if any)
  result.push(...right.slice(j));

  // Return the merged and sorted result array
  return result;
};

// Function to perform merge sort on an array
const mergeSort = function (arr) {
  // Base case: if the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) return arr;

  // Find the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Divide the array into two halves
  const left = arr.slice(0, middle); // First half
  const right = arr.slice(middle); // Second half

  // Recursively sort each half and merge them
  return merge(mergeSort(left), mergeSort(right));
};

console.log(merge([3, 27, 38, 43], [9, 10, 17, 32]));

console.log(mergeSort([3, 27, 38, 43, 9, 10, 17, 32]));
