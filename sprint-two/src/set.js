var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if( this._storage === undefined ) {
    this._storage = {};
  }

  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return (this._storage[item] !== undefined);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 Add: O(1)
 Contains: O(1)
 Remove: O(1)
 */