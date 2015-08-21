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
debugger;
bstMethods.depthFirstLog = function() {
  var func = Array.prototype.slice.call(arguments)[0];

  var traverseDepthFirst = function(cb, parent) {
    cb(parent.value)
    if(parent.left !== null) traverseDepthFirst(cb, parent.left);
    if(parent.right !== null) traverseDepthFirst(cb, parent.right);
  }

  traverseDepthFirst(func, this);
}

bstMethods.breadthFirstLog = function(cb) {
  var queue = new Queue();
  queue.enqueue(this);
  var buffer = []

  while(queue.size() > 0){
    var myNode = queue.dequeue();
    if(myNode.value !== undefined) { buffer.push(cb(myNode.value)); }
    else { buffer.push(null); }

    if(myNode.left !== null){ queue.enqueue(myNode.left); }
    if(myNode.right !== null){ queue.enqueue(myNode.right) };
  }

  return buffer;
}

/*
 * Complexity: What is the time complexity of the above functions?
 Space: O(n)
 Insert: O(log n) if balanced, Worst Case: O(n)
 Search: O(log n) if balanced, Worst Case: O(n)
 Delete: O(log n) if balanced, Worst Case: O(n)
 Depth First Log: O(n)
 */