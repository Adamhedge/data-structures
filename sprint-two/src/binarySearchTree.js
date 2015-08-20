var BinarySearchTree = function(value){
  var someInstance = Object.create(bstMethods);

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;

  return someInstance;
};

var bstMethods = {};

bstMethods.insert = function( value ) {
  var pointer = this;

  if(value < pointer.value) {
    if(pointer.left === null) {
      pointer.left = BinarySearchTree(value, null, null);
      return;
    } else {
      pointer.left.insert(value);
    }
  } else { 
    if(pointer.right === null) {
      pointer.right = BinarySearchTree(value, null, null);
      return;
    } else {
      pointer.right.insert(value);
    }
  }
};

bstMethods.contains = function( value ) {
  if(this.value === value) return true;
  else if((value < this.value)) {
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
  else {
    if(this.right === null){
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}

bstMethods.depthFirstLog = function() {
  var func = Array.prototype.slice.call(arguments)[0];

  var traverseDepthFirst = function(cb, parent) {
    cb(parent.value)
    if(parent.left !== null) traverseDepthFirst(cb, parent.left);
    else if(parent.right !== null) traverseDepthFirst(cb, parent.right);
  }

  traverseDepthFirst(func, this);
}

/*
 * Complexity: What is the time complexity of the above functions?
 Space: O(n)
 Insert: O(log n)
 Search: O(log n)
 Delete: O(log n)
 Depth First Log: O(n)
 
 */
