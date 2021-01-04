// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    } 

    size() {
        return this.length;
    }

    push(val) {
        const node = new Node(val);

        if (!this.top){
            this.top = node;
            this.bottom = node;
        }
        else{
            const temp = this.top;
            node.next = temp;
            this.top = node;
        }
        this.length++;
        return this.size();
    }

    pop() {
        if (!this.top) return null;
        const node = this.top;
        if (this.top === this.bottom){
            this.top = null;
            this.bottom = null;
            this.length--;
            return node.value;
        }
        this.top = this.top.next;
        this.length--;
        return node.value;
    }
}

exports.Node = Node;
exports.Stack = Stack;
