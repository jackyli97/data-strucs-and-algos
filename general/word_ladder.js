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
  
    return climbing(beginWord, endWord, wordSet, visited);
};

var climbing = function(word, targetWord, wordSet, visited) {
  
  let queue = [];
  let numWords = 0;
  queue.push(word);
  
  while (queue.length){
    numWords++;
    let size = queue.length;
    while (size > 0) {
      let currWord = queue.shift();
      
      for (let i=0; i<currWord.length;i++){
        let newWords = getNewWords(currWord.split(""), i, wordSet, visited);
        for (let j=0; j<newWords.length;j++){
          let newWord = newWords[j];
          if (newWord === targetWord) return numWords + 1;
          queue.push(newWord);
        }
      }
      size--;      
    }
  }
  return 0;
//   // if (word === targetWord){
//   //   visited.delete(word);
//   //   return 1; 
//   // }
//   let minCount = Infinity
  
//   for (let i=0; i<word.length; i++){
//     let newWords = getNewWords(word.split(""), i, wordSet, visited, targetWord);
//     if (typeof newWords === 'boolean'){
//       minCount = Math.min(2, minCount);
//       continue;
//     }
//     if (newWords.length === 0) continue;
//     for (let j=0; j<newWords.length; j++){
//       let count = 1;
//       count += climbing(newWords[j], targetWord, wordSet, visited);
//       if (count > 0){        
//         minCount = Math.min(minCount, count);
//       }
//     }
//   }
//   return isFinite(minCount) ? minCount : -1;
}

var getNewWords = function(word, idx, wordSet, visited) {
  const alpha = "abcdefghijklmnopqrstuvxwyz";
  const newWords = [];
  for (let i=0; i<alpha.length;i++){
    if (alpha[i] === word[idx]) continue;
    word[idx] = alpha[i];
    let joinedWord = word.join("");
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
  
  WHAT IF ONE PATH ISNT OPTIMAL:
  I.E. target word is hog, and we have bit as an additional word
    inthis example
  bit
  
  bot
  hot
  hog
  
  hot
  hog
  
  -optimal path would be the second letter
  -so reset visited after each letter
  
  go to second ele: [hot], return 1+4 = 5

hot: start with first ele: [dot, lot], return 1+3 = 4

dot: first letter: nothing
  seconcd letter: nothing
  third letter: [dog] return 1+2 = 3

dog : first letter: [cog, log], return count + 1 = 2
  log returns -1, count = 1+-1

cog: matches the endWord, return 1

log: first letter: nothing
  second letter: nothing
  third letter: nothing

  
    
  
  we want to explore each one of these possibilities
  
  
ALT:
"hit", "cog"
["hot","dot","dog","lot","log","cog"]
visited: ["hit", "dot", "lot"]

level: 2
queue = ["hot"]

newQueue = ["dot","lot"]

level: 3
queue = ["dot","lot"]

newQueue = ["dog","log"]

level: 4
queue = ["dog","log"]

newQueue = ["cog","log"]

*/