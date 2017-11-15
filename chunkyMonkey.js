/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


function chunkArrayInGroups(arr, size) {
  var sets = [];
   
for (var i = 0; i < arr.length; i+=size) { 
	sets.push(arr.slice(i, i + size));
	} 
  return sets;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
