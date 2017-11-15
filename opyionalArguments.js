/*

Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {
  function addTwoAnd(x) {
    return function(y) {
      if(typeof x !== 'number' || typeof y !== 'number'){
        return undefined;
      }
      return x + y;
    };
  }
  var addTwo = addTwoAnd(arguments[0]);
  if(typeof arguments[0] !== 'number'){
    return undefined;
  }else
   if(arguments.length > 1){
     return addTwo(arguments[1]);
    }else 
    return addTwo;
}
addTogether("http://bit.ly/IqT6zt");