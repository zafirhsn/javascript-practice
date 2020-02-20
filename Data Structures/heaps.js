// ! BINARY HEAPS

class maxBinaryHeap {
  constructor(values) {
    this.values = values;
  }
  insert(val) {
    this.values.push(val);
    let currIndex = this.values.length - 1;
    let parentIndex = this.getParentIndex(currIndex)
    // while(val > this.values[parentIndex]) {
    //   let tmp = this.values[parentIndex];
    //   this.values[parentIndex] = this.values[currIndex];
    //   this.values[currIndex] = tmp;
    //   currIndex = parentIndex;
    //   parentIndex = this.getParentIndex(currIndex);
    // }
    this.recursiveHelper(currIndex);
  }
  extractMax() {
    if (!this.values.length) {
      return;
    }
    let finalval = this.values[0];
    let val = this.values[this.values.length - 1];
    let currIndex = 0;
    this.values[0] = val;

    let greaterChild = this.findGreaterChild(currIndex);
    while (this.values[currIndex] < this.values[greaterChild]) {
      let tmp = this.values[currIndex];
      this.values[currIndex] = this.values[greaterChild];
      this.values[greaterChild] = tmp;
      currIndex = greaterChild;
      greaterChild = this.findGreaterChild(currIndex);
    }
    this.values.pop();
    return finalval;
    // this.trickleDown()

  }
  getParentIndex(n) {
    return Math.floor((n-1) / 2);
  }
  getLeftChildIndex(n) {
    return n * 2 + 1;
  }
  getRightChildIndex(n) {
    return n *2 + 2
  }
  recursiveHelper(currIndex) {
    let parentIndex = this.getParentIndex(currIndex);
    if (this.values[currIndex] > this.values[parentIndex]) {
      let tmp = this.values[parentIndex];
      this.values[parentIndex] = this.values[currIndex];
      this.values[currIndex] = tmp;
      this.recursiveHelper(parentIndex);
    }
    else {
      return;
    }
  }
  findGreaterChild(currIndex) {
    let leftChild = currIndex * 2 + 1;
    let rightChild = currIndex * 2 + 2;
    if (this.values[leftChild] > this.values[rightChild]) {
      return leftChild
    }
    else {
      return rightChild;
    }
  }
  trickleDown() {

  }
}

let heap = new maxBinaryHeap([1,2,3]);
heap.insert(4);
heap.insert(100);
heap.extractMax();
console.log(heap);