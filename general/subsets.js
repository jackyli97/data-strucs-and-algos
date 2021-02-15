/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Input: nums = []
// Output: [[],[0]]

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// output = [[],[1],[2],[1,2] ,[3], [1,3], [2,3], [1,2,3]]
// ITERATE [1,2,3]
// ele = 3
//   within each ele, iterate through output and push ele into output
//

// Input: nums = [0]
// Output: [[], [0]]
// ITERATE [0]
// ele = 0

// [[]]

var subsets = function (nums) {
  if (nums.length === 0) return [[]];

  let output = [];
  output.push([]);

  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    let copy = [];

    for (let i = 0; i < output.length; i++) {
      let outputArr = output[i];
      let toBePushed = outputArr.concat(ele);
      copy.push(toBePushed);
    }
    output = output.concat(copy);
  }

  return output;
};

// TIME:
//  O(N) where n is length of nums
// O(N * 2^(N-1))

// SPACE
//   O(N * 2^N)

// Input: nums = [1,2,3]

// ele: 3
// output = [[],[1],[2],[1,2] ,[3], [1,3], [2,3], [1,2,3]]

// n+1, (n-1)+1,(n-2)+1
// 4,  (3-1)+1 =3, (3-2)+1=2,

// output: [[], [1], [2], [1,2], [3], [1,3], [2,3],[1,2,3]]
// copy: [[3], [1,3], [2,3],[1,2,3]]
// outputArr: [1,2]
// toBePushed: [1,2,3]
