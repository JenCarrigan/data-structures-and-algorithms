'use strict'

const binary = require('./array-binary-search');

describe('Binary Search', () => {
    it('should return the index of a number search if it exists in the array', () => {
        let testArr = [1,2,3,4,5,6,7,8,9,10];
        expect(binary.search(testArr, 4)).toStrictEqual(3);
        expect(binary.search(testArr, 10)).toStrictEqual(9);
    });

    it('should return -1 if the searched num does not appear in array', () => {
        let testArr = [1,2,3,4,5,6,7,8,9,10];
        expect(binary.search(testArr, 14)).toStrictEqual(-1);
    });

    it('should return -1 if the array is empty', () => {
        expect(binary.search([], 3)).toStrictEqual(-1);
    });
});