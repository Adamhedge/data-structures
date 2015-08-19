var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {'size': 0};

  return _.extend(someInstance, stackMethods);
};

var stackMethods = {
	push : function(value){
    if(value === undefined) return;

    this.storage[this.size()] = value;
    this.storage['size'] += 1;
  },

  pop : function(){
    if(this.size() === 0) return;
    this.storage.size -= 1;

    var answer = this.storage[this.size()];
    delete this.storage[this.size()];
    return answer;
  },

  size : function(){
    return this.storage.size;
  }
};