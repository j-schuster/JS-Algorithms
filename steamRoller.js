/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var merged = [].concat.apply([], arr);
  var final = [].concat.apply([], merged);
  
  return [].concat.apply([], final);
}

steamrollArray([1, [2], [3, [[4]]]]);