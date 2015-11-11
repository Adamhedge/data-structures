var BinarySearchTree = function(value){
  var someInstance = Object.create(bstMethods);

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;

  return someInstance;
};

var bstMethods = {};

bstMethods.rebalanceTree = function() {
  var buffer = [];
  var newTree;

  var inOrderTraversal = function(node) {
    if(node.left !== null) { 
      inOrderTraversal(node.left); 
    }

    buffer.push(node.value);

    if(node.right !== null) { 
      inOrderTraversal(node.right); 
    }
  }

  var binaryBalance = function(array) {
    if(array.length === 0) {
      return;
    }

    var middle = parseInt(array.length/2);

    if(newTree === undefined) {
      newTree = BinarySearchTree(array[middle]);
    } else {
      newTree.insert(array[middle]);
    }

    var leftArray = array.slice(0, middle);
    var rightArray = array.slice(middle+1);

    binaryBalance(leftArray);
    binaryBalance(rightArray);
  }

  inOrderTraversal(this);
  binaryBalance(buffer);

  this.value = newTree.value;
  this.left = newTree.left;
  this.right = newTree.right;
}

bstMethods.insert = function( value ) {
  if(value === undefined) return;
  
  var insertRecursively = function(pointer) {
    if(value < pointer.value) {
      if(pointer.left === null) {
        pointer.left = BinarySearchTree(value, null, null);
        return;
      } else {
        insertRecursively(pointer.left);
      }
    } else { 
      if(pointer.right === null) {
        pointer.right = BinarySearchTree(value, null, null);
        return;
      } else {
        insertRecursively(pointer.right);
      }
    }
  }

  var minDepth = Infinity;
  var maxDepth = -1;

  var findDepths = function(root, curDepth) {
    if(root.left === null && root.right === null){
      if(curDepth < minDepth) minDepth = curDepth;
      if(curDepth > maxDepth) {
        maxDepth = curDepth;
      }
    } else {
      curDepth++;

      if(root.right !== null){ findDepths(root.right, curDepth); }
      if(root.left !== null){ findDepths(root.left, curDepth); }
    }
  }

  insertRecursively(this);
  findDepths(this, 1);
  
  if(maxDepth > 2*minDepth){ this.rebalanceTree(); }
}

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