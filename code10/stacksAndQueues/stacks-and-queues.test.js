'use strict'

const sq = require('./stacks-and-queues.js');

describe('Stacks and Queues', () => {

  describe('Node Creation', () => {
    it('should throw error if no val given', () => {
      expect(() => sq.node()).toThrow();
    });

    it('should create a new node with val and next null if only val given', () => {
      let node = new sq.node(1);
      expect(node.value).toBe(1);
      expect(node.next).toBe(null);
    });

    it('should create a new node with a val and next if proper node passed in', () => {
      let node1 = new sq.node(1);
      let node2 = new sq.node(2, node1);
      expect(node2.next).toBe(node1);
    });
  });

  describe('Stacks', () => {
    it('should create a new stack', () => {
      let stack = new sq.stack();
      expect(stack).toBeInstanceOf(sq.stack);
      expect(stack.top).toBeNull();
    });

    describe('Stack Push', () => {
      it('should throw an error if no value given for the stack', () => {
        let stack = new sq.stack();
        expect( () => stack.push() ).toThrow();
      });

      it('should push a node to the stack', () => {
        let stack = new sq.stack();
        stack.push(1);
        expect(stack.top.value).toBe(1);
      });

      it('should push to the top of the stack if more than one node', () => {
        let stack = new sq.stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.top.value).toBe(3);   
      });
    });

    describe('Stack Pop', () => {
      it('should throw an error if arguments passed in', () => {
        let stack = new sq.stack();
        stack.push(1);
        expect( () => stack.pop(1234) ).toThrow();
      });

      it('should throw error if stack is empty', () => {
        let stack = new sq.stack();
        expect( () => stack.pop() ).toThrow();
      });

      it('should pop the top value off the stack', () => {
        let stack = new sq.stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.top.value).toBe(2);
      });
    });

    describe('Stack Peek', () => {
      it('should throw an error if arguments passed in', () => {
        let stack = new sq.stack();
        stack.push(1);
        expect( () => stack.peek(1234) ).toThrow();
      });

      it('should throw error if stack is empty', () => {
        let stack = new sq.stack();
        expect( () => stack.peek() ).toThrow();
      });

      it('should peek at the top value in the stack', () => {
        let stack = new sq.stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(stack.top);
      });
    });
  });

  describe('Queue', () => {
    it('should create a new queue', () => {
      let qu = new sq.queue();
      expect(qu).toBeInstanceOf(sq.queue);
      expect(qu.front).toBeNull();
      expect(qu.rear).toBeNull();
    });

    describe('Queue Enqueue', () => {
      it('should throw an error if no value given for the queue', () => {
        let stack = new sq.stack();
        expect( () => stack.push() ).toThrow();
      });

      it('should enqueue to the back of the queue', () => {
        let qu = new sq.queue();
        qu.enqueue(1);
        qu.enqueue(2);
        qu.enqueue(3);
        expect(qu.front.value).toBe(1);
        expect(qu.rear.value).toBe(3);
      });
    });

    describe('Queue Deqeueue', () => {
      it('should throw an error if arguments passed in', () => {
        let qu = new sq.queue();
        qu.enqueue(1);
        expect( () => qu.dequeue(1234) ).toThrow();
      });

      it('should throw error if stack is empty', () => {
        let qu = new sq.queue();
        expect( () => qu.dequeue() ).toThrow();
      });

      it('should dequeue the first node in', () => {
        let qu = new sq.queue();
        qu.enqueue(1);
        qu.enqueue(2);
        qu.enqueue(3);
        qu.dequeue();
        expect(qu.front.value).toBe(2);
        expect(qu.rear.value).toBe(3);
      });
    });

    describe('Queue Peek', () => {
      it('should throw an error if arguments passed in', () => {
        let qu = new sq.queue();
        qu.enqueue(1);
        expect( () => qu.dequeue(1234) ).toThrow();
      });

      it('should throw error if stack is empty', () => {
        let qu = new sq.queue();
        expect( () => qu.dequeue() ).toThrow();
      });
      
      it('should peek at the front of the queue', () => {
        let qu = new sq.queue();
        qu.enqueue(1);
        qu.enqueue(2);
        qu.enqueue(3);
        expect(qu.peek()).toBe(qu.front);
      });
    });
  });
});