/* O(n) Example

const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

const search = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found: ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found: ${item} 2`);
    }
  }

  // n + n = 2n --> O(2n)

  // drop the constant so it becomes O(n)
};

search("eggs");

*/

/*  O(1) Example.

const numbers = [1, 2, 3, 4, 5];

const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));

*/

/*O(n ^ 2) Example.



function findPairs(arr) {
  //O(n ^ 2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pairs: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log(`---------------`, q);
  }

  // If we combine all the "O" operations it becomes O(n^2 + n)

  // O(n ^ 2) is a Dominant term

  // "n" is a Non-Dominant term

  // So we remove the "non-dominant" term and we're only left with O(n ^ 2)

  // This way, we simplify, our bigO

  // So when we any kind of nested loop we say this is known as the O(n ^ 2), and if we just have a loop that is iterating of some data we just call this O(n)
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);

*/
