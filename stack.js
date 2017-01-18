'use strict'

class Stack {
  constructor(...args) {
    this.length = 0

    for (let i=0; i<args.length; i++) {
      this[i] = args[i]
      this.length += 1
    }
  }

  empty() {
    if (this.length === 0) {
      return true
    }
    return false
  }
}

module.exports = Stack
