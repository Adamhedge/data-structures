

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.graph = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  if(this.graph[node] === undefined){
    this.graph[node] = {};
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return (this.graph[node] !== undefined);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.graph[node];
  for(var key in this.graph){
    delete this.graph.key[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return (this.graph[fromNode][toNode] !== undefined);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var connectEdges = function(graph, node1, node2){
    graph[node1][node2] = true;
  }

  connectEdges(this.graph, fromNode, toNode);
  connectEdges(this.graph, toNode, fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var disconnectEdges = function(graph, node1, node2) {
    delete graph[node1][node2];
  }

  disconnectEdges(this.graph, fromNode, toNode);
  disconnectEdges(this.graph, toNode, fromNode);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.graph) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 n = nodes, m = edges

 Space: O(n)
 AddEdge: O(1)
 Contains: O(1)
 RemoveNode: O(m)
 HasEdge: O(1)
 AddEdge: O(1)
 RemoveEdge: O(1)
 ForEachNode: O(n)
 */