'use strict';

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((p, n) => p + n.charCodeAt(0), 0) % this.size;
  }

  add(key, value) {
    if (arguments.length != 2) {
      return 'I need a key and a value';
    }

    let hash = this.hash(key);

    if (!this.map[hash]) {
      this.map[hash] = [];
    }

    this.map[hash].push({ [key]: value });
  }

  get(key) {
    let hash = this.hash(key);
    console.log(key, hash, this.map[hash]);
    if (!this.map[hash]) {
      return 'Does not exist!';
    }
    
    return this.map[hash];
  }

  find(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      return 'Does not exist!';
    }
    let foundPerson = this.map[hash].find(obj => Object.keys(obj).includes(key));
    return foundPerson[key];
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      return false;
    }
    else {
      return this.map[hash].filter(obj => Object.keys(obj).includes(key)).length > 0;
    }
  }

  getHash(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      return 'Does not exist!';
    }
    return hash;
  }

  serialize() {
    return JSON.stringify(this.map);
  }

  deserialize(str) {
    if (!str) {
      return 'Please pass me a valid JSON string!';
    }

    // valid JSON tester found online - regex is magic
    if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@')
      .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
      .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

      let obj = JSON.parse(str);
      this.size = obj.length;
      this.map = new Array(this.size);
      Object.assign(this.map, obj);
      return this.map;

    }
    else {
      return 'Please pass me a valid JSON string!';
    }
  }
}

const findRepeat = (str) => {
  if (!str) {
    return 'Please pass me a string!';
  }
  let strMap = new HashMap(str.length);
  let word = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || str[i] === ',' || str[i] === '.') {
      if (strMap.contains(word)) {
        return word;
      } else if (word) {
        strMap.add(word, word);
        word = '';
      }
    } else {
      word += str[i].toLowerCase();
    }
  }
  return 'There are no repeated words!';
}

module.exports = {
  HashMap,
  findRepeat,
};