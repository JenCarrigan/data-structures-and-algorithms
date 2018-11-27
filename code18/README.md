# Find the Maximum Value in a Binary Tree

## Challenge
Write a function called find-maximum-value which takes binary tree as its only input. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
Since every node needs to be visited to figure out the maximum value, the time complexity will be O(n). We using a queue to hold our node as we traverse, but the queue will only have as many nodes as the widest level of the tree, so the space complexity will be O(w) where w is the width.

## Solution
![Whiteboard] 

For some reason I can't get to the raw image file. Please follow the link below!

https://github.com/JenCarrigan/data-structures-and-algorithms/commit/ed908285123b264d204c8d5344c577b2426577e2?short_path=667f6ed#diff-667f6ed5ba519df88c3fb32052d6083f