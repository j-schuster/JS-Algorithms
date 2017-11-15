/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/


function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var compare = [];
  var toFilter = args[0];
 
  for (var i = 1; i < arguments.length;i++) {
    compare.push(arguments[i]);
  }
  
var filteredArray = toFilter.filter(function(e) {
    
    return compare.indexOf(e) === -1;
});
      
  return filteredArray;
 
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
