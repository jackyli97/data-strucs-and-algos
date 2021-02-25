/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length === t.length && t === s) return s;

  if (s.length < t.length || t.length === 0) return "";

  let tOcc = findOcc(t);

  let sOcc = {};

  for (let i in t) {
    sOcc[t[i]] = 0;
  }

  let L = 0;
  let R = 0;
  let required = Object.values(tOcc).length;
  let progress = 0;
  let minResLength = Infinity;
  let minResCoord = [];
  let currResLength;

  while (R < s.length) {
    if (progress < required) {
      let letter = s[R];

      if (!(letter in sOcc)) {
        R++;
        continue;
      }

      sOcc[letter]++;
      if (sOcc[letter] === tOcc[letter]) progress++;

      if (progress === required) continue;

      R++;
    } else {
      currResLength = R - L + 1;
      if (currResLength < minResLength) {
        minResCoord = [L, R];
        minResLength = currResLength;
      }
      // Shift L now
      let lLetter = s[L];
      if (lLetter in sOcc) {
        sOcc[lLetter]--;
      }
      if (sOcc[lLetter] < tOcc[lLetter]) progress--;
      if (progress < required) R++;
      L++;
    }
  }

  return isFinite(minResLength)
    ? s.slice(minResCoord[0], minResCoord[1] + 1)
    : "";
};

var findOcc = function (str) {
  let res = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter in res) res[letter]++;
    else res[letter] = 1;
  }

  return res;
};

/*
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

finding length of string is R-L

tOcc = {A:1,B:1,C:1}
sOcc = {A:1,B:1,C:1}
  -A matches in both, so increment progress
  -progress still not met so increase window size
  -B matches in both, so increment progress
  -C matches in both, so increment progress
  -Progress === req, so check if minRes.length is < currRes or if currRes is empty, set minRes
  -Minimize window now
  -we had to decrement A, so no longer met progress, so lets move right now
  -our curr length is 10, too big, let's minimize
required = 3;
progress = 2;
minResLength = 6
minResCoord = [9,12]
currResLength = 4

return s.slice(9,12)

"ABC"


"A D O B E C O D E B A N C"
   L 
           R

Brute force approach, start with a window of size of length t,
all the way up till n-1
  inner loop will loop from 0 till s.length - (sizeOfWindow + 1)
  -walk substring and store occ in a hash, walk through t and
  see if every occ appears in the hash
  

potentially have a set that stores the idicies of elements in s

"ADOADBE"

{
A:[0,10],
D:[1,7],
O:[2,6],
B:[3,9],
E:[4,8],
C:[5,12],
N:[11]
}

[0,10]

iterate through t,

key into the map for first letter, if it does not exist then return false
if it does then add into input string


*/
