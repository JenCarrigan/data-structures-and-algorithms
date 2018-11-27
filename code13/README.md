# Multi-bracket Validation.
Testing for open and close brackets

## Challenge
Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

## Approach & Efficiency
This solution takes O(n) on time since it need to iterate through the string, and O(n) for space, since it will push copies of values onto a stack.

We went with a stack and node class that will push open brackets to the stack in the form of a node. We then can peek at the top value from the stack as we move through it and test if they are partners.

## Solution
![whiteboard] https://raw.githubusercontent.com/JenCarrigan/data-structures-and-algorithms/master/%3Aassets/multi-bracket-validation.jpg