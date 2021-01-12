class MaxHeap {
    constructor(){
        this.array = [null]
    }

    insert(val) {
        this.array.push(val);
        let parent = this.getParent(this.array.length - 1)
        if (parent < val) this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx <= 1) return;
        let parentIdx = this.getParent(idx);
        if (this.array[parentIdx] > this.array[idx]) return;

        [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
        return this.siftUp(parentIdx);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();

        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        if (idx >= this.array.length) return;
        let val = this.array[idx];
        let leftChildIdx = this.getLeftChild(idx);
        let rightChildIdx = this.getRightChild(idx);
        let leftChild = this.array[leftChildIdx];
        let rightChild = this.array[rightChildIdx];

        if (!leftChild) leftChild = -Infinity;
        if (!rightChild) rightChild = -Infinity;

        if (val > leftChild && val > rightChild) return;

        else if (leftChild > rightChild){
            [this.array[leftChildIdx], this.array[idx]] = [this.array[idx], this.array[leftChildIdx]];
            return this.siftDown(leftChildIdx);
        }

        else if (rightChild > leftChild){
            [this.array[rightChildIdx], this.array[idx]] = [this.array[idx], this.array[rightChildIdx]];
            return this.siftDown(rightChildIdx);
        }
    }

    getLeftChild(idx){
        return idx * 2;
    }

    getRightChild(idx){
        return idx * 2 + 1;
    }

    getParent(idx){
        return Math.floor(idx/2);
    }


}

module.exports = {
    MaxHeap
};