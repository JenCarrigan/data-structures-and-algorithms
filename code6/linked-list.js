'use strict'

 class Node {
    constructor (val, next = null) {
        if (val === null) {
            throw new Error('Please enter a value for your node!');
        }
         if (arguments > 2) {
            throw new Error('Woah there, slow your roll and try again');
        }
        this.value = val;
        this.next = next;
    }
}
 module.exports = class LinkedList {
    constructor (node = null) {
        this.head = node;
    }
     insert(val) {
        if (val === null || val === undefined) {
            throw new Error('Please insert a value');
        }
         if (arguments.length > 1) {
            throw new Error('Woah there, slow your roll and try again');
        }
         if (this.head === null) {
            this.head = new Node(val);
            return this;
        }
        else {
            this.head = new Node(val, this.head);
            return this;
        }
    }
     includes(val) {
        if (val === null || val === undefined) {
            throw new Error('Please insert a value');
        }
         if (arguments.length > 1) {
            throw new Error('Woah there, slow your roll and try again');
        }
        
        let curNode = this.head;
        while (curNode != null) {
            if (curNode.value === val) {
                return true;
            }
            
            curNode = curNode.next;
        }
        return false;
    }
     print() {
        if (this.head === null) {
            throw new Error('Nothing to print!')
        }
         if (arguments.length !== 0) {
            throw new Error('Hey stop trying to pass something in here!');
        }
         let curNode = this.head;
        let arr = [];
        while (curNode != null) {
            arr.push(curNode.value);
            curNode = curNode.next;
        }
        return arr.join(", ");
    }

    append(val) {
        let curNode = this.head;

        while(curNode.next != null) {
            curNode = curNode.next;
        }
        curNode.next = new Node(val);
    }

    insertBefore(val, newVal) {
        let curNode = this.head;
        let newNode = new Node(newVal);

        while(curNode.next !== null) {
            if (curNode.next.value === val){ 
                newNode.next = curNode.next;
                curNode.next = newNode;
                return;
            }
            curNode = curNode.next;
        }
    }

    insertAfter(val, newVal) {
        let curNode = this.head;
        let newNode = new Node(newVal);

        while(curNode.next !== null) {
            if(curNode.value === val) {
                newNode.next = curNode.next;
                curNode.next = newNode;
                return;
            }
            curNode = curNode.next;
        }
    }
}
