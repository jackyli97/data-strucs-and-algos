class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function containsCycle(firstNode) {

  // Check if the linked list contains a cycle
  // let currNode = firstNode;
  // let visited = new Set();
  
  // while (currNode){
  //   visited.add(currNode);
  //   currNode = currNode.next;
  //   if (visited.has(currNode)) return true;
  // }
  
  // DO IN CONSTANT SPACE
  // Can we store a constant number of nodes?
  let fastRunner = firstNode;
  let slowRunner = firstNode;
  
  while (fastRunner && fastRunner.next) {
    fastRunner = fastRunner.next.next;
    slowRunner = slowRunner.next;
    
    if (fastRunner === slowRunner) return true;
  }
  
  return false;
}



// Traversing a looping list versus a linear list
  // Looping list-no end comapred to linear
  // Looping list-elements get visited multiple times

// If you are running on a long, mountainous trail, how can you tell that you are in
  // a loop?
  // You end up at the same point multiple times
  // Does not have to be landmarks, can be another runner, if you see them twice
  // Start two runners at different points, and they will eventually pass each other?

// We can use one runner as a landmark, they will be moving, but moving slowly


// [1, 2, 3, 4, 5]
//           ^^            

// [1, 2, 3, 4, 5]
//        ^     ^

// the second runner is no longer right in front of the second

// [1, 2, 3, 4, 5]
//        ^  ^   

// [1, 2, 3, 4, 5]
// ^            ^     