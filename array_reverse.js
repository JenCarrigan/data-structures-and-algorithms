'use strict'

/*****************************
 Reverse Array
 Takes array as input, reverses elements with for loop. Utilizes no in-built methods.
******************************/
const reverseArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[arr.length - i - 1] = arr[i];
    }
    console.log(newArr);
    return newArr;
}


/* STRETCH GOAL - Recursion */
let count = 0;
let newArr2 = [];
const reverseArray2 = arr => {
  if (count === 0) {
    newArr2 = [];
  }
  newArr2[arr.length - 1 - count] = arr[count];
  count++;
  if (count < arr.length) {
    return reverseArray(arr);
  } else {
    count = 0;
    return newArr2;
  }
};

const data = [1,2,3,4,5,6];
reverseArray(data);

