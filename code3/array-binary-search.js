'use strict'

const binary = module.exports = {};

binary.search = (arr,val) => {
    if (arr.length < 1) {
        return -1;
    }
    else {
        let left = 0;
        let right = arr.length - 1;
        
        while(left < right) {
            
            let mid = Math.floor(left + right / 2);
            console.log(mid);
            if (arr[mid] < val) {
                left = mid + 1;
            }
            else if (arr[mid] > val) {
                right = mid - 1;
            }
            else {
                return mid;
                
            }
        }
        return -1;
    }
};