/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //     let read = 0
  //     let place = 0
  //     let zeroes = 0

  //     while (read < nums.length) {
  //         if (nums[read]===0) {
  //         }
  //         else if(read>place){
  //             nums[place] = nums[read]
  //             // nums[read] = 0
  //             // [nums[place], nums[read]] = [nums[read], nums[place]]
  //             place +=1
  //             zeroes += 1

  //         }
  //         read+=1
  //     }
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

// Input:
//         read = 0
//         place = 0
//         [0,1,0,3,12]

//         read = 1
//         place = 0
//         [1,0,0,3,12]

//         read = 2
//         place = 1
//         [1,0,0,3,12]

//         read=3
//         place = 1
//         [1,3,0,0,12]

//         read =4
//         place = 2
//         [1,3,12,0,0]

// Output: [1,3,12,0,0]
