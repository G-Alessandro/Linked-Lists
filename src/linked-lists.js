import Node from './linked-lists-node';

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
  pop() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = null;
    this.tail = prevNode;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    if (this.listArray().includes(value)) {
      console.log(`True! ${value} is in the list!`);
    } else {
      console.log(`False! ${value} is not in the list!`);
    }
  }

  // Returns the index of the node containing value
  find(value) {
    let index = 'null';
    this.listArray().forEach((node) => {
      if (node === value) {
        index = this.listArray().indexOf(node);
      }
    });
    if (index === 'null') {
      console.log('Value not found!');
    } else {
      console.log(`The index of the value is ${index}!`);
    }
  }

  // Show the complete list
  toString() {
    console.log('Linked-list:', this.listArray().join(' -> '));
  }

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    if (currentIndex === index) {
      prevNode.next = newNode;
      newNode.next = currentNode;
    } else {
      this.append(value);
    }
  }

  // Removes the node at the given index
  removeAt(index) {
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex += 1;
    }

    if (currentIndex === index) {
      prevNode.next = currentNode.next;
      currentNode = null;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(10); // Linked-List: 10
linkedList.append(20); // Linked-List: 10 -> 20
linkedList.append(30); // Linked-List: 10 -> 20 -> 30
linkedList.append(40); // Linked-List: 10 -> 20 -> 30 -> 40
linkedList.prepend(60); // Linked-List: 60 -> 10 -> 20 -> 30 -> 40
linkedList.toString(); // Linked-List: 60 -> 10 -> 20 -> 30 -> 40
linkedList.pop(); // Linked-List: 60 -> 10 -> 20 -> 30
linkedList.toString(); // Linked-List: 60 -> 10 -> 20 -> 30
linkedList.size(); // Linked-list size 5
linkedList.getFirst(); // First: 60
linkedList.getLast(); // Last: 40
linkedList.at(3); // In index 3 there is: 30!
linkedList.at(5); // The 5 position does not exist!
linkedList.contains(20); // True! 20 is in the list!
linkedList.contains(50); // False! 50 is not in the list!
linkedList.find(30); // The index of the value is 3!
linkedList.find(70); // Value not found!
linkedList.insertAt(80, 2); // Linked-List: 60 -> 10 -> 80 -> 20 -> 30
linkedList.toString(); // Linked-List: 60 -> 10 -> 80 -> 20 -> 30
linkedList.removeAt(2); // Linked-List: 60 -> 10 -> 20 -> 30
linkedList.toString(); // Linked-List: 60 -> 10 -> 20 -> 30
