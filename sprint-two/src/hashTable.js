var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined) this._storage.set(i, [[k,v]]);
  else {
    var collisions = this._storage.get(i);

    collisions.forEach(function(key, index){
      if(key[0] === k){
        collisions.splice(index, 1);
      }
    });

    if(collisions === undefined) collisions = [];

    collisions.push([k,v]);
    this._storage.set(i, collisions );
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(i);
  var answer = null;

  if( collisions !== undefined && collisions !== null ) {
    collisions.forEach(function(val){
      var key = val[0];
      if(k === key) answer = val[1];
    });
  }

  return answer;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 Space: O(n)
 Insert: O(n)
 Retrieve: O(n)
 Remove: O(1)
 */