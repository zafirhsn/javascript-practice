class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    if (!this.head && !this.tail) {
      this.head = new Node(val);
      this.tail = this.head;
    } 
    else {
      let newNode = new Node(val);
      newNode.next = this.head;
      newNode.next.prev = newNode;
      this.head = newNode;
    }
  }

  dequeue() {
    if (!this.tail) {
      return false;
    } else {
      let tmp = this.tail;
      this.tail = this.tail.prev;
      tmp.prev.next = null;
      tmp.prev = null;
      return tmp;
    }
  }
}

let queue = new LinkedList();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue);
console.log(queue.dequeue());

