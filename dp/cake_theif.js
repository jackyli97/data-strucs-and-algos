function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // Calculate the maximum value we can carry

  let weightCheck = cakeTypes.filter((cake) => cake.weight === 0);

  let table = Array(weightCapacity + 1).fill(0);

  for (let i = 0; i < cakeTypes.length; i++) {
    if (cakeTypes[i].weight === 0 && cakeTypes[i].value > 0) return Infinity;
    for (let j = cakeTypes[i].weight; j < table.length; j++) {
      let cakeVal = cakeTypes[i].value;
      let remainderCakeVal = table[j - cakeTypes[i].weight];
      table[j] = Math.max(cakeVal + remainderCakeVal, table[j]);
    }
  }
  return table[table.length - 1];
}

// const cakeTypes = [
//   { weight: 5, value: 160 },
//   { weight: 3, value: 90 },
//   { weight: 2, value: 15 },
// ];

// const capacity = 8;

// weight 2 value 15
// [0,0,15,90,90,160,180,180,250]
// calcs
// 6-5=1
// 4-3=1
// 5-3 = 2=>90
// 6-3 = 90 + 90= 180
// 7-3 = 180
// 8-3 = 90 + 160 = 250
// 3-2 = 1
// 4-2=15+15
// 5-2 = 15+90=105
// 6-2 = 15 +
// 7-2 = 15+160=175
// 8-2 = 15+180-

// { weight: 2, value: 1 }
// [0,0,1,1,2,2,3,3,4,4]
