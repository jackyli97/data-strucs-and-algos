function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome

  // assumptions
  // the input string only contains lower case letters
  // any permutation of the string being a palindrome will return true
  // "tom"
  //"tmo", "otm", "omt", "mto", "mot"
  // this string of 3 netted 6 permutation
  // n!
  // "tom"
  // "t" -> "om", "tom", "tmo"
  // "o" -> "m"
  // return m
  // "m" -> "o"
  // return o
  // "o" -> "tm"
  // "t" -> m
  // Probably want to find permutations at each index, store in set
  // return true if the permutation already exists
  // Pattern I see is that in order for a string to be a palindrome
  // ever char appears twice, and at max one other char can appear once
  // if even, every char appears twice
  // if odd, every char but the mid appears twice

  let occ = new Set();

  for (i in theString) {
    let char = theString[i];
    if (occ.has(char)) occ.delete(char);
    else occ.add(char);
  }

  return occ.size <= 1;
}
