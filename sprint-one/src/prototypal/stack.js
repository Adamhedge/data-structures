var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {'size': 0};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  if(value === undefined) return;

  this.storage[this.size()] = value;
  this.storage['size'] += 1;
},

stackMethods.pop = function(){
  if(this.size() === 0) return;
  this.storage.size -= 1;

  var answer = this.storage[this.size()];
  delete this.storage[this.size()];
  return answer;
},

stackMethods.size = function(){
  return this.storage.size;
}