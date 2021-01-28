function changePossibilities(amountLeft, denominations, memo = {}) {
  // Calculate the number of ways to make change
  // let memoKey = amountLeft + ':' + denominations;
  // if (memoKey in memo) return memo[memoKey];
  // // console.log(amountLeft, denominations, memo);
  // if (amountLeft === 0)return 1;
  // if (denominations.length === 0)return 0;

  // let coin = denominations[0];
  // let numWays = 0;

  // for (let i=0; i<=Math.floor(amountLeft/coin); i++){
  //   numWays += changePossibilities(amountLeft - (coin*i), denominations.slice(1), memo);
  // }

  // memo[memoKey] = numWays;
  // return numWays;

  // BOTTOM-UP approach
  let table = Array(amountLeft + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < denominations.length; i++) {
    for (let j = denominations[i]; j < table.length; j++) {
      table[j] += table[j - denominations[i]];
    }
  }
  return table[table.length - 1];
}

// BOTTOM-UP approach
// Also have a table, table[i] represents how many ways we can get to k cents
// using our denominations
// base case is that theres one way to create the amount - and we progressively add

// 4 [1,2,3]

// coin=1
// [0,0,0,0,0]
// [1,1,1,1,1]
// how many ways can we make 1 cent? 1-1=0, table[0] = 1
// how many ways can we make 2 cent? 2-1=1, table[1] = 1
// how many ways can we make 3 cent? 3-1=2, table[2] = 1

// coin=2
// [1,1,1,1,1]
// [1,1,2,2,3]
// in order to make 2 coins, 2-2=0, table[0]=1
// in order to make 3 coins, 3-2=1, table[1]=1
// in order to make 4 coins, 4-2=2, table[2]=3

// coin=3
// [1,1,2,3,4]
// in order to make 3 cents, 3-3 =0, table[0]=1
// in order to make 4 cents, 4-3 = 1, so table[1] = 1
// 4, [1,2,3]

// first loop , you can use 1 zero times
// 4, [2,3]
// use 2 zero times
// use 2 1 time
// 2, [3]
// use 3 0 time
// 2 ,[]
// return false
// use 2 2 ties
// 0 , [3]
// return true,
// increment by one
// 4 ,[3]
// use 3 1 time
// 1, []
// because we have no coins left and amount !== 0, return false

// 50, [5,10]
// [0..........0]
// 5 goes into 5 1 time, 6

// Time Complexity
// O(N*M), with n being amount of money, and m being amount of denominations
