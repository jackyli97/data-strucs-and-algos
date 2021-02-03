function findRepeat(numbers) {
  // Find the number that appears twice
  let n = numbers.length - 1;

  let sumOfOneToN = (n ** 2 + n) / 2;

  let sumOfNumbers = numbers.reduce((a, b) => a + b);

  return sumOfNumbers - sumOfOneToN;
}
