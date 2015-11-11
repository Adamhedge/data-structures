var dijkstrasShortestPath = function(graph, source, destination) {
  var distanceMatrix = [[]];
  distanceMatrix[source-1] = [];
  distanceMatrix[source-1][source-1] = 0;

  while(source !== destination) {
    var paths = graph.nodePointsToNodes(source);
    var min = [Infinity,Infinity];

    // find the min
    for(var i = 0; i < paths.length; i++) {
      edgeToNodeTuple = paths[i];
      var node = edgeToNodeTuple[0];
      var weight = edgeToNodeTuple[1];

      if(weight < min[1]) min = edgeToNodeTuple;

      if(distanceMatrix[source-1] === undefined) distanceMatrix[source-1] = [];
      if(distanceMatrix[node-1] === undefined) distanceMatrix[node-1] = [];      

      distanceMatrix[source-1][node-1] = weight;

      var pathLength = distanceMatrix[source-1][node-1] + distanceMatrix[source-1][source-1];
      if((distanceMatrix[node-1][node-1] === undefined) || (pathLength < distanceMatrix[node-1][node-1])) {
        distanceMatrix[node-1][node-1] = pathLength;
      }
    }

    source = min[0];
  }

  return distanceMatrix[destination-1][destination-1];
}