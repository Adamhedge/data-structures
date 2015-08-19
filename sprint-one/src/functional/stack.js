var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {'size':0};

  // Implement the methods below
  someInstance.push = function(value){
    if(value === undefined) return;

    storage[storage.size] = value;
    storage['size'] += 1;
  };

  someInstance.pop = function(){
    if(storage['size'] === 0) return;
    storage.size -= 1;
    
    var answer = storage[storage.size];
    delete storage[storage.size];
    return answer;
  };

  someInstance.size = function(){
    return storage.size;
  };

  return someInstance;
};
