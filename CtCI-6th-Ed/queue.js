class Queue {
  constructor() {
    this.inStack = []
    this.outStack = []
  }

  enqueue(value) {
    this.inStack.push(value)
  }

  dequeue() {
    if (this.inStack.length === 0 && this.outStack.length === 0) {
      return 'Queue is empty'
    }

    if (this.outStack.length === 0)
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop())
    }

    return this.outStack.pop()
  }
}

export default Queue
