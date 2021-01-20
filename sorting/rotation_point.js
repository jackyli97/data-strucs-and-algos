function findRotationPoint(words) {

  // Find the rotation point in the vector
  // We want to find the point where the word before it
    // Is greater than the word
  // We can attempt to locate this point using bsearch

//   const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

// find mid point and if the word before it is bigger than it, if it is, then return it's index
  // It's index is really how many times it has shifted
  // If the word before is smaller than the word
    // Need to compare it to the beginning and end elements
    // If the beginning is less than the mid ele, that means it is ordered
    // compare to end, if it is greater than, then the pivot point must be there
    // else it is sorted
    
  // apple
  // banana
  // cat
  // dog
  // elephant
  // pineapple
  // zebra
  
  // pineapple
  // zebra
  // apple
  // banana =pivot
  // cat
  // dog
  // elephant
  
  // we just continue until we find ele where the word before it is bigger than current
  // we know it's sorted if beginning is smaller and end is bigger
  
  // return
  let begin = 0;
  let end = words.length-1;
  
  // 3 and 7
  // how do we get 5?
  
  // 7 - 3 = 4 /2 = 2 + 3 = 5
  
  // 5 and 10
  // how do we get 8
  
  // 10-5 = 5 / 2 = 2.5 + 5
  
  while(begin < end) {
    let mid = Math.round((end-begin)/2)+begin;
    
    if (words[mid] < words[mid-1]) return mid;
    else if (words[mid] < words[begin]){
      end = mid;
    }
    else if (words[mid] > words[end]){
      begin = mid;
    }else break;
  }
  
  return false;
}