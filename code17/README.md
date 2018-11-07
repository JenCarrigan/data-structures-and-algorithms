# Breadth-first
Traverse a tree using breadth-first (level) traversal.

## Challenge
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach & Efficiency
The time complexity to visit every node will be O(n).

We used a queue for the traversal. Everytime a node gets removed from the queue, up to two more will be added. This means that the space complexity for this queue will be the width of the tree O(w).

## Solution
![Whiteboard] https://raw.githubusercontent.com/JenCarrigan/data-structures-and-algorithms/master/%3Aassets/breadthFirst.jpg