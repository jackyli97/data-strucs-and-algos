/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // potentially want to error check,
    // if the num of operands is 1 more than num of operators
    const operands = {
      '*':(ele1,ele2)=>ele1*ele2,
      '+':(ele1,ele2)=>ele1+ele2,
      '-':(ele1,ele2)=>ele1-ele2,
      '/':(ele1,ele2)=>ele1/ele2
    }
    let operandsStack = [];
    
    for (let i=0; i<tokens.length; i++){
      let char = tokens[i];
      
      if (char in operands){
        let ele2 = operandsStack.pop();
        let ele1 = operandsStack.pop();
        
        let res = operands[char](ele1, ele2);
        let adjustedRes = res > 0 ? Math.floor(res) : Math.floor(res*-1) * -1
        
        operandsStack.push(adjustedRes);
      } else {
        operandsStack.push(parseInt(char));
      }
    }
    return operandsStack[operandsStack.length-1];
};

/*
  345x- = 3(20)-
  34-5x = -1(5) or 534-x = 5*(-1)
  
  if you have three numbers,
    you can have the two operations be after all three, in which
      you will perform operations right to left
      or you can have an operation after the second operand, in which
        you calculate the first two, then take that result to perform   
          an operation with the last elel
          
  Input: ["2", "1", "+", "3", "*"]
  
  operandsStack = [2,1] , [3,3]
  
  operator = +, 
  
  res = 3
  
  size of operandsQueue = 2
    pop the second ele, then operator the other popped ele by the 2nd, 2+1 
    
  size of operandsQueue = 2
    pop the second ele and operator the other popped ele by 2nd, 3*3=9
    
    
          
  example: ["4", "13", "5", "/", "+"]
  
  ele1,ele2,ele3
  4,13,5
  
  13/5 = 2.3
  
  4+2.3= 6
  
  operandsStack = [4] , [4,2]
  
  operator = /, +
  
  res = 13/5 = 2
  
  Answers truncate towards 0, so they math.floor
  
  Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]                                                                  ^
  
  operandsStack = [10,6,9,3] , [10,6,9,12,-11], [10,6,-132],
  [10,0], [0,17], [17,5], [22]
  
  operator = +,*,/,*,+
  
  res = 9+3 = 12,12*(-11)=-132,6/132=0, 10*0=0,0+17=17, 17+5=22