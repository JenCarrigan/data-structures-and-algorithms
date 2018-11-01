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
    return this.top;
  }
}

module.exports = (str) => {
  if (!arguments) {
    return false;
  }

  if(typeof str !== 'string') {
    return false;
  } 

  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) === '(' || str.charAt(i) === '{' || str.charAt(i) === '[') {
      stack.push(str.charAt(i));
    }
    else if (str.charAt(i) === ')' && stack.top !== null && stack.peek().value === '(') {
      stack.pop();
    }
    else if (str.charAt(i) === '}' && stack.top !== null && stack.peek().value === '{') {
      stack.pop();
    }
    else if (str.charAt(i) === ']' && stack.top !== null && stack.peek().value === '[') {
      stack.pop();
    }
    else if (str.charAt(i) === ')' && (stack.top === null || stack.peek().value !== '(' )) {
      return false;
    }
    else if (str.charAt(i) === '}' && (stack.top === null || stack.peek().value !== '(')) {
      return false;
    }
    else if (str.charAt(i) === ']' && (stack.top === null || stack.peek().value !== '(')) {
      return false;
    }
  }

  if(stack.top !== null) {
    return false;
  }
  else {
    return true;
  }
};