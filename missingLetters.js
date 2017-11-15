/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
 
 var nums = str.split('').map(function (letter){
   return letter.charCodeAt(0);
   
 });
  
  for (var j = 0; j < nums.length; j++){
    if (nums[j + 1] - nums[j] > 1){
      return String.fromCharCode(nums[j] + 1);
    }
    
  }
  
}

fearNotLetter("abce");