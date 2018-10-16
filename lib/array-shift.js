'use strict'

const shift = module.exports = {};

shift.shiftNum = (arr, val) => {
    if (isNaN(val)) {
        throw new Error('That is not a number you are trying to insert!');
    }

        let mid = Math.ceil(arr.length/2);
        let newArr = [];

        newArr[mid] = val;

        for (let i = 0; i < arr.length; i++) {
            if (i < mid) {
                newArr[i] = arr[i];
            }
            else if (i >= mid) {
                newArr[i + 1] = arr[i];
            }
            
        }

        return newArr;
};