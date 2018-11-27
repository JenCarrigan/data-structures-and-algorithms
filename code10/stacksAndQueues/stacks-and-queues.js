'use strict'

class Node {
  constructor (val, next = null) {
    if (val === null) {
      throw new Error('Please enter a value for your node!');
    }
    this.value = val;
    this.next = next;
  }
}

class Stack {
  constructor (node = null) {
    this.top = node;
  }

  push(val) {
    if (val === null || val === undefined) {
      throw new Error('Please insert a value');
    }
    if (this.top === null) {
      this.top = new Node(val);
      return this;
    }
    else {
      this.top = new Node(val, this.top);
      return this;
    }
  }

  pop() {
    if (arguments.length > 0) {
      throw new Error('I do not need an argument!');
    }
    if (this.top === null) {
      throw new Error('Stack empty!');
    }

    let tmp = this.top;
    this.top = this.top.next;
    tmp.next = null;
    return tmp;
  }

  peek() {
    if (arguments.length > 0) {
      throw new Error('I do not need an argument!');
    }
    if (this.top === null) {
      throw new Error('Stack empty!');
    }
    return this.top;
  }
}

class Queue {
  constructor (node = null) {
    this.front = node;
    this.rear = node;
  }

  enqueue(val) {
    if (val === null || val === undefined) {
      throw new Error('Please insert a value');
    }
    if (this.front === null) {
      this.front = new Node(val);
      this.rear = this.front;
      return this;
    }
    else {
      this.rear.next = new Node(val);
      this.rear = this.rear.next;
      return this;
    }
  }

  dequeue() {
    if (arguments.length > 0) {
      throw new Error('I do not need an argument!');
    }
    if (this.top === null) {
      throw new Error('Stack empty!');
    }
    let tmp = this.front;
    this.front = this.front.next;
    tmp.next = null;
    return tmp;
  }

  peek() {
    if (arguments.length > 0) {
      throw new Error('I do not need an argument!');
    }
    if (this.top === null) {
      throw new Error('Stack empty!');
    }
    return this.front;
  }
}

module.exports = {
  queue : Queue,
  stack : Stack,
  node : Node,
};
