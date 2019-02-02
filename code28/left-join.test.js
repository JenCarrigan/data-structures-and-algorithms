const { HashMap, leftJoin } = require('./left-join.js');

let h1 = new HashMap(3);
h1.add('this', 'word');
h1.add('the', 'system');
h1.add('blue', 'coolness');

let h2 = new HashMap(3);
h2.add('the', 'sucks');
h2.add('this', 'rocks');
h2.add('boy', 'dog');

describe('Left Join Hash', () => {
  it('should throw err if no hashmaps send in', () => {
    expect(() => leftJoin()).toThrow();
  });

  it('should throw error if wrong things sent in', () => {
    expect(() => leftJoin('hello', 'dave')).toThrow();
  });

  it('should return an array of arrays', () => {
    expect( leftJoin(h1, h2) ).toEqual([
      [ 'the', 'system', 'sucks' ],
      [ 'blue', 'coolness', 'null' ],
      [ 'this', 'word', 'rocks' ] ]);
  });
});