/*
Create a function that takes two or more arrays and returns 
an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function sym(args) {

//call the arguments  
var arg = Array.prototype.slice.call(arguments);

//function to calculate the sym dif between 2 arrays

function diffArray(a, b) {
  return a
    .concat(b)
    .filter(function(item) {
    return !a.includes(item) || !b.includes(item);
  } 
    );
}
//using reduce to as a machine to compare more than two arrays, uses calb f.

var SD = arg.reduce(
  function (
    accumulator,
    currentValue
  ) {
    return diffArray(accumulator, currentValue);
  }
);

//filter out any repeated numbers  

  var symDiff = SD.filter(function(elem, pos) {
  return SD.indexOf(elem) == pos;
});

return symDiff;
}
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);