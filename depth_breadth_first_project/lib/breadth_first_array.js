function breadthFirstArray(root) {
    let queue = [];
    queue.push(root);
    let i = 0;

    while (queue[i]){
        if (queue[i].left)queue.push(queue[i].left);
        if (queue[i].right)queue.push(queue[i].right);
        i += 1; 
    } 

    return queue.map(node=>node.val);
}

module.exports = {
    breadthFirstArray
};