function findArrayQuadruplet(arr, s) {
  // your code goes here
  if (arr.length < 4) return [];

  let sorted = arr.sort();
  let pairs = {};

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      let pair = sorted[i] + sorted[j];
      if (!(pair in pairs)) pairs[pair] = [sorted[i], sorted[j]];
    }
  }

  let sumOfPairs = Object.keys(pairs);

  for (let i = 0; i < sumOfPairs.length; i++) {
    let missingPair = s - sumOfPairs[i];
    if (missingPair in pairs)
      return pairs[sumOfPairs[i]].concat(pairs[missingPair]);
  }

  return [];
}
