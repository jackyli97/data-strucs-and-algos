class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {
  // Create a valid coloring for the graph
  // let max = -Infinity;
  // let maxIdx;

  // for (let i=0; i<graph.length; i++) {
  //   let node = graph[i];
  //   if (node.neighbors.has(node))throw Error;
  //   if (node.neighbors.size > max){
  //     max = node.neighbors.size;
  //     maxIdx = i;
  //   }
  // }
  // // o(n) opp
  // // o(1) space

  // // We need max+1 colors
  // let colorsUsing = colors.slice(colors.length)-(max+1);

  // // addColors(graph[maxIdx], colorsUsing);

  // node.neighbors.forEach(neighbor=>{
  //   if (neighbor.color){
  //     illegalColors.add(neighbor.color);
  //   }
  // })

  graph.forEach((node) => {
    if (node.neighbors.has(node)) {
      throw new Error(
        `Legal coloring impossible for node with loop: ${node.label}`
      );
    }

    // Get the node's neighbors' colors, as a set so we
    // can check if a color is illegal in constant time
    const illegalColors = new Set();

    node.neighbors.forEach((neighbor) => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    // Assign the first legal color
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];

      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  });
}

// function addColors(node, colors, legalColors=new Set(), illegalColors=new Set()) {

//   node.neighbors.forEach(neighbor=>{
//     if (neighbor.color){
//       illegalColors.add(neighbor.color);
//     }
//   })
// }

// Given D, which represents max num of edges
// We can first try to find the max number of edges
// graph is an array
// Number of edges is number of neighbors
// We iterate through the grpah array and find max num of neighbors

// Interview Cake solution
// Iterate through the nodes and then through each of their neighbors
// Add any colors to list of illegal colors
// Iterate through colors and add any colors not marked illegal
// Add any of the colors in legal to the current node
// Iterating through the num of nodes is N
// multiplyed by d(edges) and d+1(colors)

// Fix time comp
// Can we say anything about the total number of neighors we'll have acrross the entire graph?
// Each edge creates two neighbors
// Code looks at every neighbors for every node
// Collecting all the colors over the entire loop takes O(M) time, with O(M)neighbors,
// M being all the edges

// [r,g,b]
// illegal =>
// legal =>

// [a]-[b]
//     |
//     [c]-[d]

// start at b, go to a

// allowed 3 colors max
// There will always be more colors than neighbors
// So we can iterate through each neighbor, and color as well
// But this will give us a (o(n^2))

// Have our array of nodes, iterate through that,
// We start at the node with the most num of edges
// Have our d+1 colors array
// assign that node 1 of the colors,
// recursively call each neighbor, passing in the colors array
// with the color jsut used sliced off
// If a node has 3 neighbor, means has 4 colors, use 1, pass 3
// used 1. onto the next neighbor
// that neighbor has 3 colors, use 1, pass 2,
// has max 3 neighbors, if neighbor alreaady has color, then pass
