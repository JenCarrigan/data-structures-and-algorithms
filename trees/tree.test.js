const tree = require('./tree.js');

// Binary Tree
const three = new tree.Node(3);
const seven = new tree.Node(7);
const one = new tree.Node(1);
const four = new tree.Node(4, three, seven);
const six = new tree.Node(6, null, one);
const two = new tree.Node(2, four, six);
const traverseTree = new tree.BinaryTree(two);

// Binary Search Tree
const ten = new tree.Node(10);
const fortyfive = new tree.Node(45);
const seventytwo = new tree.Node(72);
const twohunnerd = new tree.Node(200);
const fifteen = new tree.Node(15, ten);
const forty = new tree.Node(40, null, fortyfive);
const twenty = new tree.Node(20, fifteen, forty);
const onehunnerd = new tree.Node(100, seventytwo, twohunnerd);
const fifty = new tree.Node(50, twenty, onehunnerd);
const bstTree = new tree.BinarySearchTree(fifty);


describe('Trees', () => {

  describe('Node creation', () => {
    it('should create a node with the val given', () => {
      let node = new tree.Node(2);
      expect(node.value).toBe(2);
      expect(node.left).toBeNull();
      expect(node.right).toBeNull();
    });

    it('should create a node with left and right children', () => {
      let leftNode = new tree.Node(3);
      let rightNode = new tree.Node(1);
      let node = new tree.Node(2, leftNode, rightNode);
      expect(node.value).toBe(2);
      expect(node.left).toBe(leftNode);
      expect(node.right).toBe(rightNode);
    })
  });

  describe('Binary tree creation', () => {
    it('should create a binary tree class', () => {
      let bt = new tree.BinaryTree();
      expect(bt).toBeInstanceOf(tree.BinaryTree);
    });

    it('should traverse tree in preorder', () => {
      let arr = traverseTree.preorder(traverseTree.root);
      expect(arr).toEqual([2,4,3,7,6,1]);
    });

    it('should traverse a tree inorder', () => {
      let arr = traverseTree.inOrder(traverseTree.root);
      expect(arr).toEqual([3,4,7,2,6,1]);
    });

    it('should traverse a tree in postorder', () => {
      let arr = traverseTree.postOrder(traverseTree.root);
      expect(arr).toEqual([3,7,4,1,6,2]);
    })
  });

  describe('BST creation', () => {
    it('should create a binary search tree class', () => {
      let bst = new tree.BinarySearchTree();
      expect(bst).toBeInstanceOf(tree.BinarySearchTree);
    });

    it('should return true if given a val in the BST', () => {
      let tf = bstTree.search(bstTree.root, 45);
      expect(tf).toEqual(fortyfive);
    });

    it('should add to a binary search properly', () => {
      let newBST = new tree.BinarySearchTree();
      newBST.add(50);
      newBST.add(20);
      newBST.add(10);
      newBST.add(30);
      newBST.add(100);
      newBST.add(75);
      let arr = newBST.preorder(newBST.root);
      expect(arr).toEqual([50,20,10,30,100,75]);
    })
  })
})