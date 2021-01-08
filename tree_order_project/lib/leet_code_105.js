// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

// preorder = [3,9,5,4,6,20,15,7]
// inorder = [4,5,9,6,3,15,20,7]

       //          3
       //        /  \
       //      9    20, 15,7
       //     / \
       //    5   6
       //  /
       // 4
// we know that root is 3.left is 9
// until we hit 3 in inorder, we are in the left of root

// base case is 

// working with a subtree
    // for inorder, use all eles before 3 -> [4,5,9,6]
    // for preorder, locate those numbers -> [9,4,5,6]
    // we return that left is 9
    // for right, locate all vals after 3 in the in order -> [15,20,7]
        // for preorder -> [20,15,7]

//*right we know that root is 20->.left is 15
    // for inorder, all eles before 20 
    // for rigght, in order = 7

// we know that root is 9 -> 9.left = 5, 9 .right = 6
// subtree
    // for inorder, use all eles before 9 -> [4,5]
    // for preorder, locate -> [5,4]
    // for left side we returned 5
    // for right, use all eles after 9 -> [6]
        // we return that the right is 6
    // return 9

//we know that root is 5 -> 5.left = 4
    // for in order, use all eles before 5 -> [4]
        // since it is one ele we return it and identify as the left of 5
    // now for the right, use all eles after 5 -> []
        // return null
    // we can now return 5

function buildTree(preorder, inorder) {
    if (inorder.length === 0) return null;

    let root = new TreeNode(preorder[0]);

    let rootIdx = inorder.indexOf(root.val);
    let leftInorder = inorder.slice(0, rootIdx);
    let rightInorder = inorder.slice(rootIdx + 1);

    let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
    let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}
