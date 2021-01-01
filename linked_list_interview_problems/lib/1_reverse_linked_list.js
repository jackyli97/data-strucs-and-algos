// ============================================================================
// Interview Problem: Reverse a Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given a Singly Linked List, write a function that reverses the order of the
// list's nodes.
//
// Note: You are guaranteed not to receive a linked list with cycles as input.
//
// ------------
// Constraints:
// ------------ 
//
// (1) Your function must run in linear time, O(n).
// (2) You must reverse the list *in place*. (i.e. Use constant space, O(1).)
//
// ------------
// Explanation:
// ------------
//
// Given the following linked list:
//
//   First → Second → Third → Fourth → Fifth → null
//
// Should be mutated into the following list:
//
//   Fifth → Fourth → Third → Second → First → null
//
// This must be done without instantiating a NEW instance of a LinkedList.
// You must do reverse the list in place, by mutating the original input.
//
// --------
// Example:
// --------
//
// const linkedList = new LinkedList();
// linkedList.addToTail('First');
// linkedList.addToTail('Second');
// linkedList.addToTail('Third');
// linkedList.addToTail('Fourth');
// linkedList.addToTail('Fifth');
//
// Current List:  First → Second → Third → Fourth → Fifth → null
//
// const result = reverseLinkedList(root);
//
// Mutated List:  Fifth → Fourth → Third → Second → First → null
//
// result.head.value            => 'Fifth'
// result.head.next.value       => 'Fourth'
// result.tail.value            => 'First'
// result.tail.value.next       =>  null
//
// The old head is now the terminal node!
//
// -----------
// Let's code!
// -----------

// [1->2->3->-4->5->null]
// *noticed 1 has nothing pointing to it, so that can be a coniditon for current, whatever has nothing pointing to it
// *will always need to track the current, the next, and next next
// *the next's new next will be the curr, and the def of what's what will move down one
// * we'll end when last node is pointing to prev node
// * so we'll know we are at the end when next next is null, b/c when we assign 5 to 4, 4 is curr, 5 is next node, next next is null

// [1->2->3->null] 
// [->2->1->null] 
//  curr = 1
//  next = 2
//  nextNext = 3
//  curr = 2
//  next = 3
//  nextNext = null

function reverseLinkedList(linkedList) {
  // TODO: Implement the reverseLinkedList function!
  if (linkedList.length === 0 || linkedList.length === 1) return linkedList;
  if (linkedList.length === 2){
    let temp = linkedList.head;
    linkedList.head = linkedList.tail;
    linkedList.tail = temp;
    linkedList.head.next = linkedList.tail;
    linkedList.tail.next = null;
    return linkedList;
  }

  let current = linkedList.head;
  let next = linkedList.head.next;
  let nextNext = next.next;
  current.next = null;

  let temp = linkedList.head;
  linkedList.head = linkedList.tail;
  linkedList.tail = temp;
  
  while (next){
    next.next = current;
    current = next;
    next = nextNext;
    nextNext = next ? nextNext.next : null;
  }
  return linkedList;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;
