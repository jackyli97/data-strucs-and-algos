function findUniqueDeliveryId(deliveryIds) {
  // Find the one unique ID in the array

  return deliveryIds.reduce((a, b) => {
    return a ^ b;
  });
}

// NOTES
// IDs are not guaranteed to be sorted
// [2,1,4]
// Orders arent always fulfilled in order they were received,
// example [1,2,3,3,2,1]
// Some deliveries get cancelled before takeoff
// [1,1,2]

// Just need to exclusive OR all the elements, and unique will be left
// 1 0 1 by itself
// 1 0 1
// 0 0 0
// 0 1 1
// 0 1 1
// 0 1 1
// 0 0 0
