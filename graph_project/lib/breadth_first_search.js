function breadthFirstSearch(startingNode, targetVal, visited=new Set()) {
    let queue = [];
    queue.push(startingNode);
    while (queue.length){
        let shifted = queue.shift();
        if (shifted.val === targetVal) return shifted;
        if (visited.has(shifted))continue;
        visited.add(shifted);
        queue.push(...shifted.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};