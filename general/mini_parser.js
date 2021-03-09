/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  let val = eval(s);
  if (typeof val === 'number') {
    return new NestedInteger(val);
  } else {
    let v = new NestedInteger();
    for (let vv of val) {
      v.add(deserialize(vv));
    }
    return v;
  }
  //     let stack = [];
  //     let intStack = [];
  //     let res = null;
  //     const digits = ['0','1','2','3','4','5','6','7','8','9'];

  //     for (let i=0; i<s.length;i++) {
  //         let char = s[i];
  //         // let top = arrStack[arrStack.length-1];

  //         if (digits.includes(char)){
  //             intStack.push(char);
  //             continue;
  //         }

  //         if (char === '[') {
  //             if (!Array.isArray(res)){
  //                 res = [];
  //             } else stack.push(char);
  //             continue;
  //         }

  //         if (char === ']') {
  //             if (intStack.length > 0){
  //                 let int = parseInt(intStack.join(''));
  //                 if (stack.length > 0) {
  //                     stack.push(int);
  //                 } else {
  //                     if (Array.isArray(res)){
  //                         res.push(int);
  //                     } else res = int;
  //                 }
  //             }
  //             continue;
  //         }

  //         if (char === ',') {
  //             if (intStack.length > 0){
  //                 let int = parseInt(intStack.join(''));
  //                 if (stack.length > 0) {
  //                     stack.push(int);
  //                 }
  //             }
  //         }

  //     }
  //     return res ? res : parseInt(intStack.join(''))
};

/*
     [123,[456,[789]]]
     
     output = [123, [456, [789]]]
     
     res=[123, [456,[789]]]
     stack = []
     intStack = []
     0) -we run into an '[', res and stack are both not arrays, so make res = []
     1) -Run into a comma, see that intStack has something in it,
     so we turn intStack into an integer
        -reset intStack
        -Check if stack is an array, it is not
        -check if res is an array,
        it is, so push the int into res
     2) we run into an '[', see that res is an array, so we push '[' into stack
     3) we run into digits
     4) we run into a comma, see that intStack has something,
        so we turn into integer
        -reset intStack
        -check if stack is an array, it is
        so push int into stack
     5) we run into a '[', push '[' into stack
     6) run into digits
     7) run into closing bracket,
        -turn intStack into an int
        -push into stack
        -create a temp array, and continously pop out of stack and unshift into
        temp array until popped ele is '['
        -if the stack if not empty then we don't push into res, instead
        push the temp array into stack
    8) run into ']'
        -no ints in int arr
        -create a temp array, and continously pop out of stack and unshift into
        temp array until popped ele is '['
        -stack is empty, so push temp array into res
        -tempArr = [456,[789]]
    9) run into a ']'
        -no ints in int
        -stack is empty, so we are done
    
    */
