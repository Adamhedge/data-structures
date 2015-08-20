var Tree = function(value, parent){
  if(parent === undefined) parent = null;

  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;

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
  this.children.push(new Tree(value, this));
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

treeMethods.removeFromParent = function(){
  var treeMatches = function(tree1, tree2){
    if(tree1.value !== tree2.value){
      return false;
    }

    var tree1Children = tree1.children;
    var tree2Children = tree2.children;

    if((tree1Children === null) && (tree2Children === null)){ return true; }
    else if((tree1Children === null) || (tree2Children === null)){ return false; }
    else if(tree1Children.length !== tree2Children.length){ return false; }

    for(var i = 0; i < tree1Children.length; i++){
      if (!treeMatches(tree1Children[i], tree2Children[i])){ return false; }
    }

    return true;
  };

  var parent = this.parent;
  var siblings = parent.children;
  for(var i = 0; i < siblings.length; i++){
    if(treeMatches(this, siblings[i])){
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
  return this;
};




/*
 * Complexity: What is the time complexity of the above functions?
 Space: O(n)
 AddChild: O(1)
 Contains: O(n)
 Remove: O(n)
 */