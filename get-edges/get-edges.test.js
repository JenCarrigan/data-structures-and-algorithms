const { Graph, Vertex, getEdge } = require('./get-edges.js');

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

graph.addDirectedEdge(ten, two, 7);
graph.addDirectedEdge(ten, six, 1);
graph.addDirectedEdge(ten, three, 3);
graph.addDirectedEdge(two, seven, 9);
graph.addDirectedEdge(six, seven, 6);
graph.addDirectedEdge(six, eight, 2);
graph.addDirectedEdge(three, eight, 2);
graph.addDirectedEdge(eight, seven, 1);

describe('Get Edges', () => {
  it('should return false when sent an array with less than two nodes', () => {
    let arr = [ten];
    let oArr = [];
    expect( getEdge(graph, arr) ).toBeFalsy();
    expect( getEdge(graph, oArr) ).toBeFalsy();
  });

  it('should return false if no direct edge', () => {
    let arr = [eight, ten];
    expect( getEdge(graph, arr) ).toBeFalsy();
  });

  it('should return false even if arr bigger and only one no direct edge', () => {
    let arr = [ten, two, seven, eight];
    expect( getEdge(graph, arr) ).toBeFalsy();
  });

  it('should return total cost if direct edge between', () => {
    let arr = [ten, six, eight, seven];
    expect( getEdge(graph, arr) ).toBe(4);
  });
});