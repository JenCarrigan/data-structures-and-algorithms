'use strict'
 const linked = require('./linked-list');
 describe('Linked List', () => {
    it('should create a new list', () => {
        let lst = new linked();
        expect(lst).toBeInstanceOf(linked);
        expect(lst.head).toBeNull();
    });
     describe('Node Creation', () => {
        let lst = new linked();
        
        it('should insert into the null head', () => {
            lst.insert('jen');
            expect(lst.head.value).toStrictEqual('jen');
        });
        it('should insert to head if other nodes', () => {
            lst.insert('bob');
            expect(lst.head.value).toStrictEqual('bob');
        });
         it('should throw error if no val given', () => {
            expect(() => lst.insert()).toThrow();
        });
        it('should throw err if more than 1 arg', () => {
            expect(() => lst.insert(4,'fjgsfgs')).toThrow();
        });
    });
     describe('Value Test', () => {
        let lst = new linked();
        lst.insert('jen');
        lst.insert('bob');
        lst.insert('dave');
        lst.insert('matt');
        it('should return true if the search val exists', () => {
            expect(lst.includes('dave')).toBeTruthy();
        });
        it('should return false if the search val does not exist', () => {
            expect(lst.includes('fred')).toBeFalsy();
        });
         it('should throw error if no val given', () => {
            expect(() => lst.insert()).toThrow();
        });
        it('should throw err if more than 1 arg', () => {
            expect(() => lst.insert(4,'fjgsfgs')).toThrow();
        });
    });
     describe('Print Test', () => {
        
        it('should print out string of values in the list', () => {
            let lst = new linked();
            lst.insert('jen');
            lst.insert('bob');
            lst.insert('dave');
            lst.insert('matt');
            expect(lst.print()).toStrictEqual('matt, dave, bob, jen');
        });
         it('should throw error if lst empty', () => {
            let lst = new linked();
            expect(() => lst.print()).toThrow();
        });
        it('should throw error if args passed in', () => {
            expect(() => lst.print('jen')).toThrow();
        });
    });

    describe('Append Test', () => {
        it('should add a node to the back of the list', () => {
            let lst = new linked();
            lst.insert('jen');
            lst.insert('bob');
            lst.insert('dave');
            lst.insert('matt');
            lst.append('fred');
            expect(lst.print()).toStrictEqual('matt, dave, bob, jen, fred'); 
        });

        it('should insert before a given value of a node', () => {
            let lst = new linked();
            lst.insert('jen');
            lst.insert('bob');
            lst.insert('dave');
            lst.insert('matt');
            lst.insertBefore('dave', 'fred');
            expect(lst.print()).toStrictEqual('matt, fred, dave, bob, jen');
        });

        it('should insert after a given value of a node', () => {
            let lst = new linked();
            lst.insert('jen');
            lst.insert('bob');
            lst.insert('dave');
            lst.insert('matt');
            lst.insertAfter('dave', 'fred');
            expect(lst.print()).toStrictEqual('matt, dave, fred, bob, jen');
        });
    });
});