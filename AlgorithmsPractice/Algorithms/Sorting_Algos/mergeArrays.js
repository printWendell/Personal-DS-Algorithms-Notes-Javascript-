// Merging Arrays
/*
    --Create an empty array, take a look at the smallest valuees 
       in each input array
    --While there are still values we haven't looked at...
            -if the value in the first array is smaller than the value in 
              the second array, push the value in the first array into our results
              and move on to the next value in the first array
            -if the value in the first array is larger thatn the value in the s
              second array, push the value in the sond array into our results and
              move on to the next value in the second array
            -Once we exhaust one array, push in all remaining values from the 
              other array

*/

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge([100, 200], [1, 2, 3, 5, 6]));
