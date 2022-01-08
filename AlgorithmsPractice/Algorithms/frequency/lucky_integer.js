/*
Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

input: arr = [2, 2, 3, 4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them
*/

function findLucky(arr) {
  if (arr.length < 1) return -1;

  let counter = {};
  let lucky = [];

  for (let num of arr) {
    counter[num] ? counter[num]++ : (counter[num] = 1);
  }

  for (let key in counter) {
    if (counter[key].toString() === key) {
      lucky.push(key);
    }
    // console.log(counter[key].toString(), key);
    console.log(Object.values(counter));
  }

  //   console.log(lucky);
}

findLucky([2, 2, 3, 3, 3, 4]);
