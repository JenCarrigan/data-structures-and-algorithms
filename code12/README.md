# First-in, First out Animal Shelter.
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref, a string, is ‘cat’ return the longest-waiting cat. If pref is ‘dog’, return the longest-waiting dog. For anything else, return either a cat or a dog.

## Challenge
See above

## Approach & Efficiency
We used linked lists. The enqueue takes O(1) time and O(n) space. The dequeue takes O(n) time and O(1) space.

## Solution
![whiteboard] https://raw.githubusercontent.com/JenCarrigan/data-structures-and-algorithms/master/animalShelter.jpg
https://raw.githubusercontent.com/JenCarrigan/data-structures-and-algorithms/master/animalShelter1.jpg