var DirectedGraph = function() {
	// adjacency matrix representation for the graph
	this.graph = [[]];
}

DirectedGraph.prototype.insertEdge = function(fromNode, toNode, weight) {
	if(weight === undefined) weight = 0;

	this.graph[fromNode][toNode] = weight;
}

DirectedGraph.prototype.removeEdge = function(fromNode, toNode) {
	var oldNode = this.graph[fromNode][toNode];
	this.graph[fromNode][toNode] = undefined;

	return oldNode;
}

DirectedGraph.prototype.nodePointsToNodes = function(node) {
	var buffer = [];

	for(var i = 0; i<graph[node].length; i++) {
		var weight = graph[node][i];
		if(weight !== undefined) buffer.push([i, weight]);
	}

	return buffer;
}