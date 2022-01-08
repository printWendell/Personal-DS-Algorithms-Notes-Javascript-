/*
    implement function that takes in TWO strings and checks whether
    the caharcters in the first string appear somewhere in the second
    srings, WITHOUT their order changing

    input: str1, str2
    output: bool

    input: ('hello', 'hello world') //true
    input: ('sing', 'sting') // true
    input: ('abc', 'abracadabra') // true
    input: ('abc', 'acb') // false(order matters)

    TIME: O(n+m)
    Space: 0(1)
*/

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("sing", "sting"));
