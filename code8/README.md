# Merge two Linked Lists
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Challenge
See above

## Approach & Efficiency
I went with an O(1) space and O(n) time solution. By having two temp nodes and using those to change reference to the next nodes in the list it'll always be two nodes that need to be created, and then only once through the lists at the same time with only 1 while loop.

## Solution
![Whiteboard] https://raw.githubusercontent.com/JenCarrigan/data-structures-and-algorithms/master/%3Aassets/IMG_20181024_143405.jpg