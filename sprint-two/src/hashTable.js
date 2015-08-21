var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._resizingFactor = 2;
  this._size = 0;


  this._insertAllToHashTable = function() {
    var oldStorage = this._storage;
    this._storage = LimitedArray(this._limit);
    var hashClass = this;

    oldStorage.each.call(hashClass ,function(elem){
      if(elem === undefined){ return; }

      for(var i = 0; i < elem.length; i++) {
        var kvPair = elem[i];
        var k = kvPair[0];
        var v = kvPair[1];

        var index = getIndexBelowMaxForKey(k, this._limit);
        this.insert.call(this, index, v);
      }
    });
  }

  this._increaseHashTable = function(n) {
    this._limit = n*this._limit;
    this._insertAllToHashTable.call(this);
  }

  this._decreaseHashTable = function(n) {
    this._limit = this._limit/n;
    this._insertAllToHashTable.call(this);
  }

  this._checkTableSize = function(op) {
    // checks to see if the amount of keys used has exceeded 75% of the amount of keys available in the hash table
    // and then checks to see if the amount of keys falls below 25% of the amount of keys available in the hash table
    if(this._size >= ((this._limit) * .75).toFixed(1) && op === 'insert') {
      this._increaseHashTable.call(this, this._resizingFactor);
    } else if(this._size < ((this._limit) * .25).toFixed(1) && op === 'remove') {
      this._decreaseHashTable.call(this, this._resizingFactor);
    }
  }
};

HashTable.prototype.insert = function(k, v){
  var insertAndHandleCollisions = function(i, v){
    // handles the case where an objects hash key hasn't beeen encountered yet
    if(this.get(i) === undefined) this.set(i, [[k,v]]);
    else {
      // handle collisions if a value hashes to the same key
      var collisions = this.get(i);

      collisions.forEach(function(key, index){
        if(key[0] === k){
          collisions.splice(index, 1);
        }
      });

      if(collisions === undefined) collisions = [];

      collisions.push([k,v]);
      this.set(i, collisions);
    }
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  insertAndHandleCollisions.call(this._storage, i, v);
  this._keysUsed++;
  this._checkTableSize.call(this, 'insert');
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
  if(this._size === 0) return;

  var index = getIndexBelowMaxForKey(k, this._limit);
  var collisions = this._storage.get(index);

  if(collisions === null) return;

  var answer = null;

  for(var i = 0; i < collisions.length; i++) {
    var kvPair = collisions[i];

    if(kvPair[0] === k) {
      answer = kvPair[1];
      collisions.splice(i,1);
      break;
    }
  }

  this._storage.set(i, collisions);

  this._keysUsed--;
  this._checkTableSize.call(this, 'remove');
  
  return answer;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Space: O(n)
 Insert: O(n)
 Retrieve: O(n)
 Remove: O(1)
 */