/* Array Example

const arrOfStrings = ["a", "b", "c", "d"];

const arrOfNumbers = [1, 2, 3, 4];

const boolArr = [true, false];

const mixed = ["a", 2, true, undefined, null, { a: "a" }, ["b"]];

 */

/*

class MyArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // my custom push method
  myPushMethod(inputData) {
    this.data[this.length] = inputData;
    this.length++;
    return this.length;
  }

  // teacher custom push method
  teacherPushMethod(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // my custom get method
  myGetMethod(index) {
    return this.data[index];
  }

  // teacher custom get method
  teacherGetMethod(index) {
    return this.data[index];
  }

  // my custom pop method
  myPopMethod() {
    delete this.data[this.length - 1];
    return this.length--;
  }

  // teacher custom pop method
  teacherPopMethod() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // my custom shift method
  myShiftMethod() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  // teacher custom shift method
  teacherShiftMethod() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  myDeleteByIndexMethod(index) {
    if (index >= 0 && index < this.length) {
      // Check if index is within valid range
      // Shift items left from the specified index
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      // Remove the last item as it is now a duplicate
      delete this.data[this.length - 1];
      // Update the length
      this.length--;
    }
    return this.data;
  }

  teacherDeleteByIndexMethod(index) {
    const item = this.data[index];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.item;
  }
}

const myNewArray = new MyArr();
myNewArray.myPushMethod("bananna");
myNewArray.myPushMethod("apple");
myNewArray.myPushMethod("mango");
myNewArray.myPushMethod("pineapple");
myNewArray.myPopMethod();
myNewArray.myGetMethod(0);
myNewArray.myShiftMethod();
console.log(myNewArray.myDeleteByIndexMethod(0));
console.log(myNewArray.myDeleteByIndexMethod(1));

*/
