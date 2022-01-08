/*
    Given an SORTED ARRAY and a NUMBER
    find two numbers in the array that when combined have an average equal
    to the given number. There may be more thatn one pair that matches the average
    target

    input: ([2, 3, 4,], 3.5) // true
    input: ([1, 2, 3]. 2.5) // true
    input: ([], 4) // false
    input: ([-1, 0, 3, 4, 5, 6] 4.1) // false

    input: (arr, number)
    output: boolean
    
*/

function averagePair(arr, num) {
  // create pointer for arr
  // while left if less than right check if left and right average equals target number
  // if average is equal to num return true
  // if average is greater than num decrement the right
  // if average is less than num increment the left
  // return false if all fail

  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 0) return false;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === num) {
      return true;
    } else if (average > num) {
      right--;
    } else if (average < num) {
      left++;
    }
  }
  return false;
}

// console.log(averagePair([], 2.5));

function averagePairV2(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  if (arr.length === 0) return false;

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === num) return true;

    if (average < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(averagePairV2([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
