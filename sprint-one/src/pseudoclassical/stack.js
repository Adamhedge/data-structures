var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.mySize = 0;
};

Stack.prototype.push = function(value){
    this[this.mySize.toString()] = value;
    this.mySize = this.mySize + 1;
};

Stack.prototype.pop = function(){
  if (this.mySize != 0){
      var prop = this[(this.mySize - 1).toString()];
      delete this[(this.mySize - 1).toString()];
      this.mySize = this.mySize - 1;
      return prop;
    }
};

Stack.prototype.size = function(){
  return this.mySize;
};