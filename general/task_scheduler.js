/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function (tasks, n) {
  //   let cooldownTimes = {};
  //   // let alphaCounts = Array(26).fill(0);
  //   // let asciOfA = "A".charCodeAt(0)
  //   let counts = {};

  //   for (let i=0; i<tasks.length; i++){
  //     // let asci = tasks[i].charCodeAt(0);
  //     // alphaCounts[asci - asciOfA] += 1;
  //     let task = tasks[i];
  //     if (task in counts) counts[task] += 1;
  //     else counts[task]  = 1;
  //   }

  //   let countsArr =  Object.values(counts);

  //   let countSort = Array(Math.max(...countsArr)+1).fill(0);

  //   for (let i=0; i<countsArr.length; i++){
  //     countSort[countsArr[i]] += 1;
  //   }

  //   let sorted = [];

  //   for (let i=0; i<countSort.length;i++){
  //     if (countSort[i] > 0){
  //       while (countSort[i] > 0){
  //         sorted.push(i);
  //         countSort[i] -= 1;
  //       }
  //     }
  //   }

  //   sorted = sorted.reverse();

  //   // let maxIdles = (sorted[0]-1)*n;
  //   let res = [];

  // //   INITIAL LOOP
  //   let firstEle = sorted.shift();
  //   while (firstEle > 0){
  //     res.push(1);
  //     firstEle-=1;
  //     if (firstEle > 0){
  //       for (let i=0; i<n;i++){
  //         res.push(null);
  //       }
  //     }
  //   }

  //   let idx=0;
  //   while (idx < sorted.length){
  //     let ele = sorted[idx];
  //     let i=0;
  //     while (ele > 0){
  //       if(!res[i]){
  //         res[i]=1;
  //         ele--;
  //         i += n;
  //       }else i++;
  //     }
  //     idx++;
  //   }
  //   console.log(res)
  //   return res.length;

  let counts = Array(26).fill(0);
  asciAtA = "A".charCodeAt(0);

  for (let i = 0; i < tasks.length; i++) {
    let asci = tasks[i].charCodeAt(0);

    counts[asci - asciAtA] += 1;
  }

  sortedCounts = counts.sort((a, b) => a - b);

  let mostFreq = sortedCounts.pop() - 1;

  let maxIdles = mostFreq * n;

  for (let i = sortedCounts.length - 1; i >= 0; i--) {
    maxIdles -= Math.min(sortedCounts[i], mostFreq);
  }

  return maxIdles > 0 ? tasks.length + maxIdles : tasks.length;
};

// ["A","A","A"] n=2
// ["A",IDLE,IDLE,"A",IDLE,IDLE,"A"]
// maxIdles intuatively we need 4 idles, we get 4 from, 3-1=2*2=2
// maxIdles = 4
// length of tasks = 3
// length of tasks + maxIdles

// Adding another task would subsitute for an idle
// ["A","A","A","B"] n=2
// had 4 idles, subtracted 1
// ["A","B,IDLE,"A",IDLE,IDLE,"A"]
// length is 4+idle length=4+3

// ["A","A","A","B","B"] n=2
// had 4 idles, subtracted 2
// ["A","B,IDLE,"A","B",IDLE,"A"]
// length is 5+2

// ["A","A","A","B","B","B"] n=2
// maxIdles = 4
// had 4 idles, subtracted 3 = 1, BUT ONE IDLE DOES NOT WORK B/C "B HAD SAME LENGTH AS MAX"
// ["A","B,IDLE,"A","B",IDLE,"A","B"]
// length is 5+2

// SUMMARY
//   Find out which task appears most often
// ^this helps us find max idle, by taking most often, minus 1 and *n
// iterate through the frequencies of everything else, and subtract from idle
// at the end add the size of tasks, plus idles

// ["A","A","A","A","A","A","B","C","D","E","F","G"],
// A appears most with 6
// maxIdle = 5*2 = 10

// 10-6 = 4 + 12 = 16

// WE CAN ALWAYS NEGATE AN IDLE, WHEN THE MOST FREQ IS ODD, IT CAN JUST BE LEFT HANGING AT THE END

//  ["A","A","A"] n=1
// [A,idle,A,idle,A]
// freq=2
// maxIdle = 2

// ["A","A","A","B"] n=1
// maxIdle=2
// logic means output should be 5
// [A,b,A,idle,A]

// // ["A","A","A","B","b","c"] n=1
// maxIdle=2
// 2-2=0-1=-1
// [A,b,A,b,A,c]

//------------------

//  [
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0
// ]

//["A","A","A","B","B","B"]
//[0, 1,null,0,1,null,0,1]
//  max idle = (3-1)*2 = 2
//["A",_,_,_,_,_,_]
//[A,B,idle,A,B,idle,A,B]
// [3]

//["A","A","A"]

// ["A","A","A","A","A","A","B","C","D","E","F","G"]

// [A,B,C,A,D,E,A,F,G,A,_,_,A,_,_,A]

//   ["A","A","A","A","A","A","B","C","D","E","F","G"]

// [6,1,1,1,1,1,1]
//   max = (6-1) * 2 = 10

// [0,0,0,1,1,1,1]
// [0,1,1,0,1,1,0,1,1,0,n,n,0,n,n,0]
// n = 10
