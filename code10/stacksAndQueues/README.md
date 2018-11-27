# Stacks and Queues

A stack is LIFO, a queue is FIFO. The stack and queue I have created were implemented with nodes.

## Challenge

Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
Define a method called peek that does not take an argument and returns the node located on the top of the stack.
Create a Queue class that has a top property. It creates an empty queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.
Define a method called peek that does not take an argument and returns the node located in the front of the stack.
At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

## Approach & Efficiency

Implemented with nodes and linked lists, I was able to assign a variable of top to ensure I had a O(1) when dealing with stacks. Likewise, I have front and rear variables to keep track of the front and back. Again, this will give us an O(1) time.

## API

### Stack Push Method

The method creates a new node and sets the top equal to the new node and pointing the new node's next to the old top

### Stack Pop Method

This method creates a temp variable to hold the top node, sets the new top to the temp's next, and then sets the temp's next to null.

### Stack Peek Method

This method returns the top node.

### Queue Enqueue Method

For an empty queue, this method takes a node and makes it the front and rear. For each subsequent node added to the queue, this method only resets the rear to the new node.

### Queue Dequeue Method

This method creates a temp variable to hold the front node, sets the new front to the temp's next, and then sets the temp's next to null.

### Queue Peek Method

This method returns the front node.