const { HashMap } = require('./hashtable.js');

let hm = new HashMap(6);

describe('Hash Table', () => {
  it('should create a hashmap class', () => {
    expect(hm).toBeInstanceOf(HashMap);
    expect(hm.size).toBe(6);
    expect(hm.map.length).toBe(6);
  });

  it('should return err if no key and val given', () => {
    expect( hm.add() ).toBe('I need a key and a value');
    expect( hm.add(1) ).toBe('I need a key and a value');
  });

  it('should add a bucket and a key/val pair when new element gets added', () => {
    let newAdd = hm.add('Jen', 'Twix');
    expect( () => newAdd ).not.toThrow();
    expect( hm.get( 'Jen' ).length ).toBe(1);
  });

  it('should return err if try to get key that no exist', () => {
    expect( hm.get('Katherine') ).toBe('Does not exist!');
  });

  it('should get the bucket if a key does exist', () => {
    hm.add('John', 'chocolate');
    expect( hm.get('Jen') ).toEqual([{ 'Jen': 'Twix' }, {'John': 'chocolate'}]);
  });

  it('should return err if trying to find key that no exist', () => {
    expect( hm.find('Katherine') ).toBe('Does not exist!');
  });

  it('should return val of key/val pair if key does exist', () => {
    expect( hm.find('Jen') ).toBe('Twix');
  });

  it('should return false if key is not contained in map', () => {
    expect( hm.contains('Katherine') ).toBe('Does not exist!');
  });

  it('should return true if map does contain key', () => {
    expect( hm.contains('Jen') ).toBe('This key already exists!');
  });

  it('should return err if given key no have index', () => {
    expect( hm.getHash('Katherine') ).toBe('Does not exist!');
  });

  it('should return the index of the key if it does exist', () => {
    expect( hm.getHash('Jen') ).toBe(3);
  });
});