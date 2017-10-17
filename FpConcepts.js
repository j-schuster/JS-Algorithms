//ANONYMOUS FUNCTIONS - Important in Lambda calculus, which lies at the core of all functional languages 

// anonymous functions are convenient to define ad-hoc logic for when we need it
function powersOf(x){
  return function(y){
    return Math.pow(x,y)
  }
}
// the inside function doesnt need a name. It cant be used anywhere outside of this function.

const powerOf2 = powersOf(2)
const powerOf3 = powersOf(3)

console.log(powerOf3(9))
console.log(powerOf3(12))

// uses sparingly though, difficult to identify in call stacks and hard to debug.


// DIVIDE AND CONQUER - Euclidean algorithm for finding greatest common demoninators between two numbers
function gcd(a, b) { 
  if (b == 0) { 
    // base case (conquer) 
    return a; 
  } 
  else { 
    // recursive case (divide) 
    return gcd(b, a % b); 
  } 
} 
  
console.log(gcd(12,8)); 
console.log(gcd(100,20)); 


// CALLBACK FUNCTIONS - an easy way to pass around data
const myArray = [1,2,3]; 
const myCallback = x => x + 1 
console.log(myArray.map(myCallback)); 

// Array.prototype.map() - a very useful method to map over every item in an array
const numbers = [1,2,3,4,5,6,7]
console.log(numbers.map((x,i) => x * i))

// Array.prototype.filter() - filtering out elements from an array without mutating the string
const sequence = [-3,-2,-1,0,1,2,3]
console.log(sequence.filter((x) => x > 0 ))







