describe('avlTree', function() {
  var avlTree;

  beforeEach(function() {
    avlTree = new AVLTree();
  });

  it('should have methods named "insert" and "contains"', function() {
    expect(bloomFilter.insert).to.be.a("function");
    expect(bloomFilter.contains).to.be.a("function");
  });

  it('should contain values entered in the bloom filter', function() {
    expect(bloomFilter.contains('Brendan')).to.equal(true);
  });

  it('should not contain values not entered in the bloomm filter, with a 90% false positive rate', function() {
    expect(bloomFilter.contains('NoobKiller')).to.equal(false);
  });
});