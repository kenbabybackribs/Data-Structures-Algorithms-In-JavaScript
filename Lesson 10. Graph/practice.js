// Class representing an undirected graph
class Graph {
  constructor() {
    // Initialize the adjacency list as an empty object
    this.adjacencyList = {};
  }

  // Method to add a vertex to the graph
  addVertex(vtx) {
    // TODO: Check if the vertex is not already in the adjacency list
    // TODO: Add the vertex with an empty array as its adjacency list
    // TODO: Return true to indicate the vertex was successfully added
    // TODO: Return false if the vertex already exists
  }

  // Method to add an edge between two vertices
  addEdge(vtx1, vtx2) {
    // TODO: Check if both vertices exist in the adjacency list
    // TODO: Add vtx2 to the adjacency list of vtx1
    // TODO: Add vtx1 to the adjacency list of vtx2
    // TODO: Return true to indicate the edge was successfully added
    // TODO: Return false if one or both vertices do not exist
  }

  // Method to remove an edge between two vertices
  removeEdge(vtx1, vtx2) {
    // TODO: Check if both vertices exist in the adjacency list
    // TODO: Remove vtx2 from the adjacency list of vtx1
    // TODO: Remove vtx1 from the adjacency list of vtx2
    // TODO: Return true to indicate the edge was successfully removed
    // TODO: Return false if one or both vertices do not exist
  }

  // Method to remove a vertex and its edges from the graph
  removeVertex(vtx) {
    // TODO: Check if the vertex exists in the adjacency list
    // TODO: Iterate over each neighbor of the vertex
    // TODO: Remove the vertex from the neighbor's adjacency list
    // TODO: Remove the vertex from the adjacency list
    // TODO: Return the updated graph object
  }
}

// Create a new graph instance
const graph = new Graph();
