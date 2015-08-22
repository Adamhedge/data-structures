describe('directedGraph', function() {
  var graph;

  beforeEach(function() {
    graph = new DirectedGraph();
  });

  it('should have methods named "insertEdge", "removeEdge", and "nodePointsToNodes"', function() {
    expect(graph.insertEdge).to.be.a("function");
    expect(graph.removeEdge).to.be.a("function");
    expect(graph.nodePointsToNodes).to.be.a("function");
  });

  it('should correctly store the weights for each edge', function() {
    graph.insertEdge(1,3,1);
    graph.insertEdge(5,1);
    graph.insertEdge(4,2);
    
    expect(graph.containsEdge(4,2)).to.equal(true);
    expect(graph.containsEdge(1,5)).to.equal(false);
  });

  it('should correctly return all the nodes that a node points to', function() {
    graph.insertEdge(1,2);
    graph.insertEdge(1,3);
    graph.insertEdge(1,4);
    expect(_.isEqual(graph.nodePointsToNodes(1), [[2,1],[3,1],[4,1]])).to.equal(true);
    expect(_.isEqual(graph.nodePointsToNodes(1), [1])).to.equal(false);
  });
});