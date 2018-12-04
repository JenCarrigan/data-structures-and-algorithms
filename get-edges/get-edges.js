class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('No vertices to connect!');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('That vertex does not exist!');
    }
    return [...this._adjacencyList.get(vertex)];
  }

  bfs(startNode) {
    if (!startNode) {
      throw new Error('I need a node!');
    }
    let q = [];
    let visit = new Set();
    q.push(startNode);
    visit.add(startNode);
    while (q.length) {
      let cur = q.shift();
      let neighbors = this.getNeighbors(cur);
      for (let n of neighbors) {
        let neighborNode = n.vertex;
        if (visit.has(neighborNode)) {
          continue;
        }
        else {
          visit.add(neighborNode);
        }
        q.push(neighborNode);
      }
    }
    return visit;
  }
}

const getEdge = (graph, arr) => {
  if (arr.length < 2) {
    return false;
  }

  let cost = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let start = arr[i];
    let end = arr[i+1];
    let hasTheNode = false;
    let neighbors = graph.getNeighbors(start);

    for (n in neighbors) {
      if (neighbors[n].vertex === end) {
        cost += neighbors[n].weight;
        hasTheNode = true;
      }
      else {
        continue;
      }
    }
    if (!hasTheNode) {
      return false;
    }
  }
  return cost;
}

module.exports = {
  Vertex,
  Graph,
  getEdge,
};