var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size:0,
    first:0,
    total:0
  };

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[storage.size.toString()] = value;
    storage.size = storage.size + 1;
    storage.total = storage.total + 1;
  };

  someInstance.dequeue = function(){
    if(storage.total != 0){
      var prop = storage[storage.first.toString()];
      delete storage[storage.first.toString()];
      storage.first = storage.first + 1;
      storage.total = storage.total - 1;
      return prop;
    }
  };

  someInstance.size = function(){
    return storage.total;
  };

  return someInstance;
};

