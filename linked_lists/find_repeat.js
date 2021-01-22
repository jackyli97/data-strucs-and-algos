function findDuplicate(intArray) {

// [3, 4, 2, 3, 1, 5]
    // ^  ^  ^  ^  ^
// [3, 1, 2, 2]
// [4, 3, 1, 1, 4]

// [3,4,2,3,1,5]
     
// iterate into the value -1

// let head = intArray.indexOf(1) //=4
// let current = head;
// the current tells you which position you are at/visited

// let next = intArray[4] =>1
// current = intArray[next-1] => 0

// next = intArray[0] => 3
// current = intArray[3-1] => 2

// next = intArray[2] => 2
// current = intArray[2-1] => 1

// next = intArray[1] => 4
// current = intArray[4-1] => 3

// next = intArray[3] => 3
// current = intArray[3-1] => 2

// We've hit position 2 again -> return current + 1 = 3

// // [3, 1, 2, 2]
//     ^  ^  ^
//       ^
// let current = head = intArrayIndexOf(1) => 1

// current = intArray[current-1] => 3

// current = intArray[current-1] => 2

// current = intArray[current-1] => 1

// return current + 1

// PATTERN
  // last node never has any pointers, b/c it would be denoted by n, but that doesn't
    // exist b/c there lies a duplicate
    // What else never has anything pointing to it?
      // A HEAD!
  // There is no end, it is cyclic, the point where it becomes cyclic is where
    // there is a duplicate, index + 1 to be exact
    
    // let head = intArray.length-1 //5;
    // let next;
    
    // for (let i=0; i<intArray.length-1; i++){
    //   head = intArray[head]; //5
    //   next = head;
    //   for (let j=i; j<intArray.length-1; j++){
    //     next = intArray[next-1]; // 1
    //     if (head === next)return head;
    //   }
    // }
  
  // Base case
  // if (intArray.length <= 2)return intArray[0];
  
  // Define our head
  let head = intArray.length-1;  
  
  // Let's find the length of our cycle
  
  let maxPointers = intArray.length - 1;
  // We can start at the last spot our pointers point to
    // count the amount of steps to get back to that point
  let posInCycle = intArray[head]-1;
  for (let i=0; i<maxPointers; i++){
    posInCycle = intArray[posInCycle]-1;
  }
  
  let currentPos = intArray[posInCycle]-1 ;
  let count = 1;
  while (currentPos !== posInCycle){
    currentPos = intArray[currentPos]-1;
    count+=1;
  }
  // for (let i=0; i<intArray.length;i++){
  //   let j=intArray[i-1];
  //   if (i===j)continue;
  //   count=1;
  //   while (i !== j && count < maxPointers){
  //     j=intArray[j-1];
  //     count+=1;
  //   }
  //   if (i===j)break;
  //   count = 1;
  // }
  // console.log(count);
  
  if (count === 1)return intArray[head];
  
  // Set starting point for second pointer
  
  let secondPointer = head;
  for (let i=0;i<count;i++){
    secondPointer = intArray[secondPointer]-1;
  }
  
  while (head !== secondPointer){
    head = intArray[head]-1;
    secondPointer = intArray[secondPointer]-1;
  }
  
  return secondPointer+1;
}


// [1, 2, 3, 2]

// head = arr[arr.length-1] = 2

//  head = arr[2-1] = 2
    // head = 1

    // current = arr[2-1] = 2, head === 1+1




// [1, 2, 5, 5, 5, 5]

// 6 -> 5