var dijkstrasShortestPath = function(graph, source, destination) {
  var distanceMatrix = [[]];

  while(source !== destination) {
    var paths = graph.nodePointsToNodes(source);
    var min = [0,0];

    // find the min
    for(var i = 0, i < paths.length; i++) {
      edgeToNodeTuple = paths[i];
      var node = edgeToNodeTuple[0];
      var weight = edgeToNodeTuple[1];

      if(weight < min[1]) min = edgeToNodeTuple;

      distanceMatrix[source][node] = weight;
      
      var pathLength = distanceMatrix[source][node] + distanceMatrix[source][source];
      if(pathLength < distanceMatrix[node][node]) {
        distanceMatrix[node][node] = pathLength;
      }
    }

    source = min[0];
  }

  return distanceMatrix[destination][destination];
}