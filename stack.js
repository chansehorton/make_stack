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
    } else {
      return false
    }
  }

  push(el) {
    this[this.length] = el
    this.length += 1
  }

  pop() {
    delete this[this.length-1]
    this.length -= 1
  }
}

module.exports = Stack
