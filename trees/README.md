# Trees
Implement a binary tree and a binary search tree

## Challenge
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node .
Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which takes in a root node, and returns an array of the nodes.
At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

Create a BinarySearchTree class
Define a method named add that adds a new node in the correct location in the binary search tree.
Define a method named search that brings in a value of node, and returns the node with the desired value.

## Approach & Efficiency
I did recursion for all of the methods. For all the traversal functions, the big O will be O(n) since it needs to look at every single node.

For the searching on the binary search tree, it will be O(log n). For adding an element, it will O(h) since it will just have to traverse down one side or the other.

## API
Classes and their methods available are:

### Node
The Node class has a constructor that will assign a value property, as well as a left and right child node property.

### Binary Tree
The Binary Tree class has a constructor that sets the root node.

Preorder method will push the nodes to an array in a preorder collection.
Inorder method will push the nodes to an array in an inorder collection.
Postorder method will push the nodes to an array in a postorder collection.

### Binary Search Tree
The Binary Search Tree class has a constructor that sets the root node.

Preorder method will push the nodes to an array in a preorder collection. It is used here to make sure the added nodes will get put in the correct order.
Add method will add a node of the given value to the binary search tree.
Search method will search for a node with the same value as the value passed in.