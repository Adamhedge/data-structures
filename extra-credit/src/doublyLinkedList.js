var DoublyLinkedList = function(){
    this.head = null;
    this.tail = null;
    this.size = 0;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value);
  
  if(this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    var head = this.head;
    this.head = newNode;
    this.head.next = head;
    this.head.next.previous = this.head;
  }

  this.size += 1;
}

DoublyLinkedList.prototype.removeTail = function() {
  if(this.cantRemove()){ return; }

  var oldTail = this.tail.value

  this.tail = this.tail.previous;
  this.tail.next = null;

  this.size -= 1;

  return oldTail;
}

DoublyLinkedList.prototype.contains = function(value) {
  var pointer = this.head;

  while( pointer !== null ) {
    if(value === pointer.value){ return true; }
    pointer = pointer.next;
  }

  return false;
}

DoublyLinkedList.prototype.removeNthElement = function(nth) {
  if(this.cantRemove()){ return; }
  else if(this.size < nth){ return; }

  var direction = (this.size / 2) < nth ? 'previous' : 'next';
  var pointer = direction === 'previous' ? this.tail : this.head;
  var curNth = direction === 'previous' ? this.size : 1;

  while(pointer !== null) {
    if( curNth === nth ) {
      pointer.next.previous = pointer.previous;
      pointer.previous.next = pointer.next;
      this.size -= 1;
      return pointer.value;
    }

    pointer = pointer[direction];
    curNth = (direction === 'previous') ? curNth-1 : curNth+1;
  }
}

DoublyLinkedList.prototype.cantRemove = function() {
  return (this.size === 0) ? true : false;
}

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};