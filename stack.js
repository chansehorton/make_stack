'use strict'

class Stack {
  constructor(...args) {
    this.length = 0

    for (let i=0; i<args.length; i++) {
      this[i] = args[i]
      this.length += 1

      if(i = args.length-1) {
        this.top = args[i]
      }
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
    this.top = el
    this.length += 1

    return this.top
  }

  pop() {
    let poppedEl = this[this.length-1]

    delete this[this.length-1]
    this.length -= 1

    return poppedEl
  }

  peek() {
    return this.top
  }

  search(el) {
    for(let key in this) {
      if (this[key] === el) {
        return key
      }
    }

    return .1
  }
}

module.exports = Stack
