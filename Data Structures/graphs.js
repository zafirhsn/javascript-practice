// ! GRAPHS 

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  printAdajencyList() {
    console.log(this.adjacencyList);
  }
  addVertex(vertex) {
    if (this.adjacencyList.hasOwnProperty(String(vertex))) {
      return;
    }
    else {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.hasOwnProperty(vertex1) || !this.adjacencyList.hasOwnProperty(vertex2)) {
      throw new Error("Incorrect paramters");
    }
    else {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1].push(vertex2);
      }
      if (!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2].push(vertex1);
      }
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    }
    if (this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
    }
  }
  removeVertex(vertex1) {
    if (!this.adjacencyList[vertex1]) {
      return;
    } else {
      for (let vertex in this.adjacencyList) {
        if (vertex === vertex1) {
          delete this.adjacencyList[vertex1];
        }
        else {
          this.adjacencyList[vertex].filter(vert => 
            vert !== vertex1
          )
        }
      }
    }
  }
  DFS(s) {
    let result = [];
    let visited = {};

    let helper = node => {
      if (!node || visited[node]) {
        return;
      } 
      result.push(node);
      visited[node] = 1;
      for(let vertex of this.adjacencyList[node]) {
        helper(vertex)
      }
    }
    helper(s);
    return result;
  }
}

let graph = new Graph();
graph.addVertex("0");
graph.addVertex("1");
graph.addEdge("0", "1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addEdge("1", "3");
graph.addEdge("0", "2");
graph.addEdge("2", "3");
graph.addEdge("3", "4");
// graph.removeEdge("A", "B");
graph.printAdajencyList();
console.log(graph.DFS("0"));