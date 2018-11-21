# Hashtables
Implementation of hash table using JavaScript

## Challenge
Implement a Hashtable with the following capabilities:
-A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
-A method/function named Find that takes in the key and returns the value from key/value pair.
-A method/function named contains that takes in the key and returns if the key exists in the table already.
-A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

## Approach & Efficiency
Since the hash table is small and the  hash itself is simple, the time complexity will likely be O(n). This is because for each lookup, multiple values will be stored in the bucket arrays. However, for a (very) small number of items, the complexity in both best and average case scenarios is O(1).

## API
Constructor: Sets the size and makes an array to store buckets

Hash: Hashes the given key into a number value for an array index

Add: Adds a hashed key into the array

Get: Gets a bucket

Find: Finds a specific key and returns the value

Contains: Returns statement if key exists in hash table or not

GetHash: Returns the index of the given key if it exists