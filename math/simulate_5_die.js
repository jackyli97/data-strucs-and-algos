function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function rand5() {
  // Implement rand5() using rand7()

  // let res = rand7();
  // if (res === 7) return res-rand5() + 1;
  // if (res === 6) return res-rand5() + 2;

  // return res;

  let result = 7; // Arbitrarily large
  while (result > 5) {
    result = rand7();
  }
  return result;
}
