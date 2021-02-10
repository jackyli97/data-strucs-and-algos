// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums) {
    let visited = Array(nums.length).fill(false);
    visited[0] = true;
    for(let i=0; i<nums.length; i++) {
        if (visited[i] && (i+nums[i] >= nums.length - 1)) return true;
        else if (visited[i]){
            for (let j=i; j<=i+nums[i]; j++){
                visited[j] = true;
            }
        }
    }
    return visited[visited.length - 1];
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums) {
    if (nums.length === 1 || nums.length === 2) return Math.max(...nums);
    if (nums.length === 0) return 0;
    let tabArr = Array(nums.length).fill(0);
    tabArr[nums.length - 1] = nums[nums.length - 1];
    tabArr[nums.length - 2] = nums[nums.length - 2];

    for (let i=nums.length - 3; i>=0;i--){
        let max = 0;
        for (let j=i+2;j<nums.length;j++){
            max = tabArr[j] > max ? tabArr[j] : max;
        }
        tabArr[i] = nums[i] + max;
    }
    return Math.max(...tabArr);
    // if (nums in memo) return memo[nums];
    // if (nums.length === 1) return nums[0];
    // if (nums.length === 0) return 0;
    // let sums = [];
    
    // for (let i=0; i<nums.length; i++){
    //     if (i === nums.length - 1 || i === nums.length - 2) sums.push(nums[i]);
    //     else sums.push(nums[0] + maxNonAdjacentSum(nums.slice(i+2, nums.length), memo));
    // }
    // let max = Math.max(...sums);
    // memo[nums] = max;
    // return max;
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
    let table = Array(amount+1).fill(Infinity);
    table[0] = 0;

    for (let i=0; i<coins.length; i++){
        for (let j=1; j<table.length;j++){

            if (coins[i] <= j){
                table[j] = Math.min(table[j], 1 + table[j-coins[i]])
            }
            // if (j%coins[i]===0){
            //     table[j] = Math.min(j / coins[i], table[j]);
            // }
            // else if (coins[i] < j){
            //     let numCoin = Math.floor(j/coins[i]);
            //     let remainder = j % coins[i];
            //     table[j] = Math.min(table[j], numCoin + table[remainder]);
            // }
        }
    }

    return table[table.length-1];
}

// 4 [1,2,3]

// coin=1
// [0,1,2,3,4]

// coin=2
// [0,1,1,2,2]
  // 3 = 2+1---> Math.floor (3/2) + table[3-Math.floor(3/2)]


    // slot is 2, 2 - Math.floor(2/2)    
  
// coin=3
// [0,1,1,1,2]

// 4, [1,2,3]











    // let table = Array(amount + 1).fill(Infinity);
    // table[0] = 0;
    // for (let i = 0; i < coins.length; i++) {
    //   for (let j = 0; j < table.length; j++) {
    //     if (coins[i] <= j)
    //       table[j] = Math.min(table[j], 1 + table[j - coins[i]]);
    //   }
    // }
    // return table[table.length - 1];


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};