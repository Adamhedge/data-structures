var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {'size': 0};
  this.curPoint = 0;
};

Queue.prototype.enqueue = function(value){
  if(value === undefined) return;

  this.storage[this.storage['size']] = value;
  this.storage.size += 1;
}

Queue.prototype.dequeue = function(){
  if( this.size() === 0) return;

  var answer = this.storage[this.curPoint];
  delete this.storage[this.curPoint];

  this.curPoint += 1;
  return answer;
}

Queue.prototype.size = function(){
  return this.storage.size - this.curPoint;
}