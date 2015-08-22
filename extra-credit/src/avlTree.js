var AVLTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.balanceFactor = [0,0];
}

AVLTree.prototype.updateBalanceFactors = function(pointer) {
  var leftHeight;
  var rightHeight;

  if(pointer.left !== null) {
    pointer.updateBalanceFactors(pointer.left);
    pointer.balanceFactor[0] = Math.max(pointer.left.updateBalanceFactors[0], pointer.left.updateBalanceFactors[1]) + 1;
  } else {
    pointer.balanceFactor[0] = 0;
  }

  if(pointer.right !== null) {
    pointer.updateBalanceFactors(pointer.right);
    pointer.balanceFactor[1] = Math.max(pointer.right.updateBalanceFactors[0], pointer.right.updateBalanceFactors[1]) + 1;
  } else {
    pointer.balanceFactor[1] = 0;
  }
}

AVLTree.prototype.contains = function( value ) {
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

AVLTree.prototype.leftRotation = function(pointer, parent) {
  //var tempLeft = parent;
  var tempLeft = new AVLTree(parent.value);
  tempLeft.left = parent.left;
  tempLeft.right = pointer.left;

  parent.value = pointer.value;
  parent.left = tempLeft;
  parent.right = pointer.right;

  pointer.updateBalanceFactors(pointer);
}

AVLTree.prototype.rightRotation = function(pointer, parent) {
  var tempRight = new AVLTree(parent.value);
  tempRight.right = parent.right;
  tempRight.left = pointer.right;  

  parent.value = pointer.value;
  parent.left = pointer.left;
  parent.right = tempRight;

  pointer.updateBalanceFactors(pointer);
}

AVLTree.prototype.insert = function(value) {
  var insertRecursively = function(pointer, parent) {
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

    if(pointer.left !== null) {
      pointer.balanceFactor[0] = Math.max(pointer.left.balanceFactor[0], pointer.left.balanceFactor[1]) + 1;
    }

    if(pointer.right !== null) {
      pointer.balanceFactor[1] = Math.max(pointer.right.balanceFactor[0], pointer.right.balanceFactor[1]) + 1;
    }

    var leftHeight = pointer.balanceFactor[0];
    var rightHeight = pointer.balanceFactor[1];
    var balanceFactor = leftHeight - rightHeight;

    if(balanceFactor > 1) {
      if(pointer == parent) {
        pointer = parent.left;
      }
      pointer.rightRotation(pointer, parent);
    } else if(balanceFactor < -1) {
      if(pointer == parent) {
        pointer = parent.right;
      }
      pointer.leftRotation(pointer, parent);
    }
  }

  insertRecursively(this, this);
}