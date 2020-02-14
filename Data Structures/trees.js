// ! BINARY SEARCH TREES

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    let ptr = this.root;
    while (ptr) {
      if (val < ptr.val) {
        if (!ptr.left) {
          ptr.left = new Node(val)
          return;
        } else {
          ptr = ptr.left;
        }
      }
      if (val > ptr.val) {
        if (!ptr.right) {
          ptr.right = new Node(val);
          return;
        } else {
          ptr = ptr.right;
        }
      }
    } 
  }
  find(key, val) {
    if (!key) {
      return false;
    }
    else if (val < key.val) {
      return this.find(key.left, val);
    }
    else if (val > key.val) {
      return this.find(key.right, val);
    }
    else {
      return true;
    }
  }
  DFS(root = this.root, visited = []) {
    if (root) {
      visited.push(root.val);
      if (root.left) {
        this.DFS(root.left, visited);
      }
      if (root.right) {
        this.DFS(root.right, visited);
      }
    }
    return visited;
  }
}

function BFS(root) {
  let queue = [];
  queue.push(root);
  let visited = [];
  while (queue.length > 0) {
    let curr = queue.shift();
    visited.push(curr.val);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return visited;
}

function helper(node) {

}

let tree = new BST();
tree.insert(9);
tree.insert(10);
tree.insert(7);
tree.insert(8);
console.log(tree);
// console.log(BFS(tree.root));
console.log(tree.DFS());

