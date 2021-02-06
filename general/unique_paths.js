/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let numZeros = getZeros(grid);
  let startPos = getOnesPos(grid);

  return traverseGrid(grid, numZeros, startPos);
};

var traverseGrid = function (grid, numZeros, startPos, visited = new Set()) {
  let row = startPos[0];
  let col = startPos[1];

  if (!isValid(grid, [row, col], visited)) {
    return 0;
  }

  if (grid[row][col] === 2) {
    if (numZeros === -1) {
      return 1;
    } else {
      return 0;
    }
  }

  numZeros--;
  visited.add(startPos.join(""));

  let count =
    traverseGrid(grid, numZeros, [row - 1, col], visited) +
    traverseGrid(grid, numZeros, [row + 1, col], visited) +
    traverseGrid(grid, numZeros, [row, col - 1], visited) +
    traverseGrid(grid, numZeros, [row, col + 1], visited);

  visited.delete(startPos.join(""));
  numZeros++;
  return count;
};

var isValid = function (grid, pos, visited) {
  if (
    pos[0] < 0 ||
    pos[0] > grid.length - 1 ||
    pos[1] < 0 ||
    pos[1] > grid[0].length - 1 ||
    grid[pos[0]][pos[1]] === -1 ||
    visited.has(pos.join(""))
  )
    return false;

  return true;
};

var getOnesPos = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return [i, j];
    }
  }
};

var getZeros = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) count += 1;
    }
  }

  return count;
};

// [[1,0,0,0]
// ,[0,0,0,0]
// ,[0,0,2,-1]]

// We seem to have to know the number of 0s there are to assure that we've hit every one

// [[1,0,0,0]
// ,[0,0,0,0]
// ,[0,0,0,2]]

// Walk through the entire grid once, and count the number of 0's

// Next we want to travel and try to reach the 2

// Have a valid positions function
// Have a set that stores the visited positions
// Check that the position is not -1
// We want to reset our visited each traversal
//   Every time you make a move you want a new set, but with whats already in the set

// [[0,1],[2,0]]

// [[0,1]
// ,[2,0]]
// visited = [[0,1]]
// numZeros = 2-1 = 1;

// (0,1)

// TOP

// BOTTOM
// (1,1)

// LEFT
// (1,0)

// RIGHT
