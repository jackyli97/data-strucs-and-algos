function getProductsOfAllIntsExceptAtIndex(intArray) {
  // Make a list of the products

  // total product is 84
  //   [1, 7, 3, 4]
  //   [84, 12, 28, 21]
  // keep track of a prev set of numbers and keep track of a next set of numbers
  // initally prev will be empty, next will have all numbers but the first
  // at each step sum the product of the prev with product of the next
  // also remove the first element out of the next, and add curr ele to prev

  // [84, 12, 28, 4]
  // prev->[1,7]
  // next->[4]
  // curr->4
  if (intArray.length <= 1) throw new Error("Invalid number of arguments");

  // let prev = [];
  // let next = intArray.slice(1);

  // for (let i=0;i<intArray.length;i++){
  //   let curr = intArray[i];
  //   intArray[i] = getProduct(prev) * getProduct(next);
  //   prev.push(curr);
  //   next.shift();
  // }

  // return intArray;

  // Try this with finding all the products of ints prev, then next
  //   [1, 7, 3, 4]
  //   [1, 1, 7, 21]
  //   [84, 12, 28, 21],84

  let productsWithoutIdx = Array(intArray.length);
  let products = 1;

  for (let i = 0; i < intArray.length; i++) {
    productsWithoutIdx[i] = products;
    products *= intArray[i];
  }

  products = 1;

  for (let i = intArray.length - 1; i >= 0; i--) {
    productsWithoutIdx[i] *= products;
    products *= intArray[i];
  }
  return productsWithoutIdx;
}

function getProduct(arr) {
  return arr.reduce((a, b) => a * b, 1);
}
