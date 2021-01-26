// A simple, somewhat inefficient queue implementation
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

function getPath(graph, startNode, endNode) {
  // Find the shortest route in the network between the two users
  if (!(startNode in graph) || !(endNode in graph)) throw Error;
  if (startNode === endNode) return [startNode];

  // let queue = [];
  // let removed = [];
  // queue.push(startNode);
  // let curr;
  // let found;

  // while (queue.length) {
  //   curr = queue.shift();
  //   removed.push(curr);
  //   found = false;
  //   if (graph[curr]){
  //     graph[curr].forEach(neighbor=>{
  //       if (neighbor === endNode)found = true;
  //       else if (!queue.includes(neighbor) && !removed.includes(neighbor))queue.push(neighbor)
  //     })
  //   }
  //   if (found)break;
  // }
  // if (!found) return null

  // let path = [];
  // path.push(endNode);

  // while(removed.length){
  //   let curr = removed.pop();
  //   if (graph[curr].includes(path[0])){
  //     path.unshift(curr);
  //     if (curr === startNode) return path;
  //   }
  // }

  // Try to refactor, using an object to track the path for backtracking
  // Once found, we send to helper function
  // we start at end node
  //

  let nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);
  let paths = {};
  paths[startNode] = null;
  let found = false;

  while (nodesToVisit.size) {
    let curr = nodesToVisit.dequeue();
    graph[curr].forEach((neighbor) => {
      if (!(neighbor in paths)) {
        paths[neighbor] = curr;
        if (neighbor === endNode) found = true;
        nodesToVisit.enqueue(neighbor);
      }
    });
    if (found) return backtrack(paths, startNode, endNode);
  }
  return null;
}

function backtrack(paths, startNode, endNode) {
  let reversedPath = [];
  let curr = endNode;

  while (curr) {
    reversedPath.push(curr);
    curr = paths[curr];
  }

  return reversedPath.reverse();
}

//   const network = {
//   'Min'     : ['William', 'Jayden', 'Omar'],
//   'William' : ['Min', 'Noam'],
//   'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
//   'Ren'     : ['Jayden', 'Omar'],
//   'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
//   'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//   'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
//   'Noam'    : ['Nathan', 'Jayden', 'William'],
//   'Omar'    : ['Ren', 'Min', 'Scott'],
//   ...
// };

// Worse Case
// Linear pattern, where only one person is nearby each user
// In that case we travel the length of network - 1
//

// BFS
// curr = amelia
// queue = [amelia,ren, noam, william, omar,adam]
// reversedPath = {jayden: null, min: jayden, amelia:jayden
//                ,ren: jayden, noam:jayden, william: min,
//                omar: min, adam:amelia}
// Add jayden to queue
// add null as its value b/c no path needed to get there
// Pop out jayden
// For each neighbor of popped
// check if it's alreaady in the object
// Add it with value being the popped, and whatever the popped's value is as well

// Path=[jayden, amelia, adam]
// you have adam
// pop out amelia, and check if she has adam, if so add to path
// you have amelia
// pop out min, and see if he has amelia
// pop out jayden and see that its starting node, so add and return

// Jayden
//        /     /   |       \
//      noam  min  amelia   ren
//                / |  \
//          jayden adma miguel

// Time complexity
// linear worse case iterating through every user
// inner loops(includes)-check every user twice
// checking every connection(2M)
// Last step we check the connections(2M)
// Also worse case check every connection
// Overall
// O(3N + 2M+2M+N) = O(4N+4M) = O(N+M)

// Space complexity
// linear space as well, worse case stores all the nodes
