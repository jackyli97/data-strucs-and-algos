// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx === array.length) return true;
    
    let left = 2 * idx;
    let right = 2 * idx + 1;
    let currVal = array[idx];
    let leftVal = array[left];
    let rightVal = array[right];

    if (!leftVal) leftVal = -Infinity;
    if (!rightVal) rightVal = -Infinity;

    if (currVal < leftVal || currVal < rightVal) return false;
    return isMaxHeap(array, idx+1); 

}

module.exports = {
    isMaxHeap
};