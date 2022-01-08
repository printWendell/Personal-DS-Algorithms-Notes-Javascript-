// Anagrams
/* 
    Given two string, write a function to determine if the second string is an 
    anagram of the first.
    example cimema = iceman

    input: string1, string2
    output: bool
    validAnagram(" ", " ") // true
    validAnagram("aaz", "zza") // false
    validAngram("qwerty", "qtwyer") // true
*/

function validAnagram(str1, str2) {
  // check if their the same length
  if (str1.length != str2.length) return false;
  // create two objects to store both strings
  strObj1 = {};
  strObj2 = {};
  // loop through both array to and store values in object
  for (let char of str1) {
    strObj1[char] = (strObj1[char] || 0) + 1;
  }
  for (let char of str2) {
    strObj2[char] = (strObj2[char] || 0) + 1;
  }
  console.log(strObj1);
  console.log(strObj2);
  // check if both objects have the same values stored in them
  for (let key in strObj1) {
    if (!key in strObj2) {
      return false;
    }
    if (strObj1[key] !== strObj2[key]) {
      return false;
    }
    return true;
  }
}

// console.log(validAnagram("awesome", "aswomee"));

function refactoredValidAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let char of first) {
    // if letter eists, increment, otherwise set to 1
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  console.log(lookup);

  for (let char of second) {
    // cant find char or char is zero than it's not an anagram
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char]--;
    }
  }
  return true;
}

console.log(refactoredValidAnagram("iceman", "cinema"));
