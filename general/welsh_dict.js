// We would like to sort Welsh words correctly by their Welsh letters, instead of their latin character counterparts

//WELSH DICTIONARY:
welshDict = [
  "a",
  "b",
  "c",
  "ch",
  "d",
  "dd",
  "e",
  "f",
  "ff",
  "g",
  "ng",
  "h",
  "i",
  "l",
  "ll",
  "m",
  "n",
  "o",
  "p",
  "ph",
  "r",
  "rh",
  "s",
  "t",
  "th",
  "u",
  "w",
  "y",
];

//EXAMPLE 1:
//INPUT:  [ddr, nah, dea, dd, ngah]
//RESULTS:  [dea, dd, ddr, ngah, nah]

// ddr and dd
// If we reach the end of a word, return that word, IF they have been equal up to the point

//EXAMPLE 2:
//INPUT:  [zebra, ddr, dda, axe]
//RESULTS:  [axe, dda, ddr, zebra]
// EXAMPLE 3:
//INPUT:  [ebra, ddr, rdd, eae]
//RESULTS:  [ddr, eae, ebra, rdd]

// If they both have the same beginning, and one of them is over, return the shorter one
// if same beginning, compare subsequent next letters

// How can we assign numerical values to the welshdict

const organizeWords = (words, welshDict) => {
  let welshVals = {};

  welshDict.forEach((letter, i) => {
    welshVals[letter] = i;
  });

  // console.log(welshVals);

  words.sort((a, b) => {
    if (a === b) return 0;

    let letterA = getWelshRoot(a, welshVals);
    let letterB = getWelshRoot(b, welshVals);
    // console.log(a,b,letterA, letterB)
    if (letterA !== letterB) return welshVals[letterA] - welshVals[letterB];
    // axe and dda, have a and dd

    // dda and ddr
    // iterate by 2

    // ebra and eae

    // ddab dda
    let i = 0;
    i += letterA.length;
    while (i < Math.max(a.length, b.length)) {
      if (i === a.length) return -1;
      else if (i === b.length) return 1;

      if (a[i] !== b[i]) return welshVals[a[i]] - welshVals[b[i]];
      i++;
    }
  });

  return words;
};

const getWelshRoot = (word, welshVals) => {
  let firstTwoLetters = word.slice(0, 2);
  // console.log(word, firstTwoLetters, firstTwoLetters in welshDict)
  if (firstTwoLetters in welshVals) return firstTwoLetters;

  return word[0];
};

let res = organizeWords(["ddr", "nah", "dea", "dd", "ngah"], welshDict);
console.log(res);
