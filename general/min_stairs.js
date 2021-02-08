/**
 * @param {number[]} cost
 * @return {number}
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let table = Array(cost.length + 1);
  table[0] = 0;
  table[1] = 0;

  for (let i = 2; i < table.length; i++) {
    let pathChoice = Math.min(
      table[i - 2] + cost[i - 2],
      table[i - 1] + cost[i - 1]
    );

    table[i] = pathChoice;
  }
  return table[table.length - 1];
};

// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6

// idx=7
// cost=5

// Input: cost = [10, 15, 20]
// Output: 15

// idx=3
// cost=15

// TABULATION:

// [10,15,20]
// table=[0,0,10,15]
// start at 0, can pay 10 and end up at 1, table[1] is 0, 0<10, so no
//     can pay 10 and end up at 2,table[2]=Infinity, so yes
// at 2, can pay 20, to end up at table[3], table[3] = infinity, so yes
// at 3, reached end

// start at 1, can pay 15 and end up at 2, table[2] = 10, 15 > 10, so no
//  can pay 15 and end up at 3, table[3] = 30, 15 < 30, so yes
// at 3, reached end

// return table[table.length-1]

//TABULATION

// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6

// table=>[0, 0, 1,2, 2, 3, 3, 4, 4, 5, 6];

// START AT 0;
//  can pay 1, end up at 1 => 100, can pay 1, end up 2=>1 1 < 100, so end at 2
// at 2, can end up 3, or 4, both ===1, so choose larger, which is 4
// at 4, can end up at 5 or 6, end up at 6
// at 6, can end up at 7 or 8, choose 7
// at 7, can choose 8 or 9, choose 9
// at 9, can only choose 10, so move to 10
// at 10, which is end

// START AT 1;
// can pay 100, end at 2 or end at 3
// 2 and 3 are equal, table[2] < 100, so no, table[3] = Infinity, so 3
// at 3, at

// START AT 1;
