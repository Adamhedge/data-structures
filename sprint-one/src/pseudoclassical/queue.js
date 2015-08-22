var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.sizer = 0;
  this.total = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.sizer.toString()] = value;
  this.total = this.total + 1;
  this.sizer = this.sizer + 1;
};

Queue.prototype.dequeue = function(){
  if(this.total != 0){
    var dequeued = this[this.first.toString()];
    this.first = this.first + 1;
    this.total = this.total - 1;
    return dequeued;
  }
};

Queue.prototype.size = function(){
  return this.total;
};



