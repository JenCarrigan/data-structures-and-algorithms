'use strict';

class HashMap {
 
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  
  hash(key) {
    return key.split('').reduce( (p,n) => p + n.charCodeAt(0), 0) % this.size;
  }
  
  add(key,value) {
    if(arguments.length != 2) {
      return 'I need a key and a value';
    }

    let hash = this.hash(key);
    
    if(! this.map[hash]) { 
      this.map[hash] = [];
    }
    
    this.map[hash].push({[key]:value});
  }
  
  get(key) {
    let hash = this.hash(key);
    if(!this.map[hash]) {
      return 'Does not exist!';
    }
    return this.map[hash];
  }
  
  find(key) {
    let hash = this.hash(key);
    if(!this.map[hash]) {
      return 'Does not exist!';
    }
    let foundPerson = this.map[hash].find( obj => Object.keys(obj).includes(key) );
    return foundPerson[key];
  }
  
  contains(key) {
    let hash = this.hash(key);
    if(!this.map[hash]) {
      return 'Does not exist!';
    }
    return 'This key already exists!';
  }

  getHash(key) {
    let hash = this.hash(key);
    if(!this.map[hash]) {
      return 'Does not exist!';
    }
    return hash;
  }
  
  delete(key) {
    
  }
  
  serialize() {
    
  }
  
  deserialize() {
    
  }
  
}

module.exports = {
  HashMap,
};