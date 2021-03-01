/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let visited = new Set();
  let initState = getState(board);
  if (initState === "123450") return 0;
  visited.add(initState);

  return traversePuzzle(board, visited);
};

var traversePuzzle = function (board, visited) {
  const rowDirs = [0, 1, -1, 0];
  const colDirs = [1, 0, 0, -1];

  let queue = [board];
  let numMoves = 0;

  while (queue.length) {
    let size = queue.length;
    numMoves++;
    while (size > 0) {
      size--;
      let currBoard = queue.shift();
      let curr0Pos = find0Pos(currBoard);
      let curr0Row = curr0Pos[0];
      let curr0Col = curr0Pos[1];
      // console.log(currBoard, curr0Pos)
      for (let i = 0; i < 4; i++) {
        let copyBoard = deepCopy(currBoard);
        let new0Row = curr0Row + rowDirs[i];
        let new0Col = curr0Col + colDirs[i];
        // console.log('-------')
        if (new0Row < 0 || new0Col < 0 || new0Row >= 2 || new0Col >= 3)
          continue;
        let temp = copyBoard[new0Row][new0Col];
        copyBoard[new0Row][new0Col] = 0;
        copyBoard[curr0Row][curr0Col] = temp;
        let newState = getState(copyBoard);
        if (newState === "123450") return numMoves;
        if (visited.has(newState)) continue;
        visited.add(newState);
        queue.push(copyBoard);
      }
    }
  }
  return -1;
};

var getState = function (board) {
  let str = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let num = board[i][j];
      str += num;
    }
  }
  return str;
};

var find0Pos = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let num = board[i][j];
      if (num === 0) return [i, j];
    }
  }
};

var deepCopy = function (board) {
  let arr = [];

  board.forEach((ele) => {
    if (!Array.isArray(ele)) arr.push(ele);
    else {
      let res = deepCopy(ele);
      arr.push(res);
    }
  });
  return arr;
};

/*
 [[4,1,2],       
  [5,0,3]]
  
 [[4,0,2],       01 
  [5,1,3]]
    
 [[4,1,2],        12
  [5,3,0]]
  
 [[4,1,2],        10
  [0,5,3]]

There are at max 3 possible moves each iteration, min of 2

can perform bfs with a queue with each possibility, initial queue will
have each initial position, can mark visited as swaps
  visited can be the state of the game, so all the indicies in order in a string
 
 ------
 INITIAL:
 
 [[4,1,2],
  [5,0,3]]
  
  '412503'
 --------- 
 MOVES = 1 
 
 [[4,0,2],        
  [5,1,3]]
  
  '402513'
  
 [[4,1,2],        
  [0,5,3]]
  
  '412053'
  
 [[4,1,2],        
  [5,3,0]]
  
  '412530'
 --------- 
MOVES = 2
 
 [[0,4,2],        
  [5,1,3]]
  
  '042513'
  
 [[4,2,0],        
  [5,1,3]]
  
  '420513'
  
 [[0,1,2],        
  [4,5,3]]
  
  '012453'
  
 [[4,1,0],        
  [5,3,2]]
  
  '410532'
  
   --------- 
MOVES = 3
 
 [[4,0,2],        
  [5,1,3]]
  
  '402513'
  
 [[5,4,2],        
  [0,1,3]]
  
  '542013'
  
  [[4,2,3],        
  [5,1,0]]
  
  '423510'
  
 [[1,0,2],        
  [4,5,3]]
  
  '102453'
  
 [[4,1,2],        
  [0,5,3]]
  
  '412053'
  
 [[4,0,1],        
  [5,3,2]]
  
  '401532'
  
 [[4,1,2],        
  [5,3,0]]
  
  '412530'
  
  ---------
  
  MOVES = 4
  
 [[0,4,2],        
  [5,1,3]]
  
  '042513'
  
 [[4,2,0],        
  [5,1,3]]
  
  '420513'
  
 [[5,4,2],        
  [1,0,3]]
  
  '542103'
  
 [[4,2,3],        
  [5,0,1]]
  
  '423501'
  
 *[[1,0,2],        
  [4,5,3]]
  
  '102453'
  
 [[1,0,2],        
  [4,5,3]]
  
  '012453'
  
 *[[1,0,2],        
  [4,5,3]]
  
  '102453'
  
 [[4,1,2],        
  [0,5,3]]
  
  '412053'
  
 [[4,0,1],        
  [5,3,2]]
  
  '401532'
  
 [[4,1,2],        
  [5,3,0]]
  
  '412530'
 
 */
