function findRectangularOverlap(rect1, rect2) {
  // Calculate the overlap between the two rectangles

  // Find bounds of both respective rectangles

  // RECT1
  let firstRectLowerX = rect1.leftX;
  let firstRectUpperX = rect1.leftX + rect1.width;

  let firstRectLowerY = rect1.bottomY;
  let firstRectUpperY = rect1.bottomY + rect1.height;

  // RECT2
  let secondRectLowerX = rect2.leftX;
  let secondRectUpperX = rect2.leftX + rect2.width;

  let secondRectLowerY = rect2.bottomY;
  let secondRectUpperY = rect2.bottomY + rect2.height;

  // // Check for X overlaps
  // let xIntercepts;
  // let yIntercepts;
  // // Find the larger bound
  // if (firstRectUpperX > secondRectUpperX){
  //   xIntercepts = getIntercepts(secondRectLowerX, secondRectUpperX, firstRectLowerX, firstRectUpperX)
  // }
  // else{
  //   xIntercepts = getIntercepts(firstRectLowerX, firstRectUpperX, secondRectLowerX, secondRectUpperX)
  // }

  // // Check for Y overlaps
  // // Find the larger bound
  // if (firstRectUpperY > secondRectUpperY){
  //   yIntercepts = getIntercepts(secondRectLowerY, secondRectUpperY, firstRectLowerY, firstRectUpperY)
  // }
  // else{
  //   yIntercepts = getIntercepts(firstRectLowerY, firstRectUpperY, secondRectLowerY, secondRectUpperY)
  // }

  // if (!(xIntercepts.length > 1 && yIntercepts.length > 1)){
  //   return { leftX: null, bottomY: null, width: null, height: null };
  // }

  // return {leftX: xIntercepts[0], bottomY: yIntercepts[0],
  //   width: xIntercepts[xIntercepts.length-1] - xIntercepts[0],
  //   height: yIntercepts[xIntercepts.length-1] - yIntercepts[0]
  // }

  const xOverlap = getRangesOverlap(
    firstRectLowerX,
    firstRectUpperX,
    secondRectLowerX,
    secondRectUpperX
  );

  const yOverlap = getRangesOverlap(
    firstRectLowerY,
    firstRectUpperY,
    secondRectLowerY,
    secondRectUpperY
  );

  if (!xOverlap || !yOverlap) {
    return { leftX: null, bottomY: null, width: null, height: null };
  }

  return {
    leftX: xOverlap.floor,
    bottomY: yOverlap.floor,
    width: xOverlap.ceiling - xOverlap.floor,
    height: yOverlap.ceiling - yOverlap.floor,
  };
}

function getRangesOverlap(rect1Lower, rect1Upper, rect2Lower, rect2Upper) {
  const highestFloor = Math.max(rect1Lower, rect2Lower);
  const lowestCeiling = Math.min(rect1Upper, rect2Upper);

  if (highestFloor >= lowestCeiling) return null;

  return { floor: highestFloor, ceiling: lowestCeiling };
}

function getIntercepts(rectLower, rectUpper, floor, ceiling) {
  let arr = [];
  for (let i = rectLower; i <= rectUpper; i++) {
    if (i >= floor && i <= ceiling) arr.push(i);
  }
  return arr;
}

// TIME COMPLEXITY
// iterating through the range of one rectangle, O(N)
// Space Complexity
// Worse case, we store all the values of a range inside an array, 0(N)

// N being the size of 1 rectangle, the "smaller one"

// GIVEN
// Always straight, never diagonal
// Width, height, left x and bottom y

// {3, 3, 3, 3}
// {5,4,2,2}

// {1,1,2,2}
// {2,1,1,1}
// intersection of this should be 2,1,1,1,

// bounds
// x => {1,3}
// y => {1,3}

// x => {2,3}
// y => {1,2}

// x lies within 2->3
// y lies within 1->2

// x => {1,7}
// y => {1,4}

// x => {5,8}
// y => {2,8}

// overlap is {5,2,2,2}

// Find bound of each rectangle
// Find the overlapping bounds
// first ele of x bound is left x
// second ele - first is width
// so forth

// Bounds can be found by taken the left x, adding width
// taking bottom y, adding height

// firstRectLowerX = 1
// firstRectUpperX = 7

// secondRectLowerX =  5
// secondRectUpperX =  8

// firstRectLowerY = 1
// firstRectUpperY = 4

// secondRectLowerY =  2
// secondRectUpperY =  8

// use higher x as bounds
// iterate from other rect lower to upper
// 1-7
// check if the num is within the bound
// [5,7]

// use higher y as bounds
// iterate from other rect lower to upper
// 1-4
// check if the num is within the bound
// [2,4]

// Both arrays are non empty, which means there is an intersect

// first ele is 5, is x left, 7-5 = 2 = width
// first ele is 2, is bottom y, 4-2 = 2 = height
