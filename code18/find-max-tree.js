class Node {
  constructor(val, left = null, right = null, node = null) {
    this.value = val;
    this.left = left;
    this.right = right;
    this.next = node;
  }
}

class Queue {
  constructor(node = null) {
    this.front = node;
    this.rear = node;
  }
  enqueue(node) {
    if (this.front === null) {
      this.front = node;
      this.rear = this.front;
      return this;
    }
    else {
      this.rear.next = node;
      this.rear = this.rear.next;
      return this;
    }
  }
  dequeue() {
    if (arguments.length > 0) {
      throw new Error('I do not need an argument!');
    }
    let tmp = this.front;
    this.front = this.front.next;
    tmp.next = null;
    return tmp;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMax() {
    if (!this.root) { return; }

    let current = this.root;
    let max = this.root.value;
    let q = new Queue(current);

    while (current) {
      if (current.left) { q.enqueue(current.left); }
      if (current.right) { q.enqueue(current.right); }
      let check = q.dequeue();
      if (check.value > max) { max = check.value; }
      current = q.front;
    }
    return max;
  }
}

module.exports = {
  Node,
  Queue,
  BinaryTree,
};