function findRepeat(numbers) {
  // Find a number that appears more than once

  // Can't use this method because it has linear space
  // let max = Math.max(...numbers);

  // let counts = Array(max+1).fill(0);

  // for (let i=0; i<numbers.length; i++){
  //   let num = numbers[i];
  //   counts[num] += 1;
  //   if (counts[num] > 1) return num;
  // }

  // THIS DESTROYS THE INPUT, MUTATES IT IN PLACE
  // let sorted = numbers.sort();

  // for (let i=1; i<sorted.length; i++){
  //   if (sorted[i-1] === sorted[i]) return sorted[i];
  // }

  // Time complexity is O(n^2)
  // for (let i=0; i<numbers.length; i++){
  //   let res = numbers.slice(i+1).indexOf(numbers[i]) !== -1 ? numbers[i] : null;
  //   if (res) return numbers[i]
  // }

  // We want to do it in n(logn) -> Somehow split in half
  // [4, 1, 4, 8, 3, 2, 7, 6, 5]
  // We know that the range of ints are from 1 to length-1

  // without sorting, we know the max of this arr is 8
  // we can iterate from 1 through 8
  // potential b search, key is in the step where u sort into left and right

  // We want to divide the number of possible numbers in half at each step
  // array is length 4, so there should be 3 unique integers
  // we get 4,1,4,3,2, so 5 possible numbers
  // length is

  // What this problem is saying is, whatever the length of your array is, that number is
  // not in the array, meaning there must be a duplicate
  let min = 1;
  let max = numbers.length - 1;
  let mid = Math.floor((max - min) / 2) + min;

  let lowerRangeFloor = 1;
  let lowerRangeCeiling = mid;

  let upperRangeFloor = mid + 1;
  let upperRangeCeiling = max;

  let count;
  let distinct;

  while (lowerRangeFloor < upperRangeCeiling) {
    count = 0;
    distinct = lowerRangeCeiling - lowerRangeFloor + 1;
    numbers.forEach((num) => {
      // Only one bound needs to be checked
      if (num >= lowerRangeFloor && num <= lowerRangeCeiling) count += 1;
    });
    if (count > distinct) {
      upperRangeCeiling = mid;
      mid =
        Math.floor((lowerRangeCeiling - lowerRangeFloor) / 2) + lowerRangeFloor;
      lowerRangeCeiling = mid;
      upperRangeFloor = mid + 1;
    } else {
      lowerRangeFloor = upperRangeFloor;
      mid =
        Math.floor((upperRangeCeiling - upperRangeFloor) / 2) + upperRangeFloor;
      lowerRangeCeiling = mid;
      upperRangeFloor = mid + 1;
    }
  }

  return lowerRangeFloor;
}

// since we only have 8 distinct, as we count through the entire array and check if it's
//   in the range 1-8, we should get 9 items

// from 1-4, 5-8

// lower count = 5, > 4 eles

// mid = lowerfloor - lowerceil / 2 + lowerceil
// = 2
// lowerfloor = lowerfloor
// lowerceil = 2
// upperfloor = 3
// upperceil = oldmid

// 3,4
// lowerfloor = 3
// mid = 3
// lowerceil is 3
// upperfloor = 4
// upperceil = 4

// lowerfloor = 4
// mid = 4
// lowerceil = 4
// upperfloor = 5
// stop while loop once lowerfloor stops bieng smaller than upper ceil

// ALT w/ 5-8
// lowerfloor=upperfloor
// mid = upperfloor - upperceil / 2 + upperfloor
// lowerceil = mid
// upperfloor = mid+1
// upperceil = upperceil

// lower count
//   1-2, 3-4
//   lower = 2 === 2 eles
//   higher = 3 > 2 eles
//   3 => 1
//   4 => 2

// higher count = 4 === 4 eles

// Have a mid, include mid in left search, rest in right search
// Iterate through both sides, somehow count the num of unique vals
