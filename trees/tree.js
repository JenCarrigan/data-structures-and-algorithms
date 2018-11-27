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

  preorder(node = null) {
    let arr = [];

    function getNodePreorder (node = null) {
      if (node == null) { return; }
      
      arr.push(node.value);
      getNodePreorder(node.left);
      getNodePreorder(node.right);
    }

    getNodePreorder(node);
    return arr;
  }

  inOrder(node = null) {
    let arr = [];

    function getNodeInorder (node = null) {
      if (node == null) { return; }

      getNodeInorder(node.left);
      arr.push(node.value);
      getNodeInorder(node.right);
    }

    getNodeInorder(node);
    return arr;
  }

  postOrder(node = null) {
    let arr = [];

    function getNodePostorder (node = null) {
      if (node == null) { return; }

      getNodePostorder(node.left);
      getNodePostorder(node.right);
      arr.push(node.value);
    }

    getNodePostorder(node);
    return arr;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  preorder(node = null) {
    let arr = [];

    function getNodePreorder (node = null) {
      if (node == null) { return; }
      
      arr.push(node.value);
      getNodePreorder(node.left);
      getNodePreorder(node.right);
    }

    getNodePreorder(node);
    return arr;
  }

  add(val) {
    if(this.root === null) {
      this.root = new Node(val);
      return;
    }

    addRecursive(this.root, val);

    function addRecursive(node, val) {
      if (node === null) {
        node = new Node(val);
        return node;
      }
      if(node.value > val) {
        node.left = addRecursive(node.left, val);
        return node;
      }
      else if (node.value < val) {
        node.right = addRecursive(node.right, val);
        return node;
      }
    }
  }

  search(node = null, val) {
    if (val === node.value || node === null) {
      return node;
    }

    if (val < node.value) {
      return this.search(node.left, val);
    }
    else {
      return this.search(node.right, val);
    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};