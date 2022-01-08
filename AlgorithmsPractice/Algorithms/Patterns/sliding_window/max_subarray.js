/*
    Write a function which accepts an array of integers and a number called n.
    The function should calculate the maxinume sum of n consectutive elements in the array

    input: array, num
    output: num

    input: ([1, 2, 5, 2, 8, 1, 5], 2) // 10
    input: ([1, 2, 5, 2, 8, 1, 5], 4) // 17
    input: ([4, 2, 1, 6], 1) // 6
    input: ([4, 2, 1, 6, 2], 4) // 13
    input: ([], 4) // null
*/

function maxSubarrraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function maxSubarrraySumV2(arr, num) {
  let currentValue = 0;
  let maxValue = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentValue += arr[i];
    if (i >= num - 1) {
      maxValue = Math.max(maxValue, currentValue);
      currentValue -= arr[i - (num - 1)];
    }
  }
  return maxValue;
}

// console.log(maxSubarrraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarrraySumV2([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 5));

function maxSub(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSub([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 4));
