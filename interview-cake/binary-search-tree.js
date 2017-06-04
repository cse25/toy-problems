class BinaryTree {
  constructor(root) {
    this.root = root
  }
  
  insert(nodeToInsert) {
    const recurse = (node) => {
      if (nodeToInsert.val < node.val && !node.L) {
        node.L = nodeToInsert
      } else if (nodeToInsert.val < node.val) {
        recurse(node.L)
      } else if (nodeToInsert.val > node.val && !node.R) {
        node.R = nodeToInsert
      } else if (nodeToInsert.val > node.val) {
        recurse(node.R)
      }
    }
    
    recurse(this.root)
  }
  
  contains(val) {
    let doesContain = false
    
    const recurse = (node) => {
      if (val === node.val) {
        doesContain = true
      } else if (node.L !== null && val < node.val) {
        recurse(node.L)
      } else if (node.R !== null && val > node.val) {
        recurse(node.R)
      }
    }
    
    recurse(this.root)
    return doesContain
  }
  
  findLargest() {
    let largest
    const recurse = (node) => {
      if (node.R !== null) {
        recurse(node.R)
      } else if (node.R === null) {
        largest = node
      }
    }
    
    recurse(this.root)
    return largest
  }
  
  findSecondLargest() {
    let secondLargest
    const recurse = (node) => {
      if (node.R !== null) {
        recurse(node.R)
      } else if (node.L === null && node.R === null) {
        secondLargest = node
      } else if (node.L !== null && node.L.R !== null) {
        secondLargest = node.L.R
      } else {
        secondLargest = node.L
      }
    }
    
    recurse(this.root)
    return secondLargest
  }
  
  showTree() {
    return this.root
  }
}

class Node {
  constructor(val, L, R) {
    this.val = val
    this.L = null
    this.R = null
  }
}

const node5 = new Node(5)
const node8 = new Node(8)
const node15 = new Node(15)
const node10 = new Node(10)
const node14 = new Node(14)
const binaryTree2 = new BinaryTree(node5)
binaryTree2.insert(node8)
binaryTree2.insert(node15)
binaryTree2.insert(node10)
binaryTree2.insert(node14)
binaryTree2.showTree()
binaryTree2.findLargest()
binaryTree2.findSecondLargest()
