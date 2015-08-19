var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {'size': 0};
  var valsAdded = 0;
  var curPoint = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    if(value === undefined) return;

    storage[storage['size']] = value;
    storage.size += 1;
    valsAdded += 1;
  };

  someInstance.dequeue = function(){
    if( valsAdded === 0 ) return;

    var answer = storage[curPoint];
    delete storage[curPoint];

    curPoint += 1;
    valsAdded -= 1;
    return answer;
  };

  someInstance.size = function(){
    return valsAdded;
  };

  return someInstance;
};
