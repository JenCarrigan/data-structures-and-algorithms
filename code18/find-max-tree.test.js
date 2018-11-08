const tree = require('./find-max-tree.js');

const setwo = new tree.Node(72);
const twotwo = new tree.Node(22);
const two = new tree.Node(2);
const onetwofive = new tree.Node(125);
const five = new tree.Node(5, setwo, twotwo);
const nine = new tree.Node(9, null, two);
const fofive = new tree.Node(45, five, nine);
const seventy = new tree.Node(70, null, onetwofive);
const three = new tree.Node(3, fofive,seventy);
const maxTree = new tree.BinaryTree(three);


describe('Max Value Binary Trees', () => {

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
    });
  });

  describe('Max Value', () => {
    it('should find the max value', () => {
      let max = maxTree.findMax();
      expect(max).toBe(125);
    });
  });
});