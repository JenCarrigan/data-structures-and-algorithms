const { findRepeat } = require('./repeated-word.js');

let str = 'The red, car is red.';
let badStr = 'The sky is blue.';

describe('Find repeat word', () => {
  it('should return error if no string passed in', () => {
    expect(findRepeat()).toBe('Please pass me a string!');
  });

  it('should return red', () => {
    expect(findRepeat(str)).toBe('red');
  });

  it('should return no repeats if no repeats', () => {
    expect(findRepeat(badStr)).toBe('There are no repeated words!');
  });
});