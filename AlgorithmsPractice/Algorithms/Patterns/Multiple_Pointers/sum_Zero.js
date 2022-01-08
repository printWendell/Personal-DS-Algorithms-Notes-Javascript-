/*
    sum_zero accepts a SORTED array of intergers
    The function should find the FIRST PAIR where the
    sum is 0. Return an array that includes both values that sum to 
    zero or undefined if a pair does not exist

    sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
    sumZero([-2, 0, 1, 3]) // undefined
    sumZero([1, 2, 3]) // undefined

    Terms:
    input: SORTED ARRAY
    OUTPUT: Array of undefined

    Find FIRST PAIR or integers

    TIME: 0(n)
    Space: 0(1)
*/

function naive_sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// refactored
function sumZero(arr) {
  // create two pointers; one at the beginning of array; on at end
  let left = 0;
  let right = arr.length - 1;
  // while left if greater that right check if sum is equal to zero
  while (left < right) {
    let sum = arr[left] + arr[right];
    // if sum is equal to zero return the indices represented with left, right
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // if sum is greater that zero subtract from the right
    else if (sum > 0) {
      right--;
    }
    // if sum in smaller than zero add to left
    else {
      left++;
    }
  }
}

// console.log(sumZero([-4, -3, -1, 0, 1, 2, 5]));

/*
    Pair difference

    Given an one-dimensional UNSORTED ARRAY and an INTEGER, you are to find
    if there exists a PAIR of elements in the array whose difference equals the INTEGER
    give. return 1 if a pair exists else return 0


    input: (arr, num)
    output; 1 or 0

    input: ([1, 3, 5, 3], )
*/

function differencePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let difference;
    if (arr[end] > arr[start]) {
      difference = arr[end] - arr[start];
    } else {
      difference = arr[start] - arr[end];
    }
    // console.log(difference);

    if (difference === num) {
      return 1;
    } else if (difference > num) {
      end--;
    } else {
      start++;
    }
  }

  return 0;
}

function sumZeroV2(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) return undefined;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) return [arr[start], arr[end]];

    if (sum < 0) {
      start++;
    } else {
      end--;
    }
  }
  return undefined;
}

console.log(sumZeroV2([-3, -2, -1, 0, 1, 2, 3]));
