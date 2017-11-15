/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
*/


function sumPrimes(num) {
  
  var primes = [], a = 0, range = [], sum =[];
   
  //range of numbers 
for (a ; a < num + 1; a++ ){
        while(a <= num){
            range.push(a);
            break;
        }
    }
  //helper function to check if a number is a prime
    function isPrime(value){
      
      for(var x = 2; x < value; x++){
        if(value % x === 0){
        return false;
      }
    }
    return true;  
 }
  //loop through the range array and push the prime numbers into primes    
    for (var j = 2; j < range.length; j++){
        if (isPrime(range[j])){
            primes.push(j);
        }
    }
 //add'm up   
 sum = primes.reduce(function (a,b){
    return a + b; 
     });  
    
    return sum;
}
sumPrimes(10);



