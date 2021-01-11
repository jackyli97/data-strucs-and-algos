function maxValue(node, visited=new Set()) {
    // similar to memo problem
    // this will be recursive
    // base case is having no neighbors, return -infinity
    if (visited.has(node))return null;
    let max = node.val;
    node.neighbors.forEach(neighbor=>{
        visited.add(node);
        let comp = maxValue(neighbor, visited);
        if (comp) max = Math.max(max, comp);
    })
    return max;
}

module.exports = {
    maxValue
};