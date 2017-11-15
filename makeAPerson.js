/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/


var Person = function(firstAndLast) {
   
  var fullName = firstAndLast.split(' ');
  var firstName = fullName[0];
  var lastName = fullName[1];
  
  this.getFirstName = function() {
    return firstName;
  };
  
  this.getLastName = function() {
    return lastName;
  };
  
  this.getFullName = function() {
    return firstName + ' ' +lastName;
  };
  
  this.setFirstName = function(firstN) {
    firstName = firstN;
    return firstName + ' ' + lastName;
   };
  
  this.setLastName = function(lastN) {
    lastName = lastN;
    return firstName + lastName;
  };
  
  this.setFullName = function(fullName) {
    fullName = fullName.split(' ');
    firstName = fullName[0];
    lastName = fullName[1];
    return firstName + ' ' + lastName;
  };
 
  
};

var bob = new Person('Bob Ross');
