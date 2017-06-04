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

const node = new Node(8)
const node3 = new Node(3)
const node1 = new Node(1)
const node10 = new Node(10)
const node6 = new Node(6)
const binaryTree1 = new BinaryTree(node)
binaryTree1.insert(node3)
binaryTree1.insert(node1)
binaryTree1.insert(node10)
binaryTree1.insert(node6)
binaryTree1.showTree()
