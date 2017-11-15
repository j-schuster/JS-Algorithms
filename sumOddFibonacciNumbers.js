/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

*/


function sumFibs(num) {
  
 
     var n = [1, 1], odd = [];
  
//determine the fib numbers between 0 and num
  
while (n[n.length-1] + n[n.length-2] <= num) {
  
n.push(n[n.length-1] + n[n.length-2]);
  
}
  
  //for loop to push odd numbers into odd array
  
 for (var i = 0; i < n.length; i++){
   
   if ((n[i] % 2 )){
     
     odd.push(n[i]);
 
     
   }
 }
//sum odd's numbers
return odd.reduce(function (a,b){
  return a + b;
});
  
  
}

sumFibs(10);
