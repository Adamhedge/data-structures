debugger;
describe('doublyLinkedList', function() {
  var list;

  beforeEach(function() {
    list = new DoublyLinkedList();
    list.addToHead(4);
    list.addToHead(5);
    list.addToHead(6);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(list.addToHead).to.be.a("function");
    expect(list.removeTail).to.be.a("function");
    expect(list.contains).to.be.a("function");
    expect(list.removeNthElement).to.be.a("function");
  });

  it('should designate a new head when new nodes are added to head', function() {
    expect(list.tail.value).to.equal(4);
    expect(list.tail.value).to.equal(4);
    expect(list.head.value).to.equal(6);
    expect(list.head.next.previous.value).to.equal(6);
  });

  it('should maintain the linked list when removing from tail', function() {
    expect(list.removeTail()).to.equal(4);
    expect(list.contains(4)).to.equal(false);
    expect(list.contains(5)).to.equal(true);
  });

  it('should remove the nth element from the list', function() {
    list.addToHead(7);
    list.addToHead(8);
    expect(list.removeNthElement(3)).to.equal(6);
    expect(list.contains(6)).to.equal(false);
    expect(list.contains(5)).to.equal(true);
    list.addToHead(9);
    expect(list.removeNthElement(2)).to.equal(8);
  });
});