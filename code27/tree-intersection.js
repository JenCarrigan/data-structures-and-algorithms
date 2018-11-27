'use strict';

class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key / 1;
  }

  add(key, value) {
    if (arguments.length !== 2) {
      return 'I need a key and a value';
    }

    let hash = this.hash(key);

    if (!this.map[hash]) {
      this.map[hash] = [];
    }

    this.map[hash].push({ [key]: value });
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      return false;
    }
    return true;
  }
}

function treeInsertion(tree1, tree2){
  if (arguments.length === 0 || arguments.length === 1) {
    return 'I need two trees to compare!';
  }

  if (!tree1.root || !tree2.root) {
    return 'I need two trees to compare!';
  };

  let hash = new HashMap();
  const preOrderTree1 = (node) => {
    hash.add(node.value, node.value);
    if (node.left !== null) {
      preOrderTree1(node.left);
    }
    if (node.right !== null) {
      preOrderTree1(node.right);
    }
  }
  preOrderTree1(tree1.root);

  let arr = [];
  const preOrderTree2 = (node) => {
    if (hash.contains(node.value)) {
      arr.push(node.value);
    }
    if (node.left !== null) {
      preOrderTree2(node.left);
    }
    if (node.right !== null) {
      preOrderTree2(node.right);
    }
  }
  preOrderTree2(tree2.root);

  if (arr.length === 0) {
    return 'There are no common values between the two trees!'
  }

  return arr;
}

module.exports = {
  HashMap,
  Node,
  BinaryTree,
  treeInsertion,
};