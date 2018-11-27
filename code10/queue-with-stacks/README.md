# Implement a Queue using two Stacks.
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement the standard queue interface, but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Challenge
See above

## Approach & Efficiency
The two stacks are stackEnq, used for enqueueing only, and stackDeq, used for dequeing only.

I wrote the Big O time will be O(n) since it will need to push every value onto the other stack if the other is empty.

I also wrote Big O of O(1) for space, since we will only ever have to create one temporary node when dequeuing.

## Solution

![Whiteboard] https://raw.githubusercontent.com/JenCarrigan/data-structures-and-algorithms/master/%3Aassets/queue-with-stacks.jpg