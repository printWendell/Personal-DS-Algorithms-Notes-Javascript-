/*
    Counting Unique Values

    implement a function that accepts a SORTED array and 
    counts the UNIQUE values in the array. There CAN be 
    negative numbers 

    input: ([1, 1, 1, 1, 1, 2]) // 2
    input: ([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
    input: ([]) // 0
    input: ([-2, -1, -1, 0, 1]) // 4

    Best Case: 0(1)
    Average & Worst: 0(log n)

*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
