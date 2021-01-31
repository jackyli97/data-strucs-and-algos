function getClosingParen(sentence, openingParenIndex) {
  // Find the position of the matching closing parenthesis
  let stack = [];
  stack.push(sentence[openingParenIndex]);
  let i = openingParenIndex + 1;
  while (i < sentence.length) {
    if (sentence[i] === "(") stack.push(sentence[i]);
    else if (sentence[i] === ")") stack.pop();
    if (stack.length === 0) return i;
    i++;
  }

  throw Error;
}
