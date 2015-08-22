var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.mySize = 0;
  return someInstance;
};

var stackMethods = {
    // Implement the methods below
  push: function(value){
    this[this.mySize.toString()] = value;
    this.mySize = this.mySize + 1;
  },

  pop: function(){
    if (this.mySize != 0){
      var prop = this[(this.mySize - 1).toString()];
      delete this[(this.mySize - 1).toString()];
      this.mySize = this.mySize - 1;
      return prop;
    }
  },

  size: function(){
    return this.mySize;
  }
};





