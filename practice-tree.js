class Queue {
  constructor(arr = []) {
    this.values = arr;
  }
  size() {
    return this.values.length;
  }
  enqueue(item) {
    this.values.push(item);
  }
  dequeue() {
    return this.values.shift();
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


let levelOrder = function(root) {
  const q = new Queue();
  // q.enqueue()
}