function treeSum(root) {
    if (!root)return 0;
    let sum = root.val;

    sum += treeSum(root.left) + treeSum(root.right);

    return sum;
    // if (!root) return 0;
    // let queue = [];
    // queue.push(root);
    // let sum = 0;
    // while (queue.length){
    //     let shifted = queue.shift();
    //     sum += shifted.val;
    //     if (shifted.left)queue.push(shifted.left);
    //     if (shifted.right)queue.push(shifted.right);
    // }
    // return sum;
}


module.exports = {
    treeSum
};