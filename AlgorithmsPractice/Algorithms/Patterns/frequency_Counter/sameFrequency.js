/*
    Write a function called sameFrequency.
    Given two positive integers, find out if the two numbers have
    the same frequency of digits

    input: (182, 281) // true
    input: (543345, 2342342) // false
    input: (34, 14) // false
    input: (22, 222) // false

    Time: 0(n)
*/

function sameFrequency(num1, num2) {
  // convert to string for better comparison
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // check if both numbers have the same length if not return false
  if (strNum1.length !== strNum2.length) return false;
  // create obj to hold values of first num to compare to second num
  let counter = {};

  // loop through first num and add to obj
  for (let num of strNum1) counter[num] = (counter[num] || 0) + 1;
  // loop through second num and compare to obj
  for (let num of strNum2) {
    // if cant find digit, it doesnt match; return false
    if (!counter[num]) return false;
    // if digit match subtract from obj
    counter[num]--;
  }
  // return true
  return true;
}

console.log(sameFrequency(110102, 110102));
