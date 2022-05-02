const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  link: [],
  getLength() {
    let len = this.link.length;
    return len;
  },
  addLink(value) {
    if (value == null) {
      this.link.push('null');
    }
    else {
      this.link.push(value);
    }
    return this;
  },
  removeLink(position) {
    let pos = position - 1;
    this.link.splice(pos, 1);
    return this;
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    let finish = `( ${this.link.join(' )~~( ')} )`;
    this.link = [];
    return finish;
    
  }
};

module.exports = {
  chainMaker
};
