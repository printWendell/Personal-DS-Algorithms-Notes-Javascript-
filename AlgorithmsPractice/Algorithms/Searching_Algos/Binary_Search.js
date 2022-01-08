/*
    Rather than elimination one elemnt at a time you
    can eliminate HALF of the remaining elelments at 
    a time. But it ONLY works on SORTED arrays

    // Pseudocode
    Create a left point at the start of array and right pointer at end of array
    create a pointer in the middle
    While the left pointer comes before the right point:
        if you find the value you want, return the index
        if the value is too small, move the left pointer up
        if the value is too large, mobe the right pointer dows

*/

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((end + start) / 2);

  //   while (array[middle] !== value && start <= end) {
  //     if (value < array[middle]) {
  //       end = middle - 1;
  //     } else {
  //       start = middle + 1;
  //     }
  //     middle = Math.floor((end + start) / 2);
  //   }
  //   if (array[middle] === value) {
  //     return middle;
  //   } else {
  //     return -1;
  //   }

  //   shorthanded version
  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((end + start) / 2);
  }
  return array[middle] === value ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 12, 33, 45, 67], 67));

function binarySearchV2(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while ((arr[middle] !== val) & (start <= end)) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 12, 33, 45, 67], 8));
