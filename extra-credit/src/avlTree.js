var AVLTree = function() {
  this.value = value;
  this.left = null;
  this.right = null;
  this.balanceFactor = [0,0];


}

AVLTree.prototype.leftRotation = function(pointer, parent) {
  var tempLeft = parent;
  tempLeft.right = pointer.left;

  parent.value = pointer.value;
  parent.left = tempLeft;
  parent.right = pointer.right;
}

AVLTree.prototype.rightRotation = function(pointer, parent) {
  var tempRight = parent;
  tempRight.left = pointer.right;

  parent.value = pointer.value;
  parent.left = pointer.left;
  parent.right = tempRight;
}

AVLTree.prototype.insert = function(value) {
  var insertRecursively() = function(pointer, parent) {
    if(value < pointer.value) {
      if(pointer.left === null) {
        pointer.left = new AVLTree(value);
      } else {
        insertRecursively(pointer.left, pointer);
      }
    } else if(value > pointer.value) {
      if(pointer.right === null) {
        pointer.right = new AVLTree(value);
      } else {
        insertRecursively(pointer.right, pointer);
      }
    } else {
      // handles if the values are equal
      return;
    }

    pointer.balanceFactor[0] = max(pointer.left.balanceFactor[0], pointer.left.balanceFactor[1]) + 1;
    pointer.balanceFactor[1] = max(pointer.right.balanceFactor[0], pointer.right.balanceFactor[1]) + 1;

    var leftHeight = this.balanceFactor[0];
    var rightHeight = pointer.balanceFactor[1];
    var balanceFactor = leftHeight - rightHeight;

    if(balanceFactor > 1) {
      rightRotation(pointer, parent);
    } else if(balanceFactor < -1) {
      leftRotation(pointer, parent);
    }
  }

  insertRecursively(this, this);
}