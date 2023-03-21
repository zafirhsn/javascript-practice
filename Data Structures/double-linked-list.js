// ! DOUBLE LINKED LISTS 

class Node { 
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return false;
    } else if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    } 
    else {
      let node = this.tail; // Set temp variable to hold last node
      this.tail = this.tail.prev; // reassign tail
      node.prev.next = null; // --> set to null
      node.prev = null; // <-- set to null
      this.length--;
      return node;
    }
    
  }

  shift() {
    if (!this.head) {
      return false;
    }
    else if (this.head === this.tail) {
      this.pop();
    }
    else {
      let tmp = this.head;
      this.head = this.head.next;
      tmp.next.prev = null;
      tmp.next = null;
      this.length--;
      return tmp;
    }
  }

  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    }
    else {
      let node = new Node(val);
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this.head;
  }

  insertAtIndex(val, index) {
    let count = 0;
    let tmp = this.head;
    if (index < 0 || index >= this.length) {
      return false;
    }
    else if (!this.head || index === this.length - 1) {
      this.push(val);
      return this;
    }
    while (count < index) {
      tmp = tmp.next;
      count++;
    }
    let newNode = new Node(val);
    newNode.prev = tmp;
    newNode.next = tmp.next;
    tmp.next.prev = newNode;
    tmp.next = newNode;
    this.length++;
    return this;
  }


  removeAtIndex(index) {
    let count = 0;
    let tmp = this.head;
    if (!this.head || index >= this.length || index < 0) {
      return false;
    }
    else if (index === this.length - 1) {
      this.pop();
      return this;
    }
    else if (index === 0) {
      this.shift();
      return this;
    }
    else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    while (count < index) {
      tmp = tmp.next;
      count++;
    }
    tmp.next.prev = tmp.prev;
    tmp.prev.next = tmp.next;
    tmp.next = null;
    tmp.prev = null;
    this.length--;
    return this;

  }


  getIndex(){}
  setIndex(){}
  search(){}
}

let DLL = new DoubleLinkedList();
DLL.push(9);
DLL.push(8);
console.log(DLL);
// console.log(DLL.shift());
console.log(DLL.unshift(10));
console.log(DLL.insertAtIndex(20, 0));
console.log(DLL.removeAtIndex(2));
