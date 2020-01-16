class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.top = null;
  }

  push(val) {
    if (!this.top) {
      this.top = new Node(val);
    } else {
      let newNode = new Node(val);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) {
      return false;
    }
    else { 
      let tmp = this.top;
      this.top = this.top.next;
      tmp.next = null;
      return tmp;
    }
  }
}

let stack = new LinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());