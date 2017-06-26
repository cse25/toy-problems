class Stack {
  constructor() {
    this.storage = []
  }

  add(item) {
    this.storage.push(item)
  }

  remove() {
    this.storage.pop()
  }

  getLength() {
    return this.storage.length
  }
}

export default Stack
