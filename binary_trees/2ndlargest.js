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

function findSecondLargest(treeRoot) {
  // Find the second largest item in the binary search tree

  // Not the best solution b/c we are looking at every node which takes o(n) time
  // and o(h) soace where h is the max height of the tree(logn if balanced)
  // let bstArray = createBSTArray(treeRoot);
  // // console.log(bstArray);

  // return bstArray[bstArray.length-2].value;

  // Let's do better
  // We can cut the problem in half, knowing that the 2nd largest value
  // has to lie in the right side, or be the root

  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) throw Error;

  // if (!treeRoot.right) return treeRoot.left.value;

  // let parent = null;
  // let largest = treeRoot;

  // while (largest.right) {
  //   parent = largest;
  //   largest = largest.right;
  // }

  // if (!largest.left) return parent.value;

  // let second = largest.left;

  // while (second.right){
  //   second = second.right;
  // }

  // return second.value;
  let current = treeRoot;
  while (current) {
    // If at a point where there is only a left child, that node is largest,
    // find largest from left subtree
    if (current.left && !current.right) {
      return getLargest(current.left);
    }

    // Return the parent if the largest has no children
    if (current.right && !current.right.right && !current.right.left)
      return current.value;
    current = current.right;
  }
}

function getLargest(treeRoot) {
  let current = treeRoot;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function createBSTArray(treeRoot) {
  let arr = [];
  if (!treeRoot) return arr;

  arr = arr.concat(createBSTArray(treeRoot.left));
  arr.push(treeRoot);
  arr = arr.concat(createBSTArray(treeRoot.right));

  return arr;
}
