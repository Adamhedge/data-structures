var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if( list.head === null ) {
      list.head = new Node(value);
      list.tail = list.head;
      return;
    }

    var pointer = list.head;

    while( pointer.next !== null ) {
      pointer = pointer.next;
    }

    list.tail = (pointer.next = new Node(value));

    // this.tail.next = new Node(value);
    // this.tail = this.tail.next;
  };

  list.removeHead = function(){
    if( list.head === null ) return;

    var head = list.head;
    list.head = list.head.next;
    return head.value;
  };

  list.contains = function(target){
    var pointer = list.head;

    while( pointer !== null ) {
      if( pointer.value == target ) return true;

      pointer = pointer.next;
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
 Space: O(n)
 AddToTail: 1st implementation- O(n), second implementation- O(1)
 RemoveHead: O(1)
 Contains: O(n)
 */