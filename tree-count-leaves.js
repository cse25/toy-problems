// Tree Count Leaves
// Implement the countLeaves function in this Tree class.

// A leaf node is any node in the tree that has no children. countLeaves should
// traverse the tree, and return the number of leaf nodes the tree contains.

// Illustration of a tree with three leaves:

//       * <- root
//      / \
//     *    * <- leaf
//    / \
//   *   * <- leaf
//  /
// * <- leaf
// Example usage:

// var root = new Tree();

// root.countLeaves(); // 1

// root.addChild(new Tree());

// root.countLeaves(); // still 1

// root.addChild(new Tree());

// root.children[0].addChild(new Tree());

// root.children[0].addChild(new Tree());

// root.children[0].children[0].addChild(new Tree());

// root.countLeaves(); // 3

// Your Code Should Pass:

var should = chai.should();

describe('Tree', function () {
  it('should exist', function(){
    should.exist(Tree);
  });
});

describe('collect', function() {
  it('should exist on the Tree prototype', function(){
    should.exist(Tree.prototype.countLeaves);
  });

  it('should be a function', function() {
    Tree.prototype.countLeaves.should.be.a.Function;
  });

  it('should return a number', function() {
    var root = new Tree('root');
    root.countLeaves().should.be.a.Number;
  });

  it('should return 1 if the tree root has no children', function() {
    // make a one-node tree
    var root = new Tree();
    // an empty root node is technically a leaf
    root.countLeaves().should.equal(1);
  });

  it('should return 2 if the root has two children', function() {
    var root = new Tree();
    // add two children
    root.addChild(new Tree());
    root.addChild(new Tree());
    // both children are now leaves
    root.countLeaves().should.equal(2);
  });

  it('should still return 2 if one branch has one leaf', function() {
    var root = new Tree();
    // add a leaf
    root.addChild(new Tree());
    // add a branch
    var branch = new Tree();
    root.addChild(branch);
    // add a leaf to the branch
    branch.addChild(new Tree());

    // still only two leaves
    root.countLeaves().should.equal(2);
  });

  it('should return 4 if both branches have two leaves', function() {
    var root = new Tree();
    // add a branch
    var branch1 = new Tree();
    root.addChild(branch1);
    // add two leaves to the branch
    branch1.addChild(new Tree());
    branch1.addChild(new Tree());
    // add another branch
    var branch2 = new Tree();
    root.addChild(branch2);
    // add two leaves to the branch
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());

    // if you're counting, that's four leaves
    root.countLeaves().should.equal(4);
  });

  it('should count leaves on a big tree', function () {
    // keep a list of nodes by depth to compare
    var root = new Tree();
    // branches
    var branch1 = new Tree();
    var branch2 = new Tree();
    root.addChild(branch1);
    root.addChild(branch2);
    // branches
    var branch3 = new Tree();
    var branch4 = new Tree();
    branch1.addChild(branch2);
    branch1.addChild(branch3);
    // branches
    var branch5 = new Tree();
    var branch6 = new Tree();
    branch3.addChild(branch5);
    branch3.addChild(branch6);

    // leaves
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());
    branch4.addChild(new Tree());
    branch4.addChild(new Tree());
    branch5.addChild(new Tree());
    branch5.addChild(new Tree());
    branch6.addChild(new Tree());
    branch6.addChild(new Tree());

    // so that's eight leaves
    root.countLeaves().should.equal(8);
  });
});

// Solution:

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  var count = 0;
  console.log(this)
  function recurse(tree) {
  if (tree.children) {
    console.log(tree.children)
    for (var i = 0; i < tree.children.length; i++) {
      recurse(tree.children[i])
    }
  }
  if (tree.children.length === 0) {
    count++
  }
  }
  recurse(this)
  return count
}

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
