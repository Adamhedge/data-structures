var DirectedGraph = function() {
	// adjacency matrix representation for the graph
	this.graph = [[]];
};

DirectedGraph.prototype.insertEdge = function(fromNode, toNode, weight) {
	fromNode--;
	toNode--;

	if(weight === undefined) weight = 1;

	if(this.graph[fromNode] === undefined) {
		this.graph[fromNode] = [];
	}

	this.graph[fromNode][toNode] = weight;
};

DirectedGraph.prototype.removeEdge = function(fromNode, toNode) {
	fromNode--;
	toNode--;

	var oldNode = this.graph[fromNode][toNode];
	this.graph[fromNode][toNode] = undefined;

	return oldNode;
};

// need to refactor ds, if node doesnt point outwards, then contains will be O(n)
DirectedGraph.prototype.containsNode = function(node) {
	node--;

	if(this.graph[node] !== undefined) { 
		return true; 
	}

	// accounts for cyclic graphs as well
	for(var i = 0; i < node; i++) {
		if(this.graph[i][node] !== undefined) { 
			return true; 
		}
	}

	return false;
};

DirectedGraph.prototype.containsEdge = function(fromNode, toNode) {
	fromNode--;
	toNode--;

	return (this.graph[fromNode][toNode] !== undefined);
};

DirectedGraph.prototype.nodePointsToNodes = function(node) {
	node--;

	var buffer = [];

	for(var i = 0; i<this.graph[node].length; i++) {
		var weight = this.graph[node][i];
		if(weight !== undefined) { 
			buffer.push([i+1, weight]); 
		}
	}

	return buffer;
};