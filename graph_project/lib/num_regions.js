function numRegions(graph) {
    //given a graph
    // return number of different components that make up a graph
    // components refer to num of sections(non-connected)
            //  let graph1 = {
            //    a: ["b"],
            //    b: ["a"],
            //    c: ["d"],
            //    d: ["e", "c"],
            //    e: ["d"],
            //  };
            //  expect(numRegions(graph1)).to.equal(2);
            //    a<->b    c<->d 
            //                 ^
            //                 |
            //                 v
            //                 e
    // we know we are done once we've iterated through entire graph
    // a region is covered when we are done with one iteration
    // hence keep a count for each iteration
    // if we have visited every neighbor in one loop then dont iterate
    let visited=new Set();
    let count = 0;
    let app = new Set();
    for (let key in graph){
        count += numRegionsRecur(key, graph, visited);
    }
    return count;
}

function numRegionsRecur(key, graph, visited) {
    if (visited.has(key))return 0;
    graph[key].forEach(neighbor=>{
        visited.add(key);
        numRegionsRecur(neighbor, graph, visited);
    })
    return 1;
}

module.exports = {
    numRegions
};