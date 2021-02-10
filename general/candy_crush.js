/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
//    ERROR CHECKING
    if (!board) return board;
    
    let done=true;
//     STEP1: CRUSH ROWS
    for (let i=0; i<board.length; i++){
        for (let j=0; j<board.length-2; j++){
//          sliding window
            let num1 = Math.abs(board[i][j]);
            let num2 = Math.abs(board[i][j+1]);
            let num3 = Math.abs(board[i][j+2]);
            
            if (num1 === num2 && num1 === num3 && num1 !== 0){
                done = false;
                board[i][j] = num1 * -1;
                board[i][j+1] = num2 * -1;
                board[i][j+2] = num3 * -1;
            }
        }
    }
    
//     STEP2: CRUSH COLS
 
        for (let i=0; i<board.length-2; i++){
            for (let j=0; j<board.length; j++){
    //          sliding window
                let num1 = Math.abs(board[i][j]);
                let num2 = Math.abs(board[i+1][j]);
                let num3 = Math.abs(board[i+2][j]);

                if (num1 === num2 && num1 === num3 && num1 !== 0){
                    done = false;
                    board[i][j] = num1 * -1;
                    board[i+1][j] = num2 * -1;
                    board[i+2][j] = num3 * -1;
                }
            }
        }
    
    
//     GRAVITY
        for (let i=0; i<board.length; i++){
            for (let j=0; j<board.length; j++){
                if (board[i][j] < 0){
                    collapse(board,i,j);
                }
            }
        }
    
    return done ? board : candyCrush(board);
};

var collapse = function(board, row,col){
    for (let i=row; i>0; i--){
        board[i][col] = board[i-1][col];
    }
    board[0][col] = 0;
}

// board =  [[110,5,112,113,114]
//         , [210,211,5,213,214],
//           [310,311,3,313,314],
//           [410,411,412,5,414],
//           [5,1,512,3,3],
//           [610,4,1,613,614],
//           [710,1,2,713,714],
//           [810,1,2,1,1],
//           [1,1,2,2,2],
//           [4,1,4,4,1014]]

// vertPairs = [[6,2],[7,2],[8,2]];
// horizPairs = [[8,2],[8,3],[8,4]]

// board =  [[110,5,112,113,114]
//         , [210,211,5,213,214],
//           [310,311,3,313,314],
//           [410,411,412,5,414],
//           [5,1,512,3,3],
//           [610,4,1,613,614],
//           [710,1,2,713,714],
//           [810,1,2,1,1],
//           [1,1,2,2,2],
//           [4,1,4,4,1014]]

// {'61':[6,1], '71':[7,1],'81': [8,1],'91':[9:1]}

// sample =  [[110,0,0,0,0]
//         , [210,0,0,113,114],
//           [310,0,0,213,214],
//           [410,0,112,313,314],
//           [5,5,5,5,414],
//           [610,211,3,3,3],
//           [710,311,412,613,614],
//           [810,411,512,713,714],
//           [1,1,1,1,1],
//           [4,4,4,4,1014]]

// only need to check left, bottom, and right

// index=3
// [1,3,12,3,12]

// [1,3,12,0,0]



// ALT SOLUTION USING MOVING 0S logic

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
//    ERROR CHECKING
    if (!board) return board;
    
    let done=true;
//     STEP1: CRUSH ROWS
    for (let i=0; i<board.length; i++){
        for (let j=0; j<board.length-2; j++){
//          sliding window
            let num1 = Math.abs(board[i][j]);
            let num2 = Math.abs(board[i][j+1]);
            let num3 = Math.abs(board[i][j+2]);
            
            if (num1 === num2 && num1 === num3 && num1 !== 0){
                done = false;
                board[i][j] = num1 * -1;
                board[i][j+1] = num2 * -1;
                board[i][j+2] = num3 * -1;
            }
        }
    }
    
//     STEP2: CRUSH COLS
 
        for (let i=0; i<board.length-2; i++){
            for (let j=0; j<board.length; j++){
    //          sliding window
                let num1 = Math.abs(board[i][j]);
                let num2 = Math.abs(board[i+1][j]);
                let num3 = Math.abs(board[i+2][j]);

                if (num1 === num2 && num1 === num3 && num1 !== 0){
                    done = false;
                    board[i][j] = num1 * -1;
                    board[i+1][j] = num2 * -1;
                    board[i+2][j] = num3 * -1;
                }
            }
        }
    
    
//     GRAVITY
        // for (let i=0; i<board.length; i++){
        //     for (let j=0; j<board.length; j++){
        //         if (board[i][j] < 0){
        //             collapse(board,i,j);
        //         }
        //     }
        // }
        for (let col=0; col<board[0].length;col++){
            let index=board.length-1;
            for (let row=board.length-1; row>=0; row--){
                if (board[row][col] > 0){
                    board[index][col] = board[row][col];
                    index--;
                }
            }
            for (let i=index;i>=0; i--){
                board[i][col] = 0;
            }
        }
    
    return done ? board : candyCrush(board);
};

var collapse = function(board, row,col){
    for (let i=row; i>0; i--){
        board[i][col] = board[i-1][col];
    }
    board[0][col] = 0;
}

