const tree = require('./fizz-buzz-tree.js');
const nine = new tree.Node(9);
const ten = new tree.Node(10);
const eleven = new tree.Node(11);
const twelve = new tree.Node(12);
const thirteen = new tree.Node(13);
const fourteen = new tree.Node(14);
const fifteen = new tree.Node(15);
const sixteen = new tree.Node(16);
const eight = new tree.Node(8, sixteen);
const seven = new tree.Node(7, fourteen, fifteen);
const six = new tree.Node(6, twelve, thirteen);
const five = new tree.Node(5, ten, eleven);
const four = new tree.Node(4, eight, nine);
const three = new tree.Node(3, six, seven);
const two = new tree.Node(2, four, five);
const one = new tree.Node(1, two, three);
const fbTree = new tree.BinaryTree(one);
describe('Fizz Buzz Tree', () => {
  it('should output the proper tree before calling the function', () => {
    expect(fbTree.preorder(fbTree.root)).toEqual([1, 2, 4, 8, 16, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15]);
  });
  it('should throw error for empty tree', () => {
    let newTree = new tree.BinaryTree();
    expect(() => tree.fizzBuzzTree(newTree)).toThrow();
  });
  it('should replace mod 3 with fizz, mod 5 with buzz, mod 15 with fizzbuzz', () => {
    let newTree = tree.fizzBuzzTree(fbTree);
    let actual = newTree.preorder(newTree.root);
    let expected = [1, 2, 4, 8, 16, 'fizz', 'buzz', 'buzz', 11, 'fizz', 'fizz', 'fizz', 13, 7, 14, 'fizzbuzz'];
    expect(actual).toEqual(expected);
  })
});