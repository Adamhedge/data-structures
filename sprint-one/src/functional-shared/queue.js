var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  someInstance.storage = {'size': 0};
  someInstance.curPoint = 0;

  return _.extend( someInstance, queueMethods );
};

var queueMethods = {  // Implement the methods below
  enqueue: function(value){
    if(value === undefined) return;

    this.storage[this.storage['size']] = value;
    this.storage.size += 1;
  },
  dequeue : function(){
    if( this.size() === 0) return;

    var answer = this.storage[this.curPoint];
    delete this.storage[this.curPoint];

    this.curPoint += 1;
    return answer;
  },
  size : function(){
    return this.storage.size - this.curPoint;
  }
};


