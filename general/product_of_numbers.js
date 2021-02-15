var ProductOfNumbers = function () {
  this.numbers = [];
  this.products = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  this.numbers.push(num);
  // console.log("before",this.numbers, this.products, "num", num)
  calculateProds(this.numbers, this.products);
  // console.log("after", this.numbers, this.products)
  let z = "z";
};

var calculateProds = function (numbers, products) {
  products[0] = numbers[numbers.length - 1];
  let pointer1 = 1;
  let pointer2 = numbers.length - 2;

  while (pointer1 < numbers.length) {
    products[pointer1] = products[pointer1 - 1] * numbers[pointer2];
    pointer1++;
    pointer2--;
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  return this.products[k - 1];
};

// [3]
// table: [3]

// [3,0]
// table: [0] => [0,3]

// [3,0,2]
// table: [2,0,0]

// [3,0,2,5]
// [5,10,0,0]

// Pattern: update the product of one, which is first element in table to be last ele in nums
// can have two pointers
// -stop iterating when 1st pointer is greater than 2nd
//   -1st pointer represents the idx in table
//   -2nd pointer represents the idx in the nums
// we can start the loop with 1st pointer at 1, and 2nd pointer at nums.length-2
// we say that val at table[1stpointer] = table[1stpointer-1]*nums[2ndpointer]

// we probably want to do all the adding and calculating of the product in time, so that a getproduct would just be keying into the table arr, -1.

// [1,2,3,4,5,6,7]
// 0,5
// 1,4
// 2,3

// 0,6
// 1,5
// 2,4
// 3,3
/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
