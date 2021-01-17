function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) throw new Error("Must have at least 3 integers");
  // Just need to sort, and grab 3 largest eles(IF ALL POSITIVE)

  if (arrayOfInts.length === 3) return getProduct(arrayOfInts);

   let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
   let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
   let highestProd2 = arrayOfInts[0] * arrayOfInts[1];
   let lowestProd2 = arrayOfInts[0] * arrayOfInts[1];
   let highestProd3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

   for (let i = 2; i < arrayOfInts.length; i++) {
     let current = arrayOfInts[i];

     highestProd3 = Math.max(
       highestProd3,
       lowestProd2 * current,
       highestProd2 * current
     );

     highestProd2 = Math.max(highestProd2, highest * current, lowest * current);

     lowestProd2 = Math.min(lowestProd2, highest * current, lowest * current);

     highest = Math.max(highest, current);
     lowest = Math.min(lowest, current);
   }

   return highestProd3;
//   // sort
//   let max = Math.max(...arrayOfInts);
//   let min = Math.min(...arrayOfInts);
//   let posCounts = Array(max + 1).fill(0);
//   let negCounts = Array(Math.abs(min) + 1).fill(0);

//   for (let i = 0; i < arrayOfInts.length; i++) {
//     if (arrayOfInts[i] >= 0) posCounts[arrayOfInts[i]] += 1;
//     else negCounts[Math.abs(arrayOfInts[i])] += 1;
//   }
//   let sorted = [];

//   for (i = negCounts.length - 1; i > 0; i--) {
//     if (negCounts[i] > 0) {
//       while (negCounts[i] > 0) {
//         sorted.push(i * -1);
//         negCounts[i] -= 1;
//       }
//     }
//   }

//   for (i = 0; i < posCounts.length; i++) {
//     if (posCounts[i] > 0) {
//       while (posCounts[i] > 0) {
//         sorted.push(i);
//         posCounts[i] -= 1;
//       }
//     }
//   }

//   // sorted = arrayOfInts.sort((a,b)=>a-b)

//   let negatives = sorted.filter((num) => num < 0);
//   let positives = sorted.filter((num) => num > 0);

//   if (negatives.length <= 1 || negatives.length === arrayOfInts.length) {
//     return getProduct(sorted.slice(sorted.length - 3, sorted.length));
//   } else {
//     let negativesProd = negatives[0] * negatives[1];
//     let secondThirdPositivesProd =
//       positives[positives.length - 3] * positives[positives.length - 2];
//     if (negativesProd > secondThirdPositivesProd) {
//       return negativesProd * positives[positives.length - 1];
//     } else {
//       return secondThirdPositivesProd * positives[positives.length - 1];
//     }
//   }
}
