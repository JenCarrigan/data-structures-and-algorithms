const bracket = require('./multi-bracket-validation.js');

let goodTest = '{}[]([efg])';
let badTest1 = 12;
let badTest2 = '){}';
let badTest3 = '{(})';

describe('Multi-Bracket Test', () => {
  it('should return false if invalid string', () => {
    expect(bracket(badTest1)).toBeFalsy();
  });

  it('should return false nothing passed in', () => {
    expect(bracket()).toBeFalsy();
  });

  it('should return false if brackets do not proper match', () => {
    expect(bracket(badTest2)).toBeFalsy();
    expect(bracket(badTest3)).toBeFalsy();
  });

  it('should work with a valid bracket match', () => {
    expect(bracket(goodTest)).toBeTruthy();
  });
});
