/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (beginWord.length === 1 && wordList.includes(endWord)) return 2;
    
    let wordSet = new Set();
  
    wordList.forEach(word=>wordSet.add(word));
    if (!wordSet.has(endWord)) return 0;  
  
    let visited = new Set();
    visited.add(beginWord);
    min = Infinity;
  
    climbing(beginWord, endWord, wordSet, visited, min);
    return isFinite(min) ? min : 0;
};

var climbing = function(word, targetWord, wordSet, visited) {
  if (word === targetWord) return 1;
  
  for (let i=0; i<word.length; i++){
    let count = 1;
    
    let newWords = getNewWords(word.split(""), i, wordSet, visited);
    if (newWords.length === 0) continue;
    for (let j=0; j<newWords.length; j++){
      count += climbing(newWords[j], targetWord, wordSet, visited);
      if (count > 0){
        min = Math.min(min, count);
      }
    }
  }
  
  return count;
}

var getNewWords = function(word, idx, wordSet, visited) {
  const alpha = "abcdefghijklmnopqrstuvxwyz";
  const newWords = [];
  for (let i=0; i<alpha.length;i++){
    if (alpha[i] === word[idx]) continue;
    word[idx] = alpha[i];
    let joinedWord = word.join("")
    if (!wordSet.has(joinedWord) || visited.has(joinedWord)) continue;
    visited.add(joinedWord);
    newWords.push(joinedWord);
  }
  return newWords;
}

/*

Constraints:
Only one letter is different between each adjacent pair of words in the sequence.

Every word but the first word needs to be in the list?

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]

-first check if the list includes the end word, if not return false


Graph problem??

we know that every word has the same length, and at max is 10

turn the wordList into a set
have a visited set as well

we want to end with cog

visited: [hit, hot, dot, lot,dog, cog, log]

queue: []

add word to visited while finding them as "neighbors"
hit, this word has 26*3 possibilites,
  each possibility must exist in the wordList
  
  start with first ele: []
  
  go to second ele: [hot], return 1+4 = 5

hot: start with first ele: [dot, lot], return 1+3 = 4

dot: first letter: nothing
  seconcd letter: nothing
  third letter: [dog] return 1+2 = 3

dog : first letter: [cog, log], return count + 1 = 2

cog: matches the endWord, return 1

  
    
  
  we want to explore each one of these possibilities

*/