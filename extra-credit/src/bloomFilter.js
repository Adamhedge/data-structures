var BloomFilter = function(){
  this._limit = 18;
  this._storage = LimitedArray(this._limit);

  this._hash1 = function(str) {
    var hash = 0;

    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }

    return hash % this._limit;
  };

  this._hash2 = function(str) {
    var hash = 0;

    for (var i = 0; i < str.length; i++) {
      hash = (hash>>4) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }

    return hash % this._limit;
  };

  this._hash3 = function(str) {
    var hash = 0;

    for (var i = 0; i < str.length; i++) {
      hash = (hash<<3) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }

    return hash % this._limit;
  };
};

BloomFilter.prototype.insert = function(key){
  var array = [];
  array.push(this._hash1(key));
  array.push(this._hash2(key));
  array.push(this._hash3(key));

  for(var i = 0; i < array.length; i++){
    this._storage.set(array[i], true);
  }
};

BloomFilter.prototype.contains = function(key){
  var array = [];
  array.push(this._hash1(key));
  array.push(this._hash2(key));
  array.push(this._hash3(key));

  for(var i = 0; i < array.length; i++){
    if(this._storage.get(array[i]) === undefined){
      return false;
    }
  }

  return true;
};