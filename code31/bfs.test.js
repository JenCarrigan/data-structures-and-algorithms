const { Graph, Vertex } = require('./bfs.js');

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

describe('BFS graph', () => {
  it('should throw error when no node given', () => {
    expect( () => graph.bfs() ).toThrow();
  });

  it('should put the numbers in a set', () => {
    expect( graph.bfs(eight).has(eight) ).toBeTruthy();
  });

  it('should return a partial set when given a weird start node', () => {
    // if we started at node 10 we would have 6 nodes
    // if we start at 6, we should only have 3
    expect( graph.bfs(six).size ).toBe(3);
  });

  it('should have all the verts in a set if given a proper start', () => {
    expect( graph.bfs(ten).size ).toBe(6);
    expect( graph.bfs(ten).has(two) ).toBeTruthy();
  });
});