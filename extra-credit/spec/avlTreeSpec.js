describe('avlTree', function() {
  var avlTree;

  beforeEach(function() {
    avlTree = new AVLTree(1);
  });

  it('should have methods named "insert", "leftRotation", "rightRotation", and "contains"', function() {
    expect(avlTree.insert).to.be.a("function");
    expect(avlTree.leftRotation).to.be.a("function");
    expect(avlTree.rightRotation).to.be.a("function");
    expect(avlTree.contains).to.be.a("function");
  });

  it('should contain values entered in the AVL Tree', function() {
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(4);
    expect(avlTree.contains(4)).to.equal(true);
  });

  it('should rebalance the tree when -1 < balanceFactor > 1', function() {
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(4);
    expect(avlTree.right.right.value).to.equal(4);
    expect(avlTree.right.left).to.equal(null);
    expect(avlTree.left.value).to.equal(1);
    expect(avlTree.value).to.equal(2);
  });
});