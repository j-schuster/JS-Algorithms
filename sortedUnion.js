/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  
 var args = Array.from(arguments); 
 var inOne = args.reduce(function (a,b){
   return a.concat(b);
 });
  
  var sorted = inOne.filter (function (elem, index, number){
    return number.indexOf(elem) == index;
    
  });
  
  return sorted;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
