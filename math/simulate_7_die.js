function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {
  // Implement rand7() using rand5()
  const results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 0, 0, 0, 0],
  ];

  while (true) {
    const roll1 = rand5() - 1;
    const roll2 = rand5() - 1;

    const outcomeNumber = roll1 * 5 + roll2 + 1;

    if (outcomeNumber > 21) continue;

    return (outcomeNumber % 7) + 1;
  }
}
