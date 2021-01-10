// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


var isBalanced = function (root) {
  if (!root) return true;

  let difference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return difference && isBalanced(root.left) && isBalanced(root.right);
  //     let queue = [];
  //     queue.push(root);

  //     while(queue.length){
  //         let shifted = queue.shift();
  //         if (Math.abs(getHeight(shifted.left) - getHeight(shifted.right)) > 1)return false;
  //         if (shifted.left)queue.push(shifted.left);
  //         if (shifted.right)queue.push(shifted.right);
  //     }
  //     return true;
};

var getHeight = function (root) {
  if (!root) return -1;
  return Math.max(1 + getHeight(root.left), 1 + getHeight(root.right));
};