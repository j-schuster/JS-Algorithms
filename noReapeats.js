/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/


function permAlone(str) {

  var myString = str;
  
  if(str.length < 2){
    return 1;
  }
  
function permut(string) {
    
    if(string.length < 2){
        return string;
    }

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
      
        var char = string[i];
        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 
        
       
     for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation); 
        
 
    }
      return permutations;
      
}

var results = permut(myString);

var end = results.filter(function(str){
   
    if((/([a-z])\1/i).test(str)){
        return false;
    }else
        return str;
    });

return end.length;

}

permAlone('aab');
