/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/


function slasher(arr, howMany) {
  
  var newArr = [];
  
  arr.splice(0, howMany);
  // it doesn't always pay to be first
  return arr;
}

slasher([1, 2, 3], 2);
