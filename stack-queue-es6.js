// Stack - First In Last Out

class Stack {
  constructor(storage) {
    this.storage = []
  }
  
  add(item) {
    this.storage.push(item);
  }
  
  remove() {
    return this.storage.pop();
  }
  
  size() {
    return this.storage.length;
  }
}

const stack1 = new Stack();

// Queue - First In First Out

class Queue {
  constructor(storage) {
    this.storage = [];
  }
  
  add(item) {
    this.storage.push(item);
  }
  
  remove(item) {
    return this.storage.splice(0,1);
  }
  
  size() {
    return this.storage.length;
  }
}