/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  
  var a = str.match(/[aeiou]/); 
  var b = str.indexOf(a);
 
  if (b > 0){
   var result = str.substr(b) + str.substr(0, b) + 'ay';
    return  result;
  }
  
  else return str + 'way';

  
}
translatePigLatin("paragraphs");
