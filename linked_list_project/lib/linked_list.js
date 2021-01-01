// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val, next) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;  
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        this.length++;
        return this;

    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        const returnedNode = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            let oldTail = this.head;
            let newTail = oldTail;
            while (oldTail.next){
                newTail = oldTail;
                oldTail = oldTail.next;
            }
            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return returnedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val)
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        const removedHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            const newHead = removedHead.next;
            this.head = newHead;
        }
        this.length--;
        return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) return true;
            current = current.next
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let current = this.head;
        let idx = 0;
        while (current) {
            if (idx === index) return current;
            current = current.next;
            idx += 1;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let nodeAtIndex = this.get(index);
        if (!nodeAtIndex) return false;
        nodeAtIndex.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index === 0){
            this.addToHead(val);
            return true;
        }
        let oldNodesPrev = this.get(index-1);
        if (!oldNodesPrev || !oldNodesPrev.next) return false;
        const newNode = new Node(val);
        newNode.next = oldNodesPrev.next;
        oldNodesPrev.next = newNode;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        let removedNodesPrev = this.get(index - 1);
        if (!removedNodesPrev || !removedNodesPrev.next) return undefined;
        let removedNode = removedNodesPrev.next;
        removedNodesPrev.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        // if (!this.head) return 0;
        // let currentNode = this.head;
        // let count = 1;
        // while (currentNode !== this.tail) {
        //     count += 1;
        //     currentNode = currentNode.next;
        // }
        // return count;
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
