function depthFirstSearch(root, targetVal) {
    if (root.val === targetVal) return root;
    if (root.left){
        let left = depthFirstSearch(root.left, targetVal);
        if (left) return left;
    }
    if (root.right){
        let right = depthFirstSearch(root.right, targetVal);
        if (right) return right;
    }
    return null;
}


module.exports = {
    depthFirstSearch
};