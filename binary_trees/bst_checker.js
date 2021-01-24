class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
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

function isBinarySearchTree(treeRoot) {
  // Determine if the tree is a valid binary search tree
  if (!treeRoot) return true;
  // if (treeRoot.left && treeRoot.left.value > treeRoot.value)return false
  // if (treeRoot.right && treeRoot.right.value < treeRoot.value)return false
  // return isBinarySearchTree(treeRoot.left) && isBinarySearchTree(treeRoot.right);

  // Approach
  // Create an array and create a stack, dfs, track what root is, until value is === root,
  // check that all values are less than the root
  // root-50
  // we only push in children if they satisfy the bst rules
  // until popped value===root, check that it's less than root
  // if no children dont do anything
  // popped=30
  // direction = right
  // []
  // let stack=[];
  // let root=treeRoot;
  // let dir="left";
  // if (treeRoot.right){
  //   if (treeRoot.right.value > treeRoot.value)stack.push(treeRoot.right);
  //   else return false;
  // }
  // stack.push(treeRoot);
  // if (treeRoot.left){
  //   if (treeRoot.left.value < treeRoot.value)stack.push(treeRoot.left);
  //   else return false;
  // }

  // while (stack.length){
  //   let popped = stack.pop();
  //   if (popped===treeRoot)dir="right";
  //   else if (dir==="left"){
  //     if (popped.right){
  //       if (popped.right.value > popped.value && popped.right.value < root.value)stack.push(popped.right);
  //       else return false
  //     }
  //     if (popped.left){
  //       if (popped.left.value < popped.value && popped.left.value < root.value)stack.push(popped.left);
  //       else return false;
  //     }
  //   }
  //   else if (dir==="right"){
  //     if (popped.right){
  //       if (popped.right.value > popped.value && popped.right.value > root.value)stack.push(popped.right);
  //       else return false
  //     }
  //     if (popped.left){
  //       if (popped.left.value < popped.value && popped.left.value > root.value)stack.push(popped.left);
  //       else return false;
  //     }
  //   }
  // }

  // CLEANER ALTERNATIVE
  // Idea
  // Each visited node will have a lower and upper bound
  // left side nodes should never be greater than upper
  // right side nodes should never be less than lower

  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: -Infinity,
    upperBound: Infinity,
  });

  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    if (node.value < lowerBound || node.value > upperBound) return false;

    if (node.right) {
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound,
      });
    }

    if (node.left) {
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value,
      });
    }
  }
  return true;
}

//         50
//        /
//      40
//      /
//    30
//    /
//   20
//  /
// 10
