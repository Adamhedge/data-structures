describe('dijkstrasShortestPath', function() {
  var graph;

  beforeEach(function() {
    graph = new DirectedGraph();
  });


  it('should use dijkstras algorithm to find the shortest path between two points', function() {
    graph.insertEdge(1,2,2);
    graph.insertEdge(1,3,4);
    graph.insertEdge(2,3,3);
    graph.insertEdge(2,4,10);
    graph.insertEdge(3,4,1);
    var shortestPath = dijkstrasShortestPath(graph, 1, 4);
    expect(shortestPath).to.equal(5);
  });

});