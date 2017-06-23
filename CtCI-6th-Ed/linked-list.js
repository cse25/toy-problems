class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }
  
  getLength() {
    return this.count
  }
  
  addToTail(value) {
    const node ={
      value: value,
      next: null
    }
    
    if (this.count === 0) {
      this.head = node
    } else {
      this.tail.next = node
    }
    
    this.tail = node
    this.count++
  }
}
