import Node from './linked-lists-node';

// export default class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a Node
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Adds a node to the beginning of the linked-list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Show the size of the list
  size() {
    let length = 0;
    let currentNode = this.head;
    while (currentNode) {
      length += 1;
      currentNode = currentNode.next;
    }
    console.log(length);
  }

  // Show the complete list
  toString() {
    const linkedListArr = [];
    let currentNode = this.head;
    while (currentNode) {
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(linkedListArr.join(' -> '));
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(60);
linkedList.size();
linkedList.toString();

console.log('test');
