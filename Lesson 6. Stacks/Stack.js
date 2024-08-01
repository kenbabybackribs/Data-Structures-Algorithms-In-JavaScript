class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(node) {
    let newNode = new Node(node);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  myCustomPushMethod(node) {
    let newNode = new Node(node);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
      return this;
    }
  }

  teacherCustomPushMethod(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }

  myCustomPopMethod() {
    if (this.length === 0) return null;
    let temp = this.first;
    this.first = temp.next;
    this.length--;
    return this;
  }

  teacherCustomMethod() {
    if (this.length === 0) {
      return null;
    }

    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const stack = new Stack("book 1");
stack.myCustomPushMethod("book2");
stack.myCustomPushMethod("book3");
stack.myCustomPushMethod("book4");
stack.myCustomPopMethod();
console.log(stack);
