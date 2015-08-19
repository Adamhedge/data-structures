var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === null){
    this.children = [];
  }
  this.children.push(new  Tree(value));

};

treeMethods.contains = function(target){
  if( this.value === target ) return true;
  else {
    var children = this.children;

    if(children === null) return false;

    var found = false;
    children.forEach(function(tree){
      if( tree.contains(target) ) found = true;
    });

    return found;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
