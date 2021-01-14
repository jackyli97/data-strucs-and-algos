function reverse(arrayOfChars) {
  // Reverse the input array of characters in place
  // let copy = Array.from(arrayOfChars);
  // for (let i=0; i<arrayOfChars.length; i++){
  //   arrayOfChars[i] = copy[(copy.length-1)-i];
  // }
  for (let i = 0; i < Math.round(arrayOfChars.length / 2); i++) {
    [arrayOfChars[i], arrayOfChars[arrayOfChars.length - 1 - i]] = [
      arrayOfChars[arrayOfChars.length - 1 - i],
      arrayOfChars[i],
    ];
  }
}
