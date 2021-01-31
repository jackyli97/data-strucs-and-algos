class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(headOfList) {
  // Reverse the linked list in place
  // if (!headOfList) return null;
  // if (headOfList.next === null) return headOfList;

  // let current = headOfList;
  // let newNext = current.next.next;
  // let temp = current.next;
  // current.next.next = current;
  // current.next = null;
  // current = temp;

  // while (newNext){
  //   temp = newNext.next;
  //   newNext.next = current;
  //   current = newNext;
  //   newNext = temp;
  // }

  // return current;

  // INTERVIEW CAKE
  let current = headOfList;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Not returning current b/c that is null
  return prev;
}

// [1, 2, 3, 4, 5, 6]
// [6,5,4,3,2,1]
// 1.next.next which is 3
// keep track of nextnext 3
// keep track of next which is 2
// set 2.next = 1
// 1.next is null

// current is 1
// store newNext = current.next.next
// current.next.next = current , 2=>1
// temp = current.next
// current.next = null
// current = temp;

// newNext=3
// current=2
// [3,2,1]

// current = 2
// newNext = 3
// temp = newNext.next = 4
// newNext.next = current => 3=>2
// current = newNext
// newNext = temp;

// current = 3
// newNext = 4
// temp = 5
// newNext.next = 3
// current = 4
// newNext = 5

// current = 4
// newNext = 5
// temp = 6
// newNext.next = 4
// current = 5
// newNext = 6

// current = 5
// newNext = 6
// temp = null
// newNext.next = 5
// current = 6
// newNext = null
