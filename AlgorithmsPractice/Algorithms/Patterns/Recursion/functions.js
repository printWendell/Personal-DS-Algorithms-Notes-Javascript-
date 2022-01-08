function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(6));

// find all odd values in an array using recursion

function collectOdds(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7]));

function collectOddsV2(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddsV2(arr.slice(1)));
  return newArr;
}

// console.log(collectOddsV2([1, 2, 3, 4, 5, 6]));

// power function
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

// write a function that takes in an array fo numbers and return the prodect of them all
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function reverse(str) {
  //   console.log(str.slice(-1));
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("yes"));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("tat"));

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

function capitalizeFirst(arr) {
  if (arr.length === 0) return null;
  console.log(arr[0].toUpperCase());
}

capitalizeFirst(["car", "banana", "taco"]);
