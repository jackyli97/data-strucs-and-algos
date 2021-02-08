/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let max = -Infinity;

  let queue = [{ node: root, idx: 1 }];
  while (queue.length) {
    if (typeof queue[queue.length - 1].idx === "bigint") {
      let length =
        BigInt(queue[queue.length - 1].idx) - BigInt(queue[0].idx) + BigInt(1);
      length = Number(length);
      max = Math.max(length, max);
    } else {
      let length = queue[queue.length - 1].idx - queue[0].idx + 1;
      max = Math.max(length, max);
    }
    let newQueue = [];

    for (let i = 0; i < queue.length; i++) {
      let currentNode = queue[i].node;
      let newNode;
      let oldIdx;

      if (currentNode.left) {
        if (typeof queue[i].idx === "bigint") {
          newNode = {
            node: currentNode.left,
            idx: BigInt(queue[i].idx) * BigInt(2),
          };
          newQueue.push(newNode);
        } else if (!isFinite(queue[i].idx * 2)) {
          newNode = {
            node: currentNode.left,
            idx: BigInt(queue[i].idx) * BigInt(2),
          };
          newQueue.push(newNode);
        } else {
          newNode = { node: currentNode.left, idx: queue[i].idx * 2 };
          newQueue.push(newNode);
        }
      }
      if (currentNode.right) {
        if (typeof queue[i].idx === "bigint") {
          newNode = {
            node: currentNode.right,
            idx: BigInt(queue[i].idx) * BigInt(2) + BigInt(1),
          };
          newQueue.push(newNode);
        } else if (!isFinite(queue[i].idx * 2 + 1)) {
          newNode = {
            node: currentNode.right,
            idx: BigInt(queue[i].idx) * BigInt(2) + BigInt(1),
          };
          newQueue.push(newNode);
        } else {
          newNode = { node: currentNode.right, idx: queue[i].idx * 2 + 1 };
          newQueue.push(newNode);
        }
      }
    }
    queue = newQueue;
  }

  return max;
};

//       1
//      / \
//     3   2
//    /     \
//   5       9
//  /         \
// 6           7

// queue: [{node: 1, i: 1}]
// length=queue[queue.length-1][i] - queue[0][i] + 1 = 1
// newQueue = [{node: 3, i:2, node:2, i:3}]

// queue: [{node: 3, i:2, node:2, i:3}]
// length=2
// newQueue = [{node: 5, i:4, node:9, i:7}]

// queue: [{node: 5, i:4, node:9, i:7}]
// length=4
// newQueue = [{node: 6, i:8, node:7, i:15}]

// queue: [{node: 6, i:8, node:7, i:15}]
// length=8
// newQueue = [{node: 6, i:8, node:7, i:15}]

// BFS:

//     1
//    / \
//   3   2
//  /
// 5

//     1
//    /
//   3
//  / \
// 5   3

// queue: [{node: 1, i: 1}]
// length=queue[queue.length-1][i] - queue[0][i] + 1 = 1
// newQueue = {node: 3, i:2}

// queue: [{node: 3, i:2}]
// length = 1
//      Iterate through queue, check if node has a left/right
// newQueue = [{node: 5, i:4}, {node:3, i:5}]

// queue: [{node: 5, i:4}, {node:3, i:5}]
// length = 2
//      Iterate through queue, check if node has a left/right
// newQueue = []
