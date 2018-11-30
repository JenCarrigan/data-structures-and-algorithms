'use strict';

const util = require('util');

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
    if([...this._adjacencyList.get(vertex)].length === 0) {
      throw new Error('No neighbors!');
    }
    return [...this._adjacencyList.get(vertex)];
  }
  
  bfs(startNode) {
  }

  dfs(startNode) {
  }
  
}

module.exports = {
  Graph,
  Vertex,
};