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
  var newChild = Tree(value);
  if (this.children == null){
    this.children = [];
    this.children.push(newChild);
  }
  else this.children.push(newChild);
};

treeMethods.contains = function(target){
  if (this.value === target){
    return true;
  }
  else if(this.children !== null){
    var test = false;
    for(var i =0; i < this.children.length; i ++){
      if(this.children[i].contains(target) == true){
        test = true;
      }
    }
    return test; 
  } else return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
