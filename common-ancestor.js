// Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

// // Valid Child
// var grandma = new Tree();
// var mom = new Tree();
// var uncle = new Tree();
// grandma.addChild(mom);
// grandma.addChild(uncle);
// var me = new Tree();
// mom.addChild(me);

// grandma.getAncestorPath(me); // => [grandma, mom, me]
// mom.getAncestorPath(me)  // => [mom, me]
// me.getAncestorPath(me) // => [me]
// grandma.getClosestCommonAncestor(me, uncle); // => grandma

// // Invalid Child
// grandma.getAncestorPath(H R Giger) // => null

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(p1,p2){
  // TODO: implement me!
  var p1arr = this.getAncestorPath(p1);
  var p2arr = this.getAncestorPath(p2);
  if (p1 === this || p2 === this) {
    return this;
  }
  if (!p1arr|| !p2arr) {
    return null;
  }
  var closestAncestor = null;
  var smallestArray = Math.min(p1arr.length, p2arr.length);
  for (var i = 0; i < smallestArray; i++) {
    if (p1arr[i] === p2arr[i]) {
      closestAncestor = p1arr[i];
    }
  }
  return closestAncestor;
}

Tree.prototype.getAncestorPath = function(person){
  // TODO: implement me!
  var results = [];
  var recurse = function(possibleAncestor) {
    if (possibleAncestor.isDescendant(person)) {
      results.push(possibleAncestor);
      for (var i = 0; i < possibleAncestor.children.length; i++) {
        recurse(possibleAncestor.children[i]);
      }
    }
  }
  recurse(this);
  if (results.length === 0) {
    return null;
  }
  results.push(person);
  return results;
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

var node1 = new Tree();
var node2 = new Tree();
var node3 = new Tree();
var node4 = new Tree();
var node5 = new Tree();
var node7 = new Tree();
node1.addChild(node2);
node1.addChild(node3);
node2.addChild(node7);
node4.addChild(node5);

//node1.getAncestorPath(node7);
node1.getClosestCommonAncestor(node3, node7);
