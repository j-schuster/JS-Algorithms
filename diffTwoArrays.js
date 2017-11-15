/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  function check (one, two) {
    
    for (var i = 0; i < one.length; i ++){
      if(two.indexOf(one[i]) === -1){
        newArr.push(one[i]);
      }   
    }
  }
  
  
  check(arr1, arr2);
  check(arr2, arr1);
  
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
