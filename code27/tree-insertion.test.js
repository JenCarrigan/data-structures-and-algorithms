'use strict'

const { Node, BinaryTree, treeInsertion } = require('./tree-intersection.js');

// Tree 1
const oneTwoFive = new Node(125);
const oneSevenFive = new Node(175);
const threeHunnerd = new Node(300);
const fiveHunnerd = new Node(500);
const sevenFive = new Node(75);
const oneSixty = new Node(160, oneTwoFive, oneSevenFive);
const twoHunnerd = new Node(200);
const threeFifty = new Node(350, threeHunnerd, fiveHunnerd);
const oneHunnerd = new Node(100, sevenFive, oneSixty);
const twoFifty = new Node(250, twoHunnerd, threeFifty);
const oneFifty = new Node(150, oneHunnerd, twoFifty);
const tree1 = new BinaryTree(oneFifty);

// Tree 2
const oneTwentyFive = new Node(125);
const oneSeventyFive = new Node(175);
const four = new Node(4);
const fiveZeroZero = new Node(500);
const fifteen = new Node(15);
const oneSixZero = new Node(160, oneTwentyFive, oneSeventyFive);
const twoZeroZero = new Node(200);
const threeFiveZero = new Node(350, four, fiveZeroZero);
const oneZeroZero = new Node(100, fifteen, oneSixZero);
const sixZeroZero = new Node (600, twoZeroZero, threeFiveZero);
const fortyTwo = new Node(42, oneZeroZero, sixZeroZero);
const tree2 = new BinaryTree(fortyTwo);

// No common vals tree 1
const two = new Node(2);
const three = new Node(3);
const one = new Node(1, two, three);
const noValTree3 = new BinaryTree(one);

// No common vals tree 2
const seven = new Node(7);
const six = new Node(6, seven);
const noValTree2 = new BinaryTree(six);

describe('Tree Intersection Test', () => {
  it('return error if no, one or bad trees sent in', () => {
    let badTree1 = new BinaryTree();
    let badTree2 = new BinaryTree();
    expect(treeInsertion(badTree1, badTree2)).toBe('I need two trees to compare!');
    expect(treeInsertion()).toBe('I need two trees to compare!');
    expect(treeInsertion(tree1)).toBe('I need two trees to compare!');
  });

  it('should return an array of common values', () => {
    let actual = treeInsertion(tree1, tree2);
    let expected = [100,160,125,175,200,350,500];
    expect(actual).toEqual(expected);
  });

  it('should return str if no common vals found', () => {
    expect(treeInsertion(noValTree2, noValTree3)).toBe('There are no common values between the two trees!');
  });
});