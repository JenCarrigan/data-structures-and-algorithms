'use strict'

const shift = require('../../lib/array-shift.js');

describe('array shift', () => {
    it('should return an new array with a new number in middle', () => {
        expect(shift.shiftNum([1,2,3,4], 5)).toStrictEqual([1,2,5,3,4]);
        expect(shift.shiftNum([1], 6)).toStrictEqual([1,6]);
        expect(shift.shiftNum([], 7)).toStrictEqual([7]);
    });

    it('should throw error if second arg is not a number', () => {
        expect(() => shift.shiftNum([1,2,3], 'dog')).toThrow();
    });
});