'use strict'

const {Graph, Vertex} = require('./graphs.js');

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);

describe('Graphs', () => {
  it('should create a new graph', () => {
    let newGraph = new Graph();
    expect(newGraph).toBeInstanceOf(Graph);
  });

  it('should add a new vertex to the graph', () => {
    expect(() => graph.addVertex(new Vertex(2))).not.toThrow();
  });

  it('should add a directed edge', () => {
    let newGraph = new Graph();
    expect(() => newGraph.addDirectedEdge(ten, two)).toThrow();
  });

  it('should push edges to the graph', () => {
    expect( () => graph.addDirectedEdge(six, eight) ).not.toThrow();
  });

  it('should throw error if no neighbors', () => {
    let zero = new Vertex(0);
    graph.addVertex(zero);
    expect( () => graph.getNeighbors(zero) ).toThrow();
  });

  it('should return an array of the neighbors', () => {
    expect(graph.getNeighbors(ten).length).toBe(3);
  });
});