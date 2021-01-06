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
        if (!this.front){
            this.front = node;
            this.back = node;
        }
        else{
            this.back.next = node;
            this.back = node
        }
        this.inStack.push(node);
        return this.size();
    }

    dequeue(){
       if (!this.front) {
           return null;
       } else if (this.size() === 1) {
           this.front = null;
           this.back = null;
       } else {
           this.front = this.front.next;
       }

       if (this.outStack.size() === 0) {
           while (this.inStack.size() > 0) {
               this.outStack.push(this.inStack.pop());
           }
       }
       let x = this.outStack.pop();
       return x;
    }

    size(){
        return this.outStack.size() + this.inStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
