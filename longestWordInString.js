// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var numbers = [];
  
  for (var i = 0; i < strSplit.length; i++) {
    numbers.push(strSplit[i].length);
  }
  
  return Math.max(...numbers);
}

findLongestWord("The quick brown fox jumped over the lazy dog");