/*
// SINGLY LINKED LIST CODE



// Node Class 
class Node {
  constructor(data) {
    this.data = data; // This should be 'data', not 'head'
    this.next = null; // This should be 'next', not 'reference'
  }
}

// LinkedList Class
class LinkedList {
  constructor(value) {
    this.head = new Node(value); // Initialize the head with the first node
    this.tail = this.head; // The tail is also the head initially
    this.length = 1; // Length of the list is initially 1
  }

  createNode(value) {
    const node = new Node(value);
    return node;
  }

  myCustomPushMethod(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  teacherPushMethod(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  myCustomPopMethod() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
  }

  teacherCustomPopMethod() {
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
  }

  myCustomUnshiftMethod(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let prevHead = this.head;
      this.head = newNode;
      this.head.next = prevHead;
    }

    this.length++;
  }

  teacherUnshiftMethod(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  myCustomShiftMethod() {
    if (!this.head) return null;
    let previousHead = this.head;
    let newHead = previousHead.next;
    this.head = newHead;
    this.length--;
    if (this.LinkedList === 0) return this.tail === 0;
    else return this.previousHead;
  }

  teacherCustomShiftMethod() {
    if (!this.head) return undefined;

    // 1. point the first node
    let temp = this.head;
    // 2. move head to next node
    this.head = this.head.next;
    //3. remove first element
    temp.next = null;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
  }

  myCustomGetFirstNodeMethod() {
    return this.head;
  }

  teacherGetFirstNodeMethod() {
    return this.head;
  }

  myCustomGetLastNodeMethod() {
    if (!this.head) return null;
    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  TeacherGetLastNodeMethod() {
    if (!this.head) return null;
    let temp = this.head;

    while (temp) {
      if (!temp.next) return temp;
    }
    temp = temp.next;
  }
  myCustomGetNodeByIndexMethod(index) {
    let node = this.head;
    let count = 0;

    if (!this.head || index < 0 || index >= this.length) return null;

    while (count <= index) {
      if (count === index) return node;
      node = node.next;
      count++;
    }
  }

  teacherCustomNodeByIndexMethod() {
    let counter = 0;
    let node = this.head;

    while (temp) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    return null;
  }

  myCustomGetNodeByIndexAndSetMethod(index, value = null) {
    let node = this.myCustomGetNodeByIndexMethod(index);
    if (!node) return null;
    node.data = value;
    return node;
  }

  teacherGetNodeByIndexAndSetMethod(index, value = null) {
    let temp = this.myCustomGetNodeByIndexMethod(index);
    if (temp) {
      temp.data = value;
      return temp;
    }
    return null;
  }

  myCustomInsertNodeMethod(value, index) {
    let node = this.createNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return node;
    }
    if (index < 0 || index >= this.length) return null;

    let insertNode = this.myCustomGetNodeByIndexMethod(index);
    let insertNodeNext = insertNode.next;
    insertNode.next = node;
    node.next = insertNodeNext;
    this.length++;
    return node;
  }

  teacherCustomInsertNodeMethod(index, value) {
    if (index === 0) return this.teacherUnshiftMethod(value);
    let newNode = new Node(value);
    const temp = this.teacherCustomNodeByIndexMethod(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    return newNode;
  }

  myCustomNodeSizeMethod() {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === this.length - 1)
        return `${count} Nodes in this Linked List`;
      node = node.next;
      count++;
      console.log(node, count);
    }
  }

  teacherCustomNodeSizeMethod() {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  myCustomClearMethod() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  teacherCustomClearMethod() {
    this.head = null;
  }

  myCustomReverseLinkList() {
    let temp = this.head
    let next = null
    let prev = null

    whiel(temp !== null) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
    this.head = temp
  }
}

const myLinkedList = new LinkedList("node 1");
myLinkedList.myCustomPushMethod("node 2");
myLinkedList.myCustomPushMethod("node 4");
myLinkedList.myCustomPushMethod("node 5");
myLinkedList.myCustomPushMethod("node 6");
myLinkedList.myCustomPushMethod("node 7");
// myLinkedList.myCustomPopMethod();
myLinkedList.myCustomUnshiftMethod("node 3");
myLinkedList.myCustomShiftMethod();
myLinkedList.myCustomGetNodeByIndexAndSetMethod(2, "node 15");
myLinkedList.myCustomInsertNodeMethod("node 51", 2);

myLinkedList.myCustomClearMethod();
console.log(myLinkedList);

*/

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(node) {
    const newNode = new Node(node);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  createNewNode(node) {
    const newNode = new Node(node);
    return newNode;
  }

  myCustomPushMethod(node) {
    const newNode = this.createNewNode(node);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }

    let previousNode = this.tail;
    previousNode.next = newNode;
    newNode.prev = previousNode;
    this.tail = newNode;
    this.length++;
  }

  teacherCustomPushMethod(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  myCustomPopMethod() {
    if (!this.head) return null;
    let previousNode = this.tail.prev;
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) return null;
  }

  teacherCustomPopMethod() {
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  myCustomUnshfitMethod(node) {
    const newNode = this.createNewNode(node);
    const previousNode = this.head;
    previousNode.prev = newNode;
    this.head = newNode;
    this.head.next = previousNode;
  }

  teacherCustomUnshiftMethod(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  myCustomShiftMethod() {
    const headNode = this.head;
    this.head = headNode.next;
    this.head.prev = null;
    this.length--;
  }

  teacherCustomShiftMethod() {
    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;

    this.length--;
    return temp;
  }

  myCustomReverseLinkList() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    while (temp !== null) {
      next = temp.next;
      temp.next = prev;
      temp.prev = next;
      prev = temp;
      temp = next;
    }
  }

  teacherCustomReverseLink() {
    let temp = this.head; // create a temp variable and set it to the current head
    this.head = this.tail; // we set the current head to the current tail
    this.tail = temp; // we set the current tail to the previous head

    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const myLinkedList = new DoublyLinkedList("node 1");
myLinkedList.myCustomPushMethod("node 2");
myLinkedList.myCustomPushMethod("node 3");
myLinkedList.myCustomPushMethod("node 4");
myLinkedList.myCustomReverseLinkList();
console.log(myLinkedList);

/*
let temp = this.head; // create a copy of the head
this.head = this.tail; // set head to original tail
this.tail = temp; // set tail to original head
let next = temp; // set next to node1
let prev = null; // set prev to null

while (temp !== null) {
  next = temp.next; // save the next node
  temp.next = prev; // node1.next = null
  temp.prev = next; // node1.prev = node 2
  prev = temp; // null = node1
  temp = next; // node1 = node2
}
*/
