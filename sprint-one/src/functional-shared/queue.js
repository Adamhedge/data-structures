var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    sizer:0,
    first:0,
    total:0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {  

  enqueue:function(value){
    this[this.sizer.toString()] = value;
    this.sizer = this.sizer + 1;
    this.total = this.total + 1;
  },
  dequeue: function(){
    if(this.total != 0){
      var prop = this[this.first.toString()];
      delete this[this.first.toString()];
      this.first = this.first + 1;
      this.total = this.total - 1;
      return prop;
    }
  }, 
  size: function(){
    return this.total;
  }
};


