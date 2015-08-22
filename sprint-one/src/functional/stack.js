var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below
  someInstance.push = function(value){
    storage[storage.size.toString()] = value;
    storage.size = storage.size + 1;
  };

  someInstance.pop = function(){
    if (storage.size != 0){
      var prop = storage[(storage.size - 1).toString()];
      delete storage[(storage.size - 1).toString()];
      storage.size = storage.size - 1;
      return prop;
    }
  };

  someInstance.size = function(){
    return storage.size;
  };

  return someInstance;
};
