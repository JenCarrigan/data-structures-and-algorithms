# GRAPHS
A graph is a non-linear data structure that can be looked at as a a collection of points made up of vertices (or nodes) potentially being connected by line segments named edges.

## Challenge
Write a graph class with methods for adding a vertex, adding an edge, adding a directed edge, and getting a vertex's neighbors.

## Approach & Efficiency
We didn't really go over efficiency but it seems like space for the whole is O(v + e) where v is the size of the vertex container and e is the size of the edge containers

For time I would say O(1) for all methods. For space it's going to be O(1) for two add methods, and O(n), where n is the size of the edge container.
