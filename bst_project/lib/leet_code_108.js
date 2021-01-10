// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1, nums.length);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);

    return root;
}