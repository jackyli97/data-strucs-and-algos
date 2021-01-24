class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}


    //          1
    //        /    \
    //       5      9
    //    /   \       \
    //    6    2         5
    //  /                 \
    // 3                    7
    
    // at 1
      // left = 1 + 1.left =3
        // count = 1+5.left + 1 = 2
          // count = 1+6.left = 1
            // count = 1
            
    
    // To get the height of a tree, give helper function the left and right nodes
      // start count as one, call left or right and keep adding one to it, 
        // such as if root was 9, 1 + function(9.right), if the value is null,
          // return -1`
    
// Get the heights at all levels, store a min and a max and see if difference is
  // ever greater than 1
  
// We know that if there are 3 different heights, it is not superbalanced

    //          1
    //        /    \
    //       5      9
    //    /   \       \
    //    6    2         5
    //  /                 \
    // 3                    7
    
    // depths = [3,2]
    // difference = 1 <= 1 = true
    
    // [[9,1], [5,1]]
    // [[9,1], [2,2], [6,2]]
    // [[9,1], [2,2], [3,3]]
    // [[9,1], [2,2]]
    // [[9,1], [2,2]]
    // [[5,2]]
    // [[7,3]]
    // [[]]
function isBalanced(treeRoot) {
  // Determine if the tree is superbalanced
  
  // This is not iterative, it is recursive, O(n*m) space, o(n)time
  // if (!treeRoot) return true;
  // let mainRes;
  // if (!treeRoot.left || !treeRoot.right) mainRes = true;
  // else mainRes = Math.abs(getMaxDepth(treeRoot)-getMinDepth(treeRoot)) <= 1;
  // return mainRes && isBalanced(treeRoot.left) && isBalanced(treeRoot.right);
  
  // Iterative
  if (!treeRoot) return true;
  let depths = [];
  let nodes = [];
  nodes.push([treeRoot, 0]);
  
  while (nodes.length) {
    let nodePair = nodes.pop();
    let node = nodePair[0];
    let depth = nodePair[1];
    
    // only add to depths if it is a leaf
    if (!node.left && !node.right){
      if (depths.indexOf(depth) < 0)depths.push(depth);
      if (depths.length > 2) return false;
      if (depths.length === 2 && Math.abs(depths[0]-depths[1]) > 1)return false;
    }
    else{
      if (node.right){
        nodes.push([node.right, depth+1])
      }      
      if (node.left){
        nodes.push([node.left, depth+1])
      }
      
    }
  }
  return true;
}

// function getMaxDepth(treeRoot) {
//   if (!treeRoot) return -1;
//   return Math.max(1+getMaxDepth(treeRoot.left), 1+getMaxDepth(treeRoot.right));
// }


// function getMinDepth(treeRoot) {
//   if (!treeRoot) return -1;
//   return Math.min(1+getMinDepth(treeRoot.left), 1+getMinDepth(treeRoot.right));
// }