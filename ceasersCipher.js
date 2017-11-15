/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) { 
  //turn the string into an array in order to manipulate its characters
 var characters = str.split('');
  //return the characters and create a function to map through each letter and give them a name i.e letters
  //let letters equal its alphabetic values
  return characters.map(function(letters) {
    letters = letters.charCodeAt();
    //create conditions to add or subtract 13. 65 to 77 is A-N, 78 to 90 = M-Z
    if (letters >= 65 && letters <= 77) {
      letters += 13;
    }
    else
      if (letters >= 78 && letters <= 90) {
        letters -= 13;
      }
    //return the decoded word by assigning its albabetical letter to the numeral and join the string again
    return String.fromCharCode(letters);}).join('');
 
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
