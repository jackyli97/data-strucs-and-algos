// Implement the push, pop, and getMax methods

// [5,4,6]
// maxes->[5,6]

class MaxStack {
  constructor() {
    this.items = new Stack();
    this.maxes = new Stack();
  }

  push(item) {
    this.items.push(item);
    if (this.maxes.peek() === null || this.maxes.peek() <= item)this.maxes.push(item);
  }

  pop() {
    if (this.items.peek() === null) {
      return null;
    }
    if (this.items.peek() === this.maxes.peek()){
      this.maxes.pop();
    }
    return this.items.pop();
  }

  getMax() {
    return this.maxes.peek();
  }
}

class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

