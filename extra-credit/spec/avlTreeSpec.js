describe('avlTree', function() {
  var avlTree;

  beforeEach(function() {
    avlTree = new AVLTree(2);
  });

  it('should have methods named "insert" and "contains"', function() {
    expect(avlTree.insert).to.be.a("function");
    expect(avlTree.contains).to.be.a("function");
  });

  it('should contain values entered in the bloom filter', function() {
    expect(avlTree.contains('Brendan')).to.equal(true);
  });

  it('should not contain values not entered in the bloomm filter, with a 90% false positive rate', function() {
    expect(avlTree.contains('NoobKiller')).to.equal(false);
  });
});