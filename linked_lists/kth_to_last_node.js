class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k, head) {
  // Return the kth to last node in the linked list
  if (k === 0) throw Error;

  let length = 1;
  let current = head;

  while (current.next) {
    current = current.next;
    length++;
  }

  if (k > length) throw Error;

  let targetPos = length - k;
  let i = 0;
  current = head;

  for (let i = 0; i < targetPos; i++) {
    current = current.next;
  }

  return current;
}

// Might be a backtrack type of problem
