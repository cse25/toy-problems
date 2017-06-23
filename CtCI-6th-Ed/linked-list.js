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
  
  removeHead() {
    if (this.count > 0) {
      this.head = this.head.next
    
      this.count--
      
      if (this.count === 0) {
        this.tail = null
      }
    }
  }
  
  removeTail() {
    if (this.count > 0) {
      if (this.count === 1) {
        this.head = null
        this.tail = null
      } else {
        let currNode = this.head
        while (currNode !== this.tail) {
          currNode = currNode.next
        }
        
        currNode.next = null
        this.tail = currNode
      }
      this.count--
    }
  }
}
