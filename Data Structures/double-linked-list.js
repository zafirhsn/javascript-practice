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
    
  }


  removeAtIndex(){}
  getIndex(){}
  setIndex() {}
  search(){}
}

let DLL = new DoubleLinkedList();
DLL.push(9);
DLL.push(8);
console.log(DLL);
// console.log(DLL.shift());
console.log(DLL.unshift(10));
console.log(DLL);