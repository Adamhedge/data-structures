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

treeMethods.traverse = function(cb) {
  var queue = new Queue();
  var buffer = [];

  // if (this.value !== undefined){
  //   queue.enqueue(this);
  // } else {
  //   queue.enqueue();
  // }

  queue.enqueue(this);

  while(queue.size() > 0){
    var myNode = queue.dequeue();
    if(myNode.value !== undefined){
      buffer.push(cb(myNode.value));
    } else {
      buffer.push(null);
    }

    if(myNode !== null && myNode.children !== null){
      for(var i = 0; i < myNode.children.length; i++){
        queue.enqueue(myNode.children[i]);
      }
    }
  }

  return buffer;
}


/*
 * Complexity: What is the time complexity of the above functions?
 Space: O(n)
 AddChild: O(1)
 Contains: O(n)
 Remove: O(n)
 */