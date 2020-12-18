//https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let arr = new Array(s.length);

    for (let j = 0; j < s.length; j++) {
        if (wordDict.includes(s.slice(0, j + 1))) {
            arr[j] = true;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (arr[i] === true) {
            for (let j = i + 1; j < s.length; j++) {
                if (wordDict.includes(s.slice(i + 1, j + 1))) {
                    arr[j] = true;
                }
            }
        }
    }

    return arr[arr.length - 1] === true;
};