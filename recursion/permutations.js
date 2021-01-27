function getPermutations(string) {
  // Generate all permutations of the input string
  let perms = new Set();
  if (string.length <= 1) return perms.add(string);

  for (let i = 0; i < string.length; i++) {
    let firstLetter = string[i];
    let splitString = string
      .slice(0, i)
      .concat(string.slice(i + 1, string.length));
    let res = getPermutations(splitString);
    res.forEach((perm) => {
      perms.add(firstLetter + perm);
    });
  }
  return perms;
}


// Interview Cake solution

//   function getPermutations(string) {
//     // Base case
//     if (string.length <= 1) {
//       return new Set([string]);
//     }

//     const allCharsExceptLast = string.slice(0, -1);
//     const lastChar = string[string.length - 1];

//     // Recursive call: get all possible permutations for all chars except last
//     const permutationsOfAllCharsExceptLast = getPermutations(
//       allCharsExceptLast
//     );

//     // Put the last char in all possible positions for each of the above permutations
//     const permutations = new Set();
//     permutationsOfAllCharsExceptLast.forEach(
//       (permutationOfAllCharsExceptLast) => {
//         for (
//           let position = 0;
//           position <= allCharsExceptLast.length;
//           position++
//         ) {
//           const permutation =
//             permutationOfAllCharsExceptLast.slice(0, position) +
//             lastChar +
//             permutationOfAllCharsExceptLast.slice(position);
//           permutations.add(permutation);
//         }
//       }
//     );

//     return permutations;
//   }