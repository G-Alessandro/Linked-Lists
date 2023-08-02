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

  // Return an array of the list
  listArray() {
    const linkedListArr = [];
    let currentNode = this.head;
    while (currentNode) {
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return linkedListArr;
  }

  // Add a node
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
    console.log('Linked-list size:', this.listArray().length);
  }

  // Show the first node in the list
  getFirst() {
    console.log('First:', this.head.value);
  }

  // Show the last node in the list
  getLast() {
    console.log('Last:', this.tail.value);
  }

  // Show the node at the given index
  at(index) {
    if (this.listArray()[index] === undefined) {
      console.log(`The index ${index} does not exist!`);
    } else {
      console.log(`In index ${index} there is: ${this.listArray()[index]}!`);
    }
  }

  // Remove the last element from the list
  // pop(value) {

  // }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    if (this.listArray().includes(value)) {
      console.log(`True! ${value} is in the list!`);
    } else {
      console.log(`False! ${value} is not in the list!`);
    }
  }

  // Show the complete list
  toString() {
    console.log('Linked-list:', this.listArray().join(' -> '));
  }
}

const linkedList = new LinkedList();

linkedList.append(10); // Linked-List: 10
linkedList.append(20); // Linked-List: 10 -> 20
linkedList.append(30); // Linked-List: 10 -> 20 -> 30
linkedList.append(40); // Linked-List: 10 -> 20 -> 30 -> 40
linkedList.prepend(60); // Linked-List: 60 -> 10 -> 20 -> 30 -> 40
linkedList.toString(); // Linked-List: 60 -> 10 -> 20 -> 30 -> 40
linkedList.size(); // Linked-list size 5
linkedList.getFirst(); // First: 60
linkedList.getLast(); // Last: 40
linkedList.at(3); // In index 3 there is: 30!
linkedList.at(5); // The 5 position does not exist!
linkedList.contains(20); // True! 20 is in the list!
linkedList.contains(50); // False! 50 is not in the list!
