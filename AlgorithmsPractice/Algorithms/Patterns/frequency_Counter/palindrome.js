function isPalindrome(str) {
  const counter = {};

  for (let char of str) {
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }
  //   console.log(counter);
  for (let char of str) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char]--;
    }
  }
  return true;
}

// console.log(isPalindrome("madam"));
