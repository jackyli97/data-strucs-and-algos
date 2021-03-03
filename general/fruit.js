/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let maxCount = -Infinity;
    
    let L=0;
    let R=0;
    let basket1Type = -1;
    let basket2Type = -1; 
  
    while (R < tree.length) {
      let fruitType = tree[R];
      if (basket1Type === fruitType 
        || basket2Type === fruitType){
        R++;
        continue;
      }
      // console.log(basket1Type, basket2Type, fruitType)
      if (basket1Type === -1){
        basket1Type = fruitType;
        R++;
      }
      else if (basket2Type === -1){
        basket2Type = fruitType;
        R++;  
      }
      else{
        if (basket1Type !== fruitType 
          && basket2Type !== fruitType){
           let count = ((R-1) - L) + 1;
           maxCount = Math.max(maxCount, count);
           basket1Type = -1;
           basket2Type = -1;
          console.log(L,R)
           R=L+1;
           L=R;
        }
      }
    }
  
    maxCount = Math.max(maxCount, ((R-1)-L)+1);
    return maxCount;
};


/*
  [3,3,3,1,2,1,1,2,3,3,4]
                 L
                   R


*/