class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(data) {
    let newNode = new Node(data);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  myCustomEnqueueMethod(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  teacherCustomEnqueueMethod(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = new Node();
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  myCustomDequeueMethod() {
    if (!this.first) return null;
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) return null;
  }

  teacherCustomDequeueMethod() {}
}

const queue = new Queue("person 1");
queue.myCustomEnqueueMethod("person 2");
queue.myCustomEnqueueMethod("person 3");
queue.myCustomEnqueueMethod("person 4");
queue.myCustomDequeueMethod();
console.log(queue);
