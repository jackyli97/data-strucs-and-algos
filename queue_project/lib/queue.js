// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    enqueue(val){
        const node  = new Node(val);
        if (!this.front){
            this.front = node;
            this.back = node;
        }else{
            const oldBack = this.back;
            oldBack.next = node;
            this.back = node;
        }
        this.length++;
        return this.size();
    }

    dequeue(){
        if (!this.front)return null;
        const node = this.front;

        if (this.front === this.back) this.back = null;
        const newFront = this.front.next;
        this.front = newFront;

        this.length--;
        return node.value;
    }
}

exports.Node = Node;
exports.Queue = Queue;