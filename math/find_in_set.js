function contains(array, value) {
  // Check if an integer is present in the array
  let begin = 0;
  let end = array.length - 1;
  let mid;

  while (begin <= end) {
    mid = begin + Math.floor((end - begin) / 2);
    if (array[mid] === value) return true;
    else if (array[mid] > value) end = mid - 1;
    else begin = mid + 1;
  }

  return false;
}
