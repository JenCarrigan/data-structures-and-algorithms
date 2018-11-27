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
    function getNodePreorder(node = null) {
      if (node == null) { return; }

      arr.push(node.value);
      getNodePreorder(node.left);
      getNodePreorder(node.right);
    }
    getNodePreorder(node);
    return arr;
  }
}
fizzBuzzTree = (tree) => {
  if (!tree.root) { throw new Error('The tree is empty!'); }
  function traverseTree(node = null) {
    if (node == null) { return; }
    if (node.value % 15 === 0) { node.value = 'fizzbuzz'; }
    else if (node.value % 5 === 0) { node.value = 'buzz'; }
    else if (node.value % 3 === 0) { node.value = 'fizz'; }
    traverseTree(node.left);
    traverseTree(node.right);
  }
  traverseTree(tree.root);
  return tree;
}
module.exports = {
  Node,
  BinaryTree,
  fizzBuzzTree,
} 