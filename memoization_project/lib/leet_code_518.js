// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins, memo = {}) {
    let key = amount.toString() + ':' + coins.toString();
    if (key in memo) return memo[key];
    if (amount === 0) return 1;
    let coin = coins[coins.length - 1];
    let total = 0;
    for (let i = 0; i <= Math.floor(amount / coin); i++) {
        total += change(amount - (coin * i), coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return total;
};
