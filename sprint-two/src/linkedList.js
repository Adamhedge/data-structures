var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var currentTail = list.tail;
    var element = {
      value: value,
      next:  null
    };
    if(list.tail !== null){
      list.tail.next = element;  
    }
    else{
      list.head = element;
    }
    list.tail = element;
  };

  list.removeHead = function(){
    if(list.head == null){
      return null;
    }
    else{
      var returnValue = list.head.value;
      list.head = list.head.next;
      return returnValue;
    }
  };

  list.contains = function(target){
    var myElement = list.head;
    if(myElement == null){
      return false;
    }
    else while(myElement !== null){
      if(myElement.value === target){
        return true;
      }
      else myElement = myElement.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
