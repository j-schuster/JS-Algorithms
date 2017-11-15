/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/


function sumAll(arr) {
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];
  
  
while (min <= max){
  range.push(min++);
}
  

  
  
  return range.reduce(function (a,b){
    return a + b;
    
  });
  
}

sumAll([1, 4]);
