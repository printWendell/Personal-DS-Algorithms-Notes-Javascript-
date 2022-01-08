/*
    aretThereDuplicates

    a function that acepts a VARIABLE NUMBER of arguments and checks 
    whether there are any duplicates among the arguments passed

    input: (1, 2, 3) // false
    input: (1, 2, 2) // true
    input: ('a', 'b', 'c', 'a') // true

    input: list of numbers
    output: boolean
*/

function aretThereDuplicates(...args) {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(aretThereDuplicates(1, 2, 3));
