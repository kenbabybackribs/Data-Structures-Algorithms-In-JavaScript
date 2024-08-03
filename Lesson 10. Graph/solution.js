// Class representing an undirected graph
class Graph {
    constructor() {
      // Initialize the adjacency list as an empty object
      this.adjacencyList = {};
    }
  
    // Method to add a vertex to the graph
    addVertex(vtx) {
      // Check if the vertex is not already in the adjacency list
      if (!this.adjacencyList[vtx]) {
        // Add the vertex with an empty array as its adjacency list
        this.adjacencyList[vtx] = [];
        // Return true to indicate the vertex was successfully added
        return true;
      }
      // Return false if the vertex already exists
      return false;
    }
  
    // Method to add an edge between two vertices
    addEdge(vtx1, vtx2) {
      // Check if both vertices exist in the adjacency list
      if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
        // Add vtx2 to the adjacency list of vtx1
        this.adjacencyList[vtx1].push(vtx2);
        // Add vtx1 to the adjacency list of vtx2
        this.adjacencyList[vtx2].push(vtx1);
        // Return true to indicate the edge was successfully added
        return true;
      }
      // Return false if one or both vertices do not exist
      return false;
    }
  
    // Method to remove an edge between two vertices
    removeEdge(vtx1, vtx2) {
      // Check if both vertices exist in the adjacency list
      if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
        // Remove vtx2 from the adjacency list of vtx1
        this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
          (v) => v !== vtx2
        );
        // Remove vtx1 from the adjacency list of vtx2
        this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
          (v) => v !== vtx1
        );
        // Return true to indicate the edge was successfully removed
        return true;
      }
      // Return false if one or both vertices do not exist
      return false;
    }
  
    // Method to remove a vertex and its edges from the graph
    removeVertex(vtx) {
      // Check if the vertex exists in the adjacency list
      if (!this.adjacencyList[vtx]) return null;
    
      // Iterate over each neighbor of the vertex
      for (let neighbor of this.adjacencyList[vtx]) {
        // Remove the vertex from the neighbor's adjacency list
        this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
          (v) => v !== vtx
        );
      }
    
      // Remove the vertex from the adjacency list
      delete this.adjacencyList[vtx];
    
      // Return the updated graph object
      return this;
    }
  }
  
  // Create a new graph instance
  const graph = new Graph();
  
  // Add vertices A, B, and C to the graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  
  // Add edges between A-B, B-C, and C-A
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "A");
  
  // Remove the edge between A and B
  graph.removeEdge("A", "B");
  
  // Remove vertex (the argument should be provided; assuming missing argument is an error)
  graph.removeVertex();
  
  // Output the graph's adjacency list to the console
  console.log(graph);
  