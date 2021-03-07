/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  if (words.length === 1) {
    let remaining = maxWidth - words[0].length;
    if (remaining > 0) return [(words[0] += ' '.repeat(remaining))];
    else return [words[0]];
  }

  let res = [];
  let stack = [words[0]];
  let lineWidth = words[0].length;

  if (!(words[1].length + lineWidth + 1 <= maxWidth)) {
    console.log('wtf');
    breakLine(stack, lineWidth, maxWidth);
    res.push(stack);
    stack = [];
    lineWidth = 0;
  } else {
    lineWidth++;
  }

  for (let i = 1; i < words.length; i++) {
    let currWord = words[i];
    stack.push(currWord);
    lineWidth += currWord.length;

    if (i === words.length - 1) {
      let isLastWord = true;
      breakLine(stack, lineWidth, maxWidth, isLastWord);
      res.push(stack);
      continue;
    }

    if (lineWidth >= maxWidth - 1) {
      breakLine(stack, lineWidth, maxWidth);
      res.push(stack);
      stack = [];
      lineWidth = 0;
    } else {
      if (words[i + 1].length + 1 + lineWidth <= maxWidth) {
        lineWidth++;
      } else {
        breakLine(stack, lineWidth, maxWidth);
        res.push(stack);
        stack = [];
        lineWidth = 0;
      }
    }
  }

  return res.map((lines) => lines.join(' '));
};

var breakLine = function (stack, lineWidth, maxWidth, isLastWord = false) {
  let remaining = maxWidth - lineWidth;
  if (isLastWord) {
    stack[stack.length - 1] += ' '.repeat(remaining);
  } else if (stack.length <= 2) {
    stack[0] += ' '.repeat(remaining);
  } else {
    // Parition spaces
    let stackIdx = 0;
    while (remaining > 0) {
      stack[stackIdx] += ' ';
      remaining--;
      if (stackIdx === stack.length - 2) stackIdx = 0;
      else stackIdx++;
    }
  }
};

/*
    -Even amounts of spaces left and right of a word
    -If uneven, then place more spaces on the left
    -last line is left justified
    -left justfied if there is only one word.
    
    ["This", "is", "an", "example", "of", "text", "justification."]
    
    -Have a lineLength counter, start at 0
    -Iterate through the array
    -Check to make sure curr word length + lineLength is not >= maxWidth
    -Add the word length to lineLength, if < maxWidth - 1, then contiinue
    with the same lineLength
    
    OR
    -Iterate through array
    -Add word to stack
    -Add words length to the lineLength
        -If the lineLength >= maxWidth-1
            -Break new line
                -Push the current stack to our result
                    -Determine how to split up spaces
                -Initialize a new stack
                -Set lineLength to 0
        -Else
            -Do a check to see if the next word length + 1, puts us <= maxWidth
                If yes
                   -add a space, represented by incremening lineLength by 1
                Else
                    -Break to new line
                        -Push the current stack to our result
                            -Determine how to split up spaces
                        -Initialize a new stack
                        -Set lineLength to 0
        -If there are no extra words left, then calc spaces remaining,
            and add to the last word
    
    *Break cases*
     * Case: only two words in stack, so put the remain spaces to the first word
     * Case: only one word in stack, so put the remain spaces to the first word
    
    15
    example of text
    
    1 over, so add that to the first word in the stack,
    1 does not divide evenly amongst 2, math.floor(1/2) = 0,
    so distribute nothing over first two in stack, give the remaining 1 to first char in stack
    
    stack:  [example, of, text]
    
    --------
    
    'a  computer.  Art is' maxWidth 20, width is 18
    
    stack: length is 4
    
    over by 2, 2 divides evenly by 2, so distribute amongst first two words
    

    understand      well", maxWidth 20, width is 15
    
    stack: length is 2
    
    missing 5, 
    
    * Case: only two words in stack, so put the 5 spaces to the first word
    
    
    'Science  is  what we', maxWidth is 20, width is 18
    
    stack: length is 4
    
    "everything  else  we", maxWidth is 20, width is 18
    
    stack: length is 3.
    
    over by 2, perfectly divisible
    
    -------
    
    "This    is    an", maxWidth=16, width=10
    
    stack:length = 3
    
    3 / 2 not perfectly divisible,
    Math.floor(3/2) = 1
        Split the 1 amongst the 1st two words
    3 % 2 = 1
        Give the remainder to the 3rd
    
    
    
    Here is an , maxWidth = 15, width = 10 
    5 leftover
    5 / 2 = 5 % 2 = 5 / 2 
    
    
    own reason for, maxWidth=17, width=14

    3 / 2 != 1, Math.round(3/2) = 2, 3-2 = 1 

*/
