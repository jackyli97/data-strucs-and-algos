function inOrderArray(root) {
    if (!root) return [];

    let output = [];

    output = output.concat(inOrderArray(root.left));
    output.push(root.val);
    output = output.concat(inOrderArray(root.right));

    return output;
}

function postOrderArray(root) {
    if (!root) return [];

    let output = [];

    output = output.concat(postOrderArray(root.left));
    output = output.concat(postOrderArray(root.right));
    output.push(root.val);

    return output;
}


module.exports = {
    inOrderArray,
    postOrderArray
};