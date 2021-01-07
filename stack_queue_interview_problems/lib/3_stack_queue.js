// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    pop() {
        if (!this.top) return null;

        if (this.top === this.bottom){
            this.bottom = null;
        }
        let temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    push(node) {
        if (!this.top){
            this.top = node;
            this.bottom = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this.size();
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.front = null;
        this.back = null;
        this.inStack= new Stack();
        this.outStack = new Stack();        
    }

    enqueue(val){
       let node = new Node(val);
       if (this.inStack.length === 0) {
           this.front = node;
       }
       if (this.inStack.length === 1) this.front.next = node;
       this.back = node;
       this.inStack.push(node);
       return this.size();
    }

    dequeue(){
       if (this.inStack.length === 0 && this.outStack.length === 0) return null;
       if (this.inStack.length === 1) {
           this.front = null;
           this.back = null;
           return this.inStack.pop();
       }
       if (this.outStack.length === 0) {
           while (this.inStack.length > 0) {
               let popped = this.inStack.pop();
               this.outStack.push(popped);
           }
           this.front = this.outStack.top;
           this.back = this.outStack.bottom;
       }
       if (this.outStack.length > 1) this.front = this.front.next;
       return this.outStack.pop();
    }

    size(){
        return this.outStack.size() + this.inStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
